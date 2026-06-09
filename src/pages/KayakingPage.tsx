import { Link } from "react-router-dom";
import editorAceleracion from "../assets/apex/1-editor-aceleracion.png";
import editorVelocidad from "../assets/apex/1-editor-velocidad.png";
import zonas from "../assets/apex/3-zonas.png";
import recorte from "../assets/apex/4-recorte.png";
import api from "../assets/apex/5-api.png";
import analitica from "../assets/apex/6-analitica.png";
import informesDropdown from "../assets/apex/7-informes-dropdown.png";
import informesGeneral from "../assets/apex/8-informes-general.png";
import informesParciales from "../assets/apex/9-informes-parciales.png";
import bw from "../assets/apex/11-b&w.png";
import comparative from "../assets/apex/10-comparativa.png";

function KayakingPage() {
  const screenshots = [
    {
      image: editorVelocidad,
      title: "Editor principal - Visualización de velocidad",
      description:
        "Interfaz principal mostrando la visualización de velocidad. Incluye controles de zoom, navegación y capacidad de multi-recorte para analizar múltiples zonas de interés en una misma sesión.",
    },
    {
      image: editorAceleracion,
      title: "Editor principal - Visualización de aceleración",
      description:
        "Vista alternativa del editor mostrando datos de aceleración.",
    },
    {
      image: zonas,
      title: "Detección de zonas de esfuerzo",
      description:
        "Algoritmo inteligente que identifica automáticamente las zonas de mayor esfuerzo durante la sesión de entrenamiento, facilitando el recorte de las zonas de interés. El programa también permite añadir marcadores de forma manual y ajustarlos libremente hasta alcanzar la distancia deseada.",
    },
    {
      image: recorte,
      title: "Sistema de multi-recorte",
      description:
        "Función que permite crear múltiples zonas de recorte en una misma sesión. Los usuarios pueden ajustar con precisión el inicio y fin de cada parcial para analizar múltiples segmentos independientes.",
    },
    {
      image: api,
      title: "Integración con la web de la federación",
      description:
        "Integración directa con el sistema web de la Federación Balear de Piragüismo para la subida de ficheros CSV procesados.",
    },
    {
      image: analitica,
      title: "Panel de análisis general",
      description:
        "Vista consolidada de estadísticas y detalles de la sesión, incluyendo velocidad, ritmo, distancia, desviación y desglose completo en parciales. La vista permite desglosar la sesión en hasta 10 parciales.",
    },
    {
      image: informesDropdown,
      title: "Menú de selección de informes",
      description:
        "Dropdown que permite al usuario elegir entre generar un informe general de toda la sesión o por parciales.",
    },
    {
      image: informesGeneral,
      title: "Informe general de la sesión",
      description:
        "Informe completo que muestra las estadísticas globales, incluyendo métricas principales como tiempo, velocidad, paleo y desviación de la embarcación durante el recorrido.",
    },
    {
      image: informesParciales,
      title: "Informe detallado por parcial",
      description:
        "Informe específico por parciales. Analiza cada segmento de la sesión de forma individual.",
    },
    {
      image: comparative,
      title: "Comparativa de sesiones",
      description:
        "Funcionalidad que permite comparar diferentes sesiones de entrenamiento para identificar mejoras y áreas de oportunidad. Permite alternar entre velocidad, avance y paladas por minuto.",
    },
    {
      image: bw,
      title: "Interfaz con modo claro",
      description:
        "Diseño adaptable que incluye tanto modo claro como oscuro, optimizado para largas sesiones de análisis sin fatiga visual en cualquier condición de iluminación.",
    },
  ];

  const keyFeatures = [
    "Recorte con visualización alternativa entre velocidad y aceleración",
    "Recorte en parciales o LAPS para análisis detallado",
    "Vista comparativa de sesiones para análisis de evolución",
    "Algoritmo inteligente de detección de zonas de esfuerzo",
    "Cálculo de métricas avanzadas de paleo",
    "Informes analíticos por sesión, parciales y comparativos",
    "Alto rendimiento con archivos CSV de gran tamaño",
    "Interfaz intuitiva con soporte para modo claro y oscuro",
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
              La Federación Balear, entidad pionera en España en el ámbito de
              análisis de datos GPS aplicados al piragüismo, disponía de una
              aplicación de escritorio desarrollada en MATLAB, que aunque
              funcional, presentaba problemas de rendimiento, era difícil de
              usar y su mantenibilidad era limitada, lo que dificultaba su uso y
              evolución.
            </p>
            <p>
              El objetivo de este proyecto ha sido el de ofrecer una solución de
              alto rendimiento que pudiese reemplazar a la aplicación anterior,
              manteniendo la compatibilidad con los flujos de trabajo
              existentes.
            </p>
            <p>
              El resultado ha sido una aplicación más rápida, intuitiva y fácil
              de mantener, que ha sido muy bien recibida por la federación y que
              ha contribuido a mejorar el trabajo que realizan en el ámbito de
              análisis de datos.
            </p>
          </div>
        </div>

        {/* Latest Features Highlight */}
        {/* <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-800/50 rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Mejoras recientes</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Visualización de velocidad y aceleración
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  El editor permite alternar entre visualización de velocidad y
                  aceleración, con el fin de facilitar la detección de zonas de
                  esfuerzo para su posterior recorte y análisis.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Sistema de multi-recorte
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  La aplicación soporta la creación de múltiples zonas de
                  recorte en una misma sesión, permitiendo analizar varios
                  parciales independientes sin necesidad de procesar el archivo
                  múltiples veces.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Comportamiento de la embarcación
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Se han incluido los datos de cabeceo y escora de la
                  embarcación a lo largo del recorrido, proporcionando
                  información adicional sobre su comportamiento durante la
                  sesión.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Key Features */}
        <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Funcionalidades
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
            <p className="text-zinc-300 leading-relaxed mb-3">
              Para garantizar una visualización fluida con archivos CSV de gran
              tamaño, en este caso archivos de más de 100mb y 500.000 puntos, se
              implementó una estrategia de reducción de datos orientada a la
              visualización.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-3">
              El muestreo original del dispositivo WIMU es de 10ms, mientras que
              para la representación gráfica se ha incrementado a 100ms, lo que
              reduce significativamente la cantidad de puntos a procesar sin
              perder información relevante para el análisis visual.
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
            <p className="text-zinc-300 leading-relaxed mb-3">
              Soporta los modos claro y oscuro para adaptarse a las preferencias
              del usuario y facilitar el trabajo en diferentes condiciones de
              iluminación.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              El funcionamiento de la aplicación es completamente offline, lo
              que facilita su uso en entornos con conectividad limitada.
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

        {/* Acknowledgments */}
        <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Agradecimientos
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Este proyecto no habría sido posible sin la colaboración y el apoyo
            de Carlos Badiola, desarrollador original de la aplicación en
            MATLAB. Su trabajo sentó las bases que permitieron la evolución de
            este proyecto.
          </p>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Resultado</h2>
          <p className="text-zinc-200 leading-relaxed text-lg">
            El resultado ha sido una aplicación más rápida, mantenible e
            intuitiva, que ha sido muy bien recibida por la federación,
            contribuyendo a mejorar el análisis de datos GPS en el ámbito del
            piragüismo de alto rendimiento.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KayakingPage;
