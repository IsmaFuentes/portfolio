import type { Technology } from "../../types/technology.ts";
import type { Experience } from "../../types/experience.ts";
import type { Project } from "../../types/project.ts";

/**
 * Datos para la página "Sobre mí"
 */
export const technologies: Technology[] = [
  { name: "ASP NET Core", category: "Backend" },
  { name: "Entity Framework", category: "Backend" },
  { name: "MSSQL Server", category: "Database" },
  { name: "Node.js + Express", category: "Backend" },
  { name: "Mongoose (MongoDB)", category: "Database" },
  { name: "WinForms .NET", category: "Desktop" },
  { name: "WPF (MVVM)", category: "Desktop" },
  { name: "DevExpress Framework", category: "Desktop" },
  { name: "MAUI Blazor Hybrid", category: "Mobile" },
  { name: "Electron.js", category: "Desktop" },
  { name: "React.js", category: "Frontend" },
];

/**
 * Datos para la página "Experiencia"
 */
export const experiences: Experience[] = [
  {
    company: "DISPREU Logística SL - BINIPREU",
    period: "Noviembre 2024 - Enero 2026",
    description: "Incorporación directa como único programador de la empresa",
    highlights: [
      "Mantenimiento integral de toda la infraestructura de negocio",
      "Desarrollo de nuevas características para programas de gestión, contabilidad, almacenes, y supermercados",
      "Sincronización de datos y modernización de aplicaciones legacy",
      "Web scraping para análisis de datos",
      "Soporte técnico y soporte para web de facturación de clientes",
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
      "Servicios de Windows para sincronización en tiempo real",
      "Implementación de conector CashDro 4+",
      "Soporte técnico y soporte para web de facturación de clientes",
    ],
    tech: ".NET8, .NET Framework 4.7.2, ASP.NET Core, DevExpress WinForms, WPF, MSSQL",
  },
  {
    company: "Laberït",
    period: "Febrero 2022 - Septiembre 2023",
    description:
      "Adquisición de Kuara Software - Desarrollo de aplicaciones a medida",
    highlights: [
      "Migración completa de stack tecnológico a Node.js, MongoDB y React",
      "Migración de Tesseract a Azure Document Recognizer",
      "Desarrollo de servicios de Windows e instaladores",
      "Deasarrollo backend para aplicaciones a medida y sistemas internos",
    ],
    tech: ".NET Framework 4.x, .NET Core, Node.js, MongoDB, MSSQL, JWT",
  },
  {
    company: "Kuara Software",
    period: "Marzo 2020 - Febrero 2022",
    description: "Desarrollos própios y de aplicaciones a medida",
    highlights: [
      "Sistema de facturación OCR basado en plantillas y firmas por roles",
      "Aplicación de check-in para hoteles con OCR y firma digital",
      "Gestión y envío de facturas al SII de la AEAT",
      "Mantenimiento del PMS y su TPV",
      "Deasarrollo backend para aplicaciones a medida",
    ],
    tech: ".NET Framework 4.x, DevExpress XAF, .NET Core, MSSQL, TesseractOCR, React",
  },
  {
    company: "Grupo Temel",
    period: "Abril 2019 - Marzo 2020",
    description: "Fusión con Ruta Software - Desarrollo PMS hotelero",
    highlights: [
      "Mantenimiento y desarrollo de nuevas características para el PMS",
      "Mantenimiento del TPV",
      "Generación de informes personalizados",
      "Desarrollo de panel centralizado inspirado en Navision",
      "Servicios de Windows para procesos internos",
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
    title: "Extracción de datos y automatización web",
    description:
      "Sistema automatizado de extracción de datos de páginas web para análisis comercial.",
    features: [
      "Más de 10 páginas de comercios online soportadas",
      "Extracción de datos programada y automatizada",
      "Volcado de datos en formato Excel o CSV",
      "Interfaz WPF o WinForms para configuración y gestión de perfiles",
      "Proxies y rotación de IPs",
    ],
    status: "Completado",
    tech: [
      ".NET 8",
      "WPF / WinForms",
      "MVVM",
      "Puppeteer",
      "DevExpress",
      "ProxyScrape",
    ],
    category: "Automatización",
  },
  {
    title: "Sistema OCR de Facturación",
    description:
      "Sistema de reconocimiento óptico de caracteres para automatizar la extracción de datos de facturas con sistema de validación por roles.",
    features: [
      "Versión inicial en WinForms con DevExpress XAF",
      "Motor Tesseract OCR con plantillas personalizadas",
      "Soporte para facturas, albaranes, pedidos y otros documentos",
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
      "Mantenimiento y desarrollo de nuevas características para un sistema de gestión hotelera própio e integración de una webapp de check-in online.",
    features: [
      "Mantenimiento y desarrollo de nuevas características",
      "Generación de informes personalizados",
      "Panel centralizado inspirado en Navision",
      "Check-in Online OCR con firma digital",
      "TPV integrado",
    ],
    tech: [".NET", "DevExpress XAF", "MSSQL", "React"],
    status: "Completado",
    category: "Gestión",
  },
];
