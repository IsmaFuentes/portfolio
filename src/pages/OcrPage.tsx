import { Link } from "react-router-dom";
import ProjectMetrics from "../components/ProjectMetrics";
import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("javascript", javascript);

function OcrPage() {
  const extractedData = [
    "Número y fecha de factura",
    "Cliente y proveedor",
    "Base imponible, impuestos y total",
    "Líneas de factura: descripción, cantidad y precio",
  ];

  const azureCodeExample = `import {
  AzureKeyCredential,
  DocumentAnalysisClient,
} from "@azure/ai-form-recognizer";
import { createReadStream } from "node:fs";

const endpoint = process.env.AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT;
const apiKey = process.env.AZURE_DOCUMENT_INTELLIGENCE_KEY;

if (!endpoint || !apiKey) {
  throw new Error("Missing Document Intelligence credentials");
}

const client = new DocumentAnalysisClient(
  endpoint,
  new AzureKeyCredential(apiKey),
);

const poller = await client.beginAnalyzeDocument(
  "prebuilt-invoice",
  createReadStream("factura.pdf"),
);
const { documents } = await poller.pollUntilDone();
const invoiceFields = documents?.[0]?.fields;
console.log("Invoice ID:", invoiceFields?.InvoiceId?.content);`;

  const codeExamples = [
    {
      title: "Binarización adaptativa con Otsu",
      description:
        "Convierte la imagen a escala de grises y calcula umbrales locales para separar texto y fondo, especialmente útil con iluminación o contraste irregulares.",
      code: `using Tesseract;

using var source = Pix.LoadFromFile("factura.png");
using var grayscale = source.ConvertRGBToGray();
using var binary = grayscale.BinarizeOtsuAdaptiveThreshold(
    200, 200, 10, 10, 0.1f);

binary.Save("factura-binarizada.png");`,
      source:
        "https://github.com/charlesw/tesseract/blob/master/src/Tesseract.Tests/Leptonica/PixTests/ImageManipulationTests.cs#L33-L47",
    },
    {
      title: "Corrección de inclinación",
      description:
        "Detecta la inclinación de la página y la rota para alinear las líneas de texto antes del reconocimiento.",
      code: `using Tesseract;

using var source = Pix.LoadFromFile("factura.png");
using var deskewed = source.Deskew(out _);

deskewed.Save("factura-enderezada.png");`,
      source:
        "https://github.com/charlesw/tesseract/blob/master/src/Tesseract.Tests/Leptonica/PixTests/ImageManipulationTests.cs#L16-L32",
    },
    {
      title: "Reducción de ruido",
      description:
        "Despeckle reduce las motas pequeñas mediante operaciones morfológicas, procurando conservar los trazos de los caracteres.",
      code: `using Tesseract;

using var source = Pix.LoadFromFile("factura.png");
using var despeckled = source.Despeckle(Pix.SEL_STR3, 3);

despeckled.Save("factura-sin-motas.png");`,
      source:
        "https://github.com/charlesw/tesseract/blob/master/src/Tesseract/Pix.cs#L593-L631",
    },
    {
      title: "Eliminación de líneas",
      description:
        "RemoveLines elimina líneas horizontales que pueden atravesar el texto o las tablas. La imagen de entrada debe estar en escala de grises.",
      code: `using Tesseract;

using var grayscale = Pix.LoadFromFile("factura-gris.png");
using var withoutLines = grayscale.RemoveLines();

withoutLines.Save("factura-sin-lineas.png");`,
      source:
        "https://github.com/charlesw/tesseract/blob/master/src/Tesseract.Tests/Leptonica/PixTests/ImageManipulationTests.cs#L119-L145",
    },
  ];

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
            Sistema OCR de facturación
          </h1>
          <p className="text-base text-zinc-400 md:text-lg">
            De plantillas locales con Tesseract a extracción documental en la
            nube
          </p>
        </header>

        <ProjectMetrics
          items={[
            { value: "2 etapas", label: "Evolución del sistema" },
            { value: "Tesseract", label: "OCR local inicial" },
            { value: "Azure AI", label: "Extracción cloud" },
          ]}
        />

        <section className="mb-8 rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-6">
          <h2 className="mb-3 text-xl font-semibold text-white">El proyecto</h2>
          <div className="space-y-3 text-sm leading-relaxed text-zinc-400 md:text-base">
            <p>
              Con apenas seis meses de experiencia, asumí el desarrollo de un
              sistema capaz de leer facturas PDF, extraer sus datos y guardarlos
              de forma estructurada para su gestión posterior. Era mi primer
              proyecto de tratamiento de imagen y reconocimiento óptico de
              caracteres, así que investigué y probé distintas técnicas para
              resolverlo.
            </p>
            <p>
              El sistema debía reconocer tanto los datos generales de la factura
              como el detalle de sus productos, adaptándose a documentos de
              distintos proveedores.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Datos extraídos
          </h2>
          <div className="grid gap-x-6 gap-y-3 md:grid-cols-2">
            {extractedData.map((item) => (
              <div key={item} className="flex items-start">
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
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <header className="mb-5 max-w-3xl">
            <h2 className="text-xl font-semibold text-white">
              Primera versión: OCR local con plantillas
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              La primera aplicación se desarrolló con DevExpress XAF para
              Windows Forms. El flujo combinaba plantillas por proveedor,
              reconocimiento local con Tesseract y reglas propias para convertir
              el texto de las facturas en información útil.
            </p>
          </header>

          <ol className="divide-y divide-white/10 border-y border-white/10">
            <li className="grid gap-2 py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4">
              <span className="text-sm font-semibold text-zinc-500">01</span>
              <div>
                <h3 className="font-semibold text-white">
                  Identificar proveedor y plantilla
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  Se identificaba el proveedor de la factura y se seleccionaba
                  su plantilla. Así, el sistema podía aplicar una configuración
                  adaptada a la disposición de cada documento.
                </p>
              </div>
            </li>
            <li className="grid gap-2 py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4">
              <span className="text-sm font-semibold text-zinc-500">02</span>
              <div>
                <h3 className="font-semibold text-white">
                  Delimitar las regiones de interés
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  La plantilla definía por coordenadas dónde buscar los datos
                  relevantes, como el número, la fecha, los importes y las
                  líneas de productos. El reconocimiento se enfocaba en esas
                  zonas en vez de tratar la página como un único bloque.
                </p>
              </div>
            </li>
            <li className="grid gap-2 py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4">
              <span className="text-sm font-semibold text-zinc-500">03</span>
              <div>
                <h3 className="font-semibold text-white">
                  Preparar la imagen y reconocer el texto
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  En documentos escaneados, el ruido o la inclinación podían
                  dificultar la lectura. Por eso se investigaron y probaron
                  técnicas de procesamiento con Leptonica antes de pasar las
                  regiones a Tesseract OCR.
                </p>
              </div>
            </li>
            <li className="grid gap-2 py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4">
              <span className="text-sm font-semibold text-zinc-500">04</span>
              <div>
                <h3 className="font-semibold text-white">
                  Convertir el OCR en datos estructurados
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  El texto reconocido se procesaba con expresiones regulares y
                  reglas de negocio para obtener los campos de la factura y sus
                  líneas de detalle en un formato preparado para su gestión
                  posterior.
                </p>
              </div>
            </li>
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            La arquitectura modular de XAF permitió construir la aplicación de
            escritorio con rapidez y dejaba abierta la posibilidad de
            evolucionarla hacia una versión web.
          </p>
        </section>

        <section className="mb-8">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">
              Tratamiento de imagen con Leptonica
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              La primera versión utilizó Leptonica mediante la API Pix expuesta
              por Tesseract para .NET. Estas muestras ilustran operaciones
              disponibles en la biblioteca y no implican que todas formaran
              parte del flujo final del proyecto.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {codeExamples.map((example) => (
              <article
                key={example.title}
                className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70"
              >
                <div className="border-b border-white/10 p-4">
                  <h3 className="font-semibold text-white">{example.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {example.description}
                  </p>
                </div>
                <pre className="code-highlight overflow-x-auto p-4 text-xs leading-relaxed text-zinc-300">
                  <code
                    className="language-csharp"
                    dangerouslySetInnerHTML={{
                      __html: hljs.highlight(example.code, {
                        language: "csharp",
                      }).value,
                    }}
                  />
                </pre>
                <div className="border-t border-white/10 px-4 py-3">
                  <a
                    href={example.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-500 underline decoration-white/15 underline-offset-4 transition-colors hover:text-zinc-200"
                  >
                    Ver referencia en GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <header className="mb-6 max-w-3xl">
            <h2 className="text-xl font-semibold text-white">
              Segunda versión: aplicación web y Azure AI Document Intelligence
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              Más adelante, junto al equipo, migramos el producto de escritorio
              a una arquitectura web con React, Node.js y MongoDB. En esa
              evolución sustituimos el OCR local de Tesseract por el servicio
              cloud de Azure, manteniendo una capa propia para adaptar los
              resultados al proceso de facturación.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <ol className="divide-y divide-white/10 border-y border-white/10">
              <li className="grid gap-2 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-3">
                <span className="text-sm font-semibold text-zinc-500">01</span>
                <div>
                  <h3 className="font-semibold text-white">
                    Llevar el proceso a la web
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    React pasó a ofrecer la interfaz de trabajo, mientras
                    Node.js y MongoDB daban soporte a la lógica de servidor y al
                    almacenamiento de la información.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-3">
                <span className="text-sm font-semibold text-zinc-500">02</span>
                <div>
                  <h3 className="font-semibold text-white">
                    Delegar la extracción documental
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Azure analizaba las facturas y devolvía campos y datos
                    estructurados. El SDK de JavaScript permite iniciar ese
                    análisis desde Node.js y esperar el resultado de forma
                    asíncrona.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-3">
                <span className="text-sm font-semibold text-zinc-500">03</span>
                <div>
                  <h3 className="font-semibold text-white">
                    Completar y validar los datos
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Una capa de lógica propia completaba los campos que el
                    servicio no reconocía y calculaba el desglose de impuestos
                    con expresiones regulares, algoritmos y reglas de negocio.
                  </p>
                </div>
              </li>
            </ol>

            <article className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70">
              <div className="border-b border-white/10 p-4">
                <h3 className="font-semibold text-white">
                  Ejemplo: analizar una factura con el SDK de JavaScript
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Muestra el cliente oficial de Azure, el modelo prebuilt de
                  facturas y la lectura del resultado. Las credenciales se
                  obtienen del entorno, no del código fuente.
                </p>
              </div>
              <pre className="code-highlight overflow-x-auto p-4 text-xs leading-relaxed text-zinc-300">
                <code
                  className="language-javascript"
                  dangerouslySetInnerHTML={{
                    __html: hljs.highlight(azureCodeExample, {
                      language: "javascript",
                    }).value,
                  }}
                />
              </pre>
              <div className="border-t border-white/10 px-4 py-3">
                <a
                  href="https://learn.microsoft.com/en-us/javascript/api/overview/azure/ai-form-recognizer-readme?view=azure-node-latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 underline decoration-white/15 underline-offset-4 transition-colors hover:text-zinc-200"
                >
                  Documentación oficial de Microsoft Learn
                </a>
              </div>
            </article>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            El ejemplo usa el modelo prebuilt de facturas para mostrar la
            integración del SDK; no implica que esa fuera la configuración
            exacta empleada en el proyecto. Azure Form Recognizer es el nombre
            anterior de Azure AI Document Intelligence.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {[
              ".NET Framework",
              "DevExpress XAF",
              "Windows Forms",
              "Tesseract OCR",
              "Leptonica",
              "React",
              "Node.js",
              "MongoDB",
              "Azure AI Document Intelligence",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default OcrPage;
