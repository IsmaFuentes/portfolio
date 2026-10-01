import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";
import appScreenshot from "../assets/scraping/1-app.png";
import runningScreenshot from "../assets/scraping/2 - scraping.png";

hljs.registerLanguage("csharp", csharp);

function ScrapingPage() {
  const features = [
    "Perfiles configurables para hasta 10 comercios online",
    "Inicio de sesión opcional para tiendas que requieren cuenta",
    "Selección de navegador: Chrome o Edge",
    "Modo rendimiento para omitir imágenes, estilos y otros recursos",
    "Viewport HD fijo para conservar la estructura de las páginas",
    "Exportación a Excel, con opción de separar los datos por categoría",
    "Filtro para procesar únicamente las categorías seleccionadas",
    "Configuración de carpeta de destino para los ficheros generados",
  ];

  const technologies = [
    ".NET 10 (C#)",
    "WinForms",
    "WPF",
    "DevExpress",
    "PuppeteerSharp",
    "Chrome / Edge",
  ];

  const codeSample = `
using WebScraper.CORE.Implementation.Models;
using WebScraper.CORE.Implementation.Interface;
using WebScraper.CORE.Implementation.Drivers.Base;

namespace WebScraper.CORE.Implementation.Drivers
{
  public class CustomWebDriver : Driver, IWebScraper
  {
    public static readonly string[] AvailableCategories = ["categoría1", "categoría2", "categoría3"];

    public CustomWebDriver(WebDriverConfiguration configuration, string[] filter) : base(configuration)
    {
      BaseAddress = "https://webcomercioonline.com";
      this.filter = filter;
    }

    /// <summary>
    /// Filtro de categorías a procesar
    /// </summary>
    private readonly string[] filter;

    public async Task<IEnumerable<ProductDetails>> Launch(CancellationToken token)
    {
      base.RegisterCancellationToken(token);

      var itemsList = new List<ProductDetails>();

      try
      {
        await OpenBrowser();

        OpenPageResult = await OpenPageAsync(BaseAddress, Configuration.UsePerformanceMode);

        if(OpenPageResult.IsSuccessful)
        {
          using(var mainPage = OpenPageResult.Page)
          {
            // Esperar y aceptar cookies
            await Task.Delay(2000);
            await mainPage.EvaluateExpressionAsync("acceptCookies()");
            await mainPage.WaitForSelectorAsync(".menu_container");
            var menuItems = await mainPage.QuerySelectorAllAsync(".menu_container > .menu_link_container");

            if(menuItems.Length > 0)
            {
              foreach(var item in menuItems)
              {
                string? categoryName = (await (await item.QuerySelectorAsync("span > a")).GetPropertyAsync("textContent"))?
                  .RemoteObject?.Value?.ToString() ?? string.Empty;

                if(filter.Length > 0 && !filter.Contains(categoryName))
                    continue;

                var sections = await item.QuerySelectorAllAsync(".submenu_container > .submenu_link_container > a");

                if(sections.Length > 0)
                {
                  foreach(var section in sections)
                  {
                    string? sectionName = (await section.GetPropertyAsync("textContent"))?.RemoteObject.Value?.ToString() ?? string.Empty;
                    string? sectionUrl = (await section.GetPropertyAsync("href"))?.RemoteObject?.Value?.ToString();

                    if(!string.IsNullOrEmpty(sectionUrl))
                    {
                      OpenPageResult = await OpenPageAsync(sectionUrl, Configuration.UsePerformanceMode);

                      if(OpenPageResult.IsSuccessful)
                      {
                        using(var productsPage = OpenPageResult.Page)
                        {
                          await Task.Delay(1000);
                          // scroll hasta llegar al tope dándo suficiente tiempo para que la página cargue.
                          await productsPage.EvaluateFunctionAsync(Properties.Resources.scroll_down);

                          var products = await productsPage.QuerySelectorAllAsync("#carousel_articles > .article");

                          if(products.Length > 0)
                          {
                            foreach(var product in products)
                            {
                              var priceHandle = await product.QuerySelectorAsync(".article_price > span");
                              var titleHandle = await product.QuerySelectorAsync(".article_name > span");

                              if(priceHandle is not null && titleHandle is not null)
                              {
                                var price = await priceHandle.GetPropertyAsync("textContent");
                                var title = await titleHandle.GetPropertyAsync("textContent");
                                string productTitle = title.RemoteObject?.Value?.ToString().Trim().Replace("\\n", "") ?? string.Empty;
                                string productPrice = price.RemoteObject?.Value?.ToString().Trim().Replace("\\n", "") ?? string.Empty;

                                itemsList.Add(new ProductDetails()
                                {
                                  ProductId = ProductDetails.GenerateProductId(productTitle),
                                  Category = categoryName,
                                  Section = sectionName,
                                  ProductName = productTitle,
                                  ProductPrice = productPrice
                                });
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      catch(Exception ex)
      {
        if(!token.IsCancellationRequested)
            Configuration.Feedback?.Invoke($"Ha ocurrido un error durante la exportación: {ex.Message}");
      }

      return itemsList;
    }
  }
}`;
  const highlightedCode = hljs.highlight(codeSample, {
    language: "csharp",
  }).value;

  const screenshots = [
    {
      image: appScreenshot,
      title: "Configuración de perfiles y comercios",
      description:
        "Interfaz de escritorio para seleccionar comercios, ajustar sus opciones y configurar la extracción.",
    },
    {
      image: runningScreenshot,
      title: "Extracción en ejecución",
      description:
        "La aplicación procesa la tienda en un navegador junto a la interfaz de seguimiento.",
    },
  ];
  const [expandedScreenshot, setExpandedScreenshot] = useState<
    (typeof screenshots)[number] | null
  >(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (expandedScreenshot && !dialog.open) {
      dialog.showModal();
    } else if (!expandedScreenshot && dialog.open) {
      dialog.close();
    }
  }, [expandedScreenshot]);

  return (
    <div className="min-h-screen bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <Link
          to="/projects"
          className="mb-6 inline-flex items-center text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver a Proyectos
        </Link>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-zinc-300">
              Completado
            </span>
            <span className="text-xs font-semibold uppercase text-zinc-500">
              Automatización
            </span>
          </div>
          <h1 className="mb-3 max-w-4xl text-4xl font-bold text-white md:text-5xl">
            Extracción de datos y automatización web
          </h1>
          <p className="text-base text-zinc-400 md:text-lg">
            Desarrollo para DISPREU LOGÍSTICA
          </p>
        </header>

        <section className="mb-8 rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-6">
          <h2 className="mb-3 text-xl font-semibold text-white">El proyecto</h2>
          <div className="space-y-3 text-sm leading-relaxed text-zinc-400 md:text-base">
            <p>
              Para mejorar los precios de cara al público, DISPREU necesitaba
              recopilar información de distintas cadenas de supermercados. Tras
              analizar sus tiendas online, desarrollé una aplicación de
              escritorio para automatizar la extracción y centralizar los
              resultados.
            </p>
            <p>
              La solución permitía configurar perfiles y opciones específicas
              para hasta diez comercios, y exportar los datos obtenidos a
              ficheros Excel listos para su análisis.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Funcionalidades
          </h2>
          <div className="grid gap-x-6 gap-y-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-zinc-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-6">
            <h2 className="mb-3 text-lg font-semibold text-white">
              Retos técnicos
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
              <li>
                <span className="font-medium text-zinc-200">
                  Carga dinámica:
                </span>{" "}
                algunas tiendas muestran productos al hacer scroll. Se
                implementaron estrategias de desplazamiento para cargar el
                catálogo antes de extraerlo.
              </li>
              <li>
                <span className="font-medium text-zinc-200">
                  Límites de acceso:
                </span>{" "}
                para comercios con restricciones de solicitudes, se incorporó
                rotación de proxies.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-6">
            <h2 className="mb-3 text-lg font-semibold text-white">
              Rendimiento y procesamiento
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
              <li>
                Hasta cuatro instancias de navegador procesaban tareas en
                paralelo de forma asíncrona.
              </li>
              <li>
                El modo rendimiento evitaba descargar imágenes, estilos y otros
                recursos no necesarios para la extracción.
              </li>
              <li>
                Un viewport HD fijo ayudaba a mantener una estructura de página
                consistente durante la automatización.
              </li>
            </ul>
          </article>
        </section>

        <section className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70">
          <div className="border-b border-white/10 px-5 py-4 md:px-6">
            <h2 className="text-lg font-semibold text-white">
              Ejemplo de extracción
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Filtra las categorías configuradas y carga los productos bajo
              demanda con PuppeteerSharp.
            </p>
          </div>
          <p className="border-b border-white/10 px-5 py-4 text-sm leading-relaxed text-zinc-400 md:px-6">
            El proceso recorre las categorías disponibles (o solo las elegidas
            en el filtro) y navega por las secciones de cada una. En cada página
            desplaza el navegador para cargar los productos que aparecen bajo
            demanda, recoge sus nombres y precios y los añade al resultado.
            Cuando termina una sección, continúa con la siguiente hasta
            completar el recorrido.
          </p>
          <pre className="code-highlight overflow-x-auto p-5 text-xs leading-relaxed text-zinc-300 md:p-6 md:text-sm">
            <code
              className="language-csharp"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </section>

        <section className="mb-8 rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-semibold text-white">Galería</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {screenshots.map((screenshot) => (
              <figure
                key={screenshot.title}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.035]"
              >
                <button
                  type="button"
                  onClick={() => setExpandedScreenshot(screenshot)}
                  aria-label={`Ampliar imagen: ${screenshot.title}`}
                  className="group block w-full cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-white"
                >
                  <div className="flex aspect-video items-center justify-center overflow-hidden bg-black/30 p-2">
                    <img
                      src={screenshot.image}
                      alt=""
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>
                <figcaption className="p-4">
                  <h3 className="mb-1 text-base font-semibold text-white">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {screenshot.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <dialog
          ref={dialogRef}
          aria-label={expandedScreenshot?.title}
          onClose={() => setExpandedScreenshot(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setExpandedScreenshot(null);
            }
          }}
          className="fixed inset-0 m-auto max-h-[94dvh] max-w-[96vw] overflow-visible rounded-xl border border-white/15 bg-zinc-950 p-3 text-white shadow-2xl backdrop:bg-black/85 md:max-w-[90vw]"
        >
          {expandedScreenshot && (
            <figure className="relative">
              <button
                type="button"
                onClick={() => setExpandedScreenshot(null)}
                aria-label="Cerrar imagen ampliada"
                className="absolute right-2 top-2 z-10 rounded-md border border-white/20 bg-black/70 p-2 text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={expandedScreenshot.image}
                alt={expandedScreenshot.title}
                className="max-h-[80dvh] max-w-[90vw] object-contain"
              />
              <figcaption className="pt-3 text-sm text-zinc-300">
                {expandedScreenshot.title}
              </figcaption>
            </figure>
          )}
        </dialog>
      </div>
    </div>
  );
}

export default ScrapingPage;
