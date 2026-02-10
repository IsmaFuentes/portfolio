import { Link } from "react-router-dom";
import editor from "../assets/apex/1-editor.png";
import bw from "../assets/apex/2-b&w.png";
import zonas from "../assets/apex/3-zonas.png";
import recorte from "../assets/apex/4-recorte.png";
import api from "../assets/apex/5-api.png";
import analitica from "../assets/apex/6-analitica.png";
import informe from "../assets/apex/7-informe.png";

function KayakingPage() {
  const screenshots = [
    {
      image: editor,
      title: "Editor principal",
      description:
        "Interfaz principal para la visualización de datos en bruto y controles de recorte. Permite la visualización interactiva de datos GPS con capacidad de zoom y navegación.",
    },
    {
      image: bw,
      title: "Interfaz moderna con modo oscuro",
      description:
        "Diseño adaptable que incluye los modos claro y oscuro, optimizado para largas sesiones de análisis sin fatiga visual.",
    },
    {
      image: zonas,
      title: "Detección de zonas de esfuerzo",
      description:
        "Algoritmo inteligente que identifica automáticamente las zonas de mayor esfuerzo durante la sesión de entrenamiento, facilitando el recorte de la zona de interés.",
    },
    {
      image: recorte,
      title: "Herramienta de recorte de datos",
      description:
        "Permite ajustar con precisión el inicio y fin de la sesión para eliminar datos irrelevantes y mejorar la calidad del análisis.",
    },
    {
      image: api,
      title: "Integración con la web de la federación",
      description:
        "Integración directa con el sistema web de la Federación Balear de Piragüismo para la subida automática de ficheros CSV procesados.",
    },
    {
      image: analitica,
      title: "Panel de análisis general",
      description:
        "Vista consolidada de estadísticas y detalles de la sesión, incluyendo velocidad, ritmo, distancia, desviación, y desglose en parciales",
    },
    {
      image: informe,
      title: "Generación de informes",
      description:
        "Sistema de informes detallados generados en HTML - WebView2, permitiendo exportar y compartir análisis completos de cada sesión.",
    },
  ];

  const keyFeatures = [
    "Detección inteligente y recorte preciso de zonas de esfuerzo",
    "Cálculo de métricas avanzadas de paleo",
    "Integración directa con la web de la federación para la subida de ficheros procesados",
    "Generación de informes detallados por sesión",
  ];

  const techStack = [
    ".NET 10 (C#)",
    "WPF",
    "MVVM",
    "ScottPlot",
    "WebView2",
    "CsvHelper",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950/50 via-black to-cyan-950/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-900/30 border border-blue-800/50 rounded-full text-xs text-cyan-300">
              En desarrollo
            </span>
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Deportivo
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Análisis de datos aplicados al Piragüismo
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
            Desarrollo colaborativo con la Federación Balear de Piragüismo
          </p>
        </div>

        {/* Overview */}
        <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Caso de estudio
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              La Federación Balear de Piragüismo disponía de una aplicación de
              escritorio para el análisis de datos GPS desarrollada inicialmente
              en MATLAB. Aunque funcional, esta primera versión presentaba
              importantes problemas de rendimiento, usabilidad y mantenibilidad,
              lo que dificultaba su evolución y uso diario.
            </p>
            <p>
              Mi rol en el proyecto fue el de ofrecer una solución escalable y
              de alto rendimiento que manteniese la compatibilidad completa con
              los flujos de trabajo existentes, mejorando significativamente la
              experiencia del usuario y facilitando el mantenimiento a largo
              plazo. Esto implicó un rediseño completo de la arquitectura de la
              aplicación.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Funcionalidades clave
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {keyFeatures.map((feature, i) => (
              <div key={i} className="flex items-start">
                <svg
                  className="w-5 h-5 mt-0.5 mr-3 text-cyan-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Optimización de rendimiento
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              Para garantizar una visualización fluida con archivos CSV de gran
              tamaño (100mb+ ~ 500k+ puntos), se implementó una estrategia de
              reducción de datos orientada a la visualización. En lugar de
              representar todos los puntos muestreados cada 10 ms, se generó una
              estructura intermedia con un muestreo de 100 ms, manteniendo la
              referencia al índice real de los datos brutos. Esto redujo
              significativamente la carga de renderizado sin perder precisión en
              el análisis.
            </p>
          </div>

          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Accesibilidad y usabilidad
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-3">
              La interfaz se diseñó para ser intuitiva y fácil de usar, con
              controles claros para la selección de archivos, recorte y
              visualización de datos.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Incluye modos oscuro y claro para adaptarse a las preferencias del
              usuario y facilitar el trabajo en diferentes condiciones de
              iluminación.
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Tecnologías
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-blue-900/30 border border-blue-800/50 rounded-lg text-sm text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-8">Galería</h2>
          <div className="space-y-8">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl overflow-hidden hover:border-blue-700 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-auto scale-101"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {screenshot.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Resultado</h2>
          <p className="text-zinc-200 leading-relaxed text-lg">
            El resultado fue una aplicación más rápida, intuitiva y fácil de
            mantener, que ha sido muy bien recibida por la federación,
            contribuyendo a mejorar el análisis de datos GPS en el ámbito del
            piragüismo en las Islas Baleares.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KayakingPage;
