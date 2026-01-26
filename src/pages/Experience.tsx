function Experience() {
  const experiences = [
    {
      company: "DISPREU Logística SL",
      period: "Noviembre 2024 - Enero 2026",
      description: "Incorporación directa como único programador de la empresa",
      highlights: [
        "Mantenimiento integral de toda la infraestructura de negocio",
        "Desarrollo de nuevas features para gestión, contabilidad, almacenes, supermercados y TPVs",
        "Sincronización de datos y modernización de aplicaciones legacy",
        "Web scraping para análisis de competencia (PuppeteerSharp)",
        "Soporte técnico y soporte para web de facturación de clientes",
      ],
      tech: ".NET8, .NET Framework 4.7.2, ASP.NET Core, MSSQL, DevExpress WinForms, WPF",
    },
    {
      company: "Menorca Software Applications",
      period: "Septiembre 2023 - Octubre 2024",
      description: "Soporte informático y desarrollo para DISPREU Logística",
      highlights: [
        "Mantenimiento de aplicaciones de gestión de supermercados",
        "Desarrollo backend para análisis estadístico",
        "Servicios de Windows para sincronización en tiempo real",
        "Implementación de conector CashDro 4+",
        "Soporte técnico y soporte para web de facturación de clientes",
      ],
      tech: ".NET8, .NET Framework 4.7.2, ASP.NET Core, DevExpress WinForms, WPF, MSSQL",
    },
    {
      company: "Laberït",
      period: "Febrero 2022 - Septiembre 2023",
      description: "Adquisición de Kuara Software",
      highlights: [
        "Migración completa de stack tecnológico a Node.js, MongoDB y React",
        "Migración de Tesseract a Azure Document Recognizer",
        "Desarrollo de servicios de Windows e instaladores",
        "Deasarrollo backend para aplicaciones a medida y sistemas internos",
      ],
      tech: ".NET Framework 4.X, .NET Core, Node.js, MongoDB, MSSQL, JWT",
    },
    {
      company: "Kuara Software",
      period: "Marzo 2020 - Febrero 2022",
      description: "Proyectos destacados y desarrollo",
      highlights: [
        "OCR: Sistema de facturación con Tesseract, plantillas y firmas por roles",
        "Check-in Online: API REST + Frontend React con OCR integrado",
        "SII: Aplicación web para envío de facturas (DevExpress XAF + EasySII)",
        "Mantenimiento de PMS y TPV",
        "Deasarrollo backend para aplicaciones a medida",
      ],
      tech: ".NET Framework 4.X, .NET Core, MSSQL, React",
    },
    {
      company: "Grupo Temel",
      period: "Abril 2019 - Marzo 2020",
      description: "Fusión con Ruta Software - Desarrollo PMS hotelero",
      highlights: [
        "Mantenimiento y desarrollo de nuevas features para el PMS",
        "Mantenimiento del TPV",
        "Generación de informes personalizados",
        "Desarrollo de panel centralizado inspirado en Navision",
        "Servicios de Windows para procesos internos",
      ],
      tech: ".NET Framework 4.X, Microsoft SQL Server",
    },
    {
      company: "Ruta Software",
      period: "Marzo 2019 - Abril 2019",
      description: "Inicio como becario",
      highlights: [
        "Aprendizaje de fundamentos de programación en .NET",
        "Familiarización con DevExpress XAF",
      ],
      tech: ".NET Framework 4.X, Microsoft SQL Server",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <div className="max-w-5xl mx-auto px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Experiencia Profesional
          </h1>
          <p className="text-zinc-400 text-lg">
            +7 años de trayectoria en desarrollo de software
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-600 to-zinc-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[1.875rem] top-2 w-2 h-2 bg-zinc-400 rounded-full ring-4 ring-black"></div>

                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-zinc-400 mt-1">{exp.description}</p>
                    </div>
                    <span className="text-sm text-zinc-500 mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-zinc-300 flex items-start">
                        <span className="text-zinc-600 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-zinc-800">
                    <p className="text-sm text-zinc-500">
                      <span className="font-semibold text-zinc-400">
                        Tech Stack:
                      </span>{" "}
                      {exp.tech}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
