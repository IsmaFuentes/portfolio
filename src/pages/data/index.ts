import type { Technology } from "../../types/technology.ts";
import type { Experience } from "../../types/experience.ts";
import type { Project } from "../../types/project.ts";

/**
 * Datos para la página "Sobre mí"
 */
export const technologies: Technology[] = [
  { name: "ASP.NET Core", category: "Backend" },
  { name: "Entity Framework", category: "Backend" },
  { name: "MSSQL Server", category: "Database" },
  { name: "SQLite", category: "Database" },
  { name: "Node.js + Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Windows Forms", category: "Desktop" },
  { name: "WPF", category: "Desktop" },
  { name: "DevExpress Framework", category: "Desktop" },
  { name: "DevExpress XAF", category: "Desktop" },
  { name: "Electron", category: "Desktop" },
  { name: "NET MAUI", category: "Mobile" },
  { name: "Blazor Hybrid", category: "Multiplatform" },
  { name: "React", category: "Frontend" },
  { name: "Blazor", category: "Frontend" },
];

/**
 * Datos para la página "Experiencia"
 */
export const experiences: Experience[] = [
  {
    company: "Colaboración FBP (Federación Balear de Piragüismo)",
    period: "Noviembre 2025 - Presente",
    description:
      "Desarrollo de aplicaciones y análisis de datos aplicados al piragüismo",
    highlights: [
      "Análisis de datos GPS aplicados piragüismo",
      "Visualización y recorte de grandes volúmenes de datos",
      "Generación de informes",
    ],
    tech: ".NET10, WPF, MVVM, WebView2",
  },
  {
    company: "DISPREU Logística SL - BINIPREU",
    period: "Noviembre 2024 - Febrero 2026",
    description: "Incorporación directa como responsable de programación",
    highlights: [
      "Mantenimiento integral de la infraestructura tecnológica de la empresa",
      "Desarrollo de nuevas características para programas de gestión, contabilidad, almacenes, y supermercados",
      "Modernización y mejora de servicios de sincronización de datos",
      "Web scraping para análisis de datos",
      "Soporte técnico para DISPREU y su web de facturación de clientes",
    ],
    tech: ".NET8, .NET Framework 4.7.2, ASP.NET Core, MSSQL, DevExpress WinForms, WPF, PuppeteerSharp",
  },
  {
    company: "Menorca Software Applications",
    period: "Septiembre 2023 - Octubre 2024",
    description:
      "Soporte informático y desarrollo para DISPREU Logística y BINIPREU",
    highlights: [
      "Mantenimiento de aplicaciones de gestión de supermercados",
      "Desarrollo backend para análisis estadístico",
      "Servicios de Windows para sincronización de datos en tiempo real",
      "Implementación del conector CashDro 4+ para pagos en efectivo en supermercados",
      "Soporte técnico para DISPREU y su web de facturación de clientes",
    ],
    tech: ".NET8, .NET Framework 4.7.2, ASP.NET Core, DevExpress WinForms, MSSQL",
  },
  {
    company: "Laberït",
    period: "Febrero 2022 - Septiembre 2023",
    description:
      "Adquisición de Kuara Software - Desarrollo de aplicaciones a medida",
    highlights: [
      "Deasarrollo backend para sistemas de gestión internos y aplicaciones web a medida",
      "Desarrollo de servicios de Windows",
      "Migraciones a Node.js, MongoDB y React",
      "Desarrollo e implementación de un sistema OCR basado en cloud con Azure",
    ],
    tech: ".NET Framework 4.x, .NET Core, Node.js, MongoDB, MSSQL, JWT, Azure",
  },
  {
    company: "Kuara Software",
    period: "Marzo 2020 - Febrero 2022",
    description: "Desarrollos própios y de aplicaciones a medida",
    highlights: [
      "Desarrollo de una aplicación de facturación OCR homologada con hacienda",
      "Desarrollo backend para aplicaciones a medida",
      "Implantación de un sistema de check-in online para hoteles con escáner OCR y firma digital",
      "Implantación de un sistema de envío de facturas al SII de la AEAT",
      "Mantenimiento de software PMS y su TPV para la gestión hotelera",
    ],
    tech: ".NET Framework 4.x, DevExpress XAF, .NET Core, MSSQL, TesseractOCR, React",
  },
  {
    company: "INTEC High Quality Solutions - Grupo Temel",
    period: "Abril 2019 - Marzo 2020",
    description: "Fusión con Ruta Software - Desarrollo PMS hotelero",
    highlights: [
      "Mantenimiento y desarrollo de nuevas características para el sistema PMS de gestión hotelera",
      "Generación de informes personalizados",
      "Mantenimiento de software TPV",
      "Desarrollo de servicios de Windows para procesos internos",
    ],
    tech: ".NET Framework 4.x, DevExpress XAF, Microsoft SQL Server",
  },
  {
    company: "Ruta Software",
    period: "Marzo 2019 - Abril 2019",
    description: "Inicio como becario",
    highlights: [
      "Aprendizaje de fundamentos de programación en .NET",
      "Familiarización con DevExpress XAF",
    ],
    tech: ".NET Framework 4.x, DevExpress XAF, Microsoft SQL Server",
  },
];

/**
 * Datos para la página "Proyectos"
 */
export const projects: Project[] = [
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
    status: "En desarrollo",
    category: "Deportivo",
    viewLink: "/projects/kayaking",
  },
  {
    title: "DISPREU - Extracción de datos y automatización web",
    description:
      "Sistema automatizado de extracción de datos de páginas web para análisis comercial.",
    features: [
      "10+ páginas de comercios online soportadas",
      "Extracción de datos automatizada",
      "Volcado de datos en formato excel y csv",
      "Interfaz WPF/WinForms para configuración y gestión de perfiles",
      "Implementación de proxies y rotación de IPs",
    ],
    status: "Completado",
    tech: [
      ".NET 8",
      "WPF / WinForms",
      "MVVM",
      "PuppeteerSharp",
      "DevExpress",
      "ProxyScrape",
    ],
    category: "Automatización",
    viewLink: "/projects/scraping",
  },
  {
    title: "Kuara Software / Laberït - Sistema OCR de Facturación",
    description:
      "Sistema de reconocimiento óptico de caracteres para automatizar la extracción de datos de facturas con sistema de validación por roles.",
    features: [
      "Versión inicial desarrollada con DevExpress XAF (WinForms)",
      "Sistema OCR que utilizaba plantillas basadas en coordenadas y reglas definidas para la extracción de datos estructurada",
      "Soporte para facturas, albaranes, pedidos y otros documentos",
      "Sistema de firmas y autorizaciones basado en roles",
      "Migración posterior a Azure Document Recognizer (AI Cloud)",
      "Homologado con Hacienda",
    ],
    tech: [
      ".NET",
      "DevExpress XAF",
      "Tesseract",
      "Azure Document Recognizer",
      "Node.js",
    ],
    status: "Completado",
    viewLink: "/projects/ocr",
    category: "Automatización",
  },
  {
    title: "INTEC - PMS Hotelero & Check-in Online",
    description:
      "Mantenimiento y desarrollo de nuevas características para un sistema de gestión hotelera própio e integración de una webapp de check-in online.",
    features: [
      "Mantenimiento y desarrollo de nuevas características",
      "Generación de informes personalizados",
      "Desarrollo de un panel centralizado inspirado en Navision",
      "Implementación de un sistema de Check-in Online OCR con firma digital",
      "TPV integrado",
    ],
    tech: [".NET", "DevExpress XAF", "MSSQL", "React"],
    status: "Completado",
    category: "Gestión",
  },
];
