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
        "Interfaz principal que visualiza la sesión de entrenamiento a partir de los datos de velocidad y distancia. Incluye controles de zoom, navegación y capacidad de multi-recorte para analizar múltiples zonas de interés en una misma sesión.",
    },
    {
      image: editorAceleracion,
      title: "Editor principal - Visualización de aceleración",
      description:
        "Vista alternativa del editor basada en los datos de aceleración.",
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
        "Integración directa con el sistema web de la Federación. Una vez realizado el recorte y aplicado el análisis de datos de paleo, la aplicación permite subir los resultados en formato CSV.",
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
        "Permite al usuario elegir entre los diferentes tipos de informes disponibles, como el informe general de la sesión o los informes detallados por parciales.",
    },
    {
      image: informesGeneral,
      title: "Informe general de la sesión",
      description:
        "Informe completo que muestra las estadísticas globales, incluyendo métricas principales como tiempo, velocidad, paleo y desviación de la embarcación durante el recorrido. Incluye también el análisis de escora, cabeceo y desviación de la embarcación.",
    },
    {
      image: informesParciales,
      title: "Informe detallado por parcial",
      description:
        "Informe específico por parciales. Analiza cada segmento de la sesión de forma individual para facilitar su comparación.",
    },
    {
      image: comparative,
      title: "Comparativa de sesiones",
      description:
        "Permite comparar diferentes sesiones de entrenamiento para identificar mejoras y áreas de oportunidad. Permite visualizar los datos de velocidad, avance por palada y paladas por minuto.",
    },
    {
      image: bw,
      title: "Interfaz con modo claro",
      description: "Diseño adaptable que incluye los modos claro y oscuro.",
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
    <div className="min-h-screen bg-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-6 transition-colors"
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
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/[0.06] border border-white/10 rounded-full text-xs text-zinc-300">
              En desarrollo
            </span>
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Deportivo
            </span>
          </div>
          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold mb-4 text-white">
            Análisis de datos aplicados al Piragüismo
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Desarrollo colaborativo con la Federación Balear de Piragüismo
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Caso de estudio
          </h2>
          <div className="space-y-3 text-sm md:text-base text-zinc-400 leading-relaxed">
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

        {/* Key Features */}
        <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Funcionalidades
          </h2>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
            {keyFeatures.map((feature, i) => (
              <div key={i} className="flex items-start">
                <svg
                  className="w-5 h-5 mt-0.5 mr-3 text-zinc-200 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
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
        </div>

        {/* Technical Highlights */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Optimización de rendimiento
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Para garantizar una visualización fluida con archivos CSV de gran
              tamaño, en este caso archivos de más de 100mb y 500.000 puntos, se
              implementó una estrategia de reducción de datos orientada a la
              visualización.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              El muestreo original del dispositivo WIMU es de 10ms, mientras que
              para la representación gráfica se ha incrementado a 100ms, lo que
              reduce significativamente la cantidad de puntos a procesar sin
              perder información relevante para el análisis visual.
            </p>
          </div>

          <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Accesibilidad y usabilidad
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              La interfaz se diseñó para ser intuitiva y fácil de usar, con
              controles claros para la selección de archivos, recorte y
              visualización de datos.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Soporta los modos claro y oscuro para adaptarse a las preferencias
              del usuario y facilitar el trabajo en diferentes condiciones de
              iluminación.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              El funcionamiento de la aplicación es completamente offline, lo
              que facilita su uso en entornos con conectividad limitada.
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-lg text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-5">Galería</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex aspect-video items-center justify-center overflow-hidden bg-black/30 p-2">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acknowledgments */}
        <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Agradecimientos
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Este proyecto no habría sido posible sin la colaboración y el apoyo
            de Carlos Badiola, desarrollador original de la aplicación en
            MATLAB. Su trabajo sentó las bases que permitieron la evolución de
            este proyecto.
          </p>
        </div>

        {/* Results */}
        <div className="bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-xl p-5 md:p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Resultado</h2>
          <p className="text-zinc-200 leading-relaxed">
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
