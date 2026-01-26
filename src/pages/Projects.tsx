function Projects() {
  const projects = [
    {
      title: "Análisis de datos aplicados al Piragüismo",
      description:
        "Desarrollo colaborativo con la Federación Balear de Piragüismo para el análisis estadístico de datos GPS extraídos de dispositivos WIMU.",
      features: [
        "Carga de datos desde archivos CSV extraídos del WIMU",
        "Visualización interactiva de datos con capacidad de recorte de zonas",
        "Autodetección inteligente de zonas de esfuerzo",
        "Análisis de paleo y generación de informes analíticos",
      ],
      tech: [".NET 10", "WPF", "MVVM", "ScottPlot"],
      status: "En producción",
      category: "Deportivo",
    },
    {
      title: "Extracción de datos vía Web Scraping",
      description:
        "Sistema automatizado de extracción de datos de páginas web para análisis de competencia.",
      features: [
        "Más de 10 páginas de comercios online soportadas",
        "Extracción de datos programada y automatizada",
        "Volcado de datos en formato Excel o CSV",
        "Interfaz WPF o WinForms para configuración y gestión",
      ],
      status: "Completado",
      tech: [".NET 8", "WPF / WinForms", "MVVM", "Puppeteer", "DevExpress"],
      category: "Automatización",
    },
    {
      title: "Sistema OCR de Facturación",
      description:
        "Sistema de reconocimiento óptico de caracteres para automatizar la extracción de datos de facturas con sistema de validación por roles.",
      features: [
        "Versión inicial en WinForms con DevExpress XAF",
        "Motor Tesseract OCR con plantillas personalizadas",
        "Sistema de coordenadas para extracción estructurada",
        "Workflow de firmas basado en roles",
        "Migración posterior a Azure Document Recognizer (AI Cloud)",
        "Homologado con Hacienda",
      ],
      tech: [".NET", "DevExpress XAF", "Tesseract", "Azure AI", "Node.js"],
      status: "Completado",
      category: "Automatización",
    },
    {
      title: "PMS Hotelero & Check-in Online",
      description:
        "Mantenimiento y desarrollo de nuevas features para sistema de gestión hotelera y desarrollo de webapp de check-in online.",
      features: [
        "Mantenimiento y nuevas features para PMS",
        "Generación de informes personalizados",
        "Panel centralizado inspirado en Navision",
        "Check-in Online OCR: Webapp separada integrada con PMS",
        "Mantenimiento del TPV",
      ],
      tech: [".NET", "DevExpress XAF", "MSSQL", "React"],
      status: "Completado",
      category: "Gestión",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950/50 via-black to-cyan-950/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-white">
            Proyectos Destacados
          </h1>
          <p className="text-zinc-400 text-lg">
            Soluciones innovadoras desarrolladas a lo largo de mi carrera
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-5 md:p-8 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 group flex flex-col"
            >
              {/* Category & Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-blue-900/30 border border-blue-800/50 rounded-full text-xs text-cyan-300">
                  {project.status}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-semibold text-zinc-300 mb-3">
                  Características principales:
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-zinc-400 text-sm flex items-start"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 mr-2 text-zinc-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-blue-900/50">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-900/30 border border-blue-800/50 rounded-lg text-xs text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
