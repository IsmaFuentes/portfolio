# Portfolio

Portfolio profesional desarrollado con React, TypeScript y Tailwind CSS, diseñado para mostrar experiencia, proyectos y habilidades técnicas.

## 🚀 Demo

[Ver portfolio en vivo](https://IsmaFuentes.github.io/portfolio)

## 📋 Descripción

Este portfolio presenta mi trayectoria profesional como desarrollador de software, destacando:

- Experiencia laboral (backend, desktop, web)
- Proyectos destacados con casos de estudio detallados
- Stack tecnológico y habilidades técnicas
- Enlaces a perfiles profesionales (LinkedIn, GitHub)

## 🎨 Secciones

### 1. **Sobre mí** (`/`)

Página principal que incluye:

- Información personal y presentación profesional
- Lista de tecnologías organizadas por categorías (Backend, Frontend, Desktop, Database, Mobile)
- Enlaces a redes sociales profesionales

### 2. **Experiencia** (`/experience`)

Historial laboral cronológico detallando:

- Empresas y períodos trabajados
- Descripción de responsabilidades
- Tecnologías utilizadas en cada rol
- Logros y proyectos destacados

### 3. **Proyectos** (`/projects`)

Galería de proyectos destacados con:

- Descripción general de cada proyecto
- Características principales
- Stack tecnológico empleado
- Estado del proyecto (En desarrollo, Completado)
- Enlaces a páginas de detalle cuando aplique

### 4. **Proyecto Destacado: Kayaking** (`/projects/kayaking`)

Caso de estudio completo del proyecto de análisis de datos para piragüismo que incluye:

- Contexto y problema a resolver
- Solución implementada y arquitectura
- Funcionalidades clave destacadas
- Mejoras recientes (visualización velocidad/aceleración, multi-recorte, informes personalizables)
- Galería completa con 10 capturas de pantalla descriptivas
- Detalles técnicos y optimizaciones de rendimiento
- Agradecimientos y colaboradores

## 🛠️ Tecnologías Utilizadas

- **Framework**: React 19 con TypeScript
- **Build Tool**: Vite 7
- **Estilos**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Iconos**: React Icons
- **Deployment**: GitHub Pages
- **Linting**: ESLint con configuración TypeScript

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── assets/           # Imágenes y recursos estáticos
│   │   ├── apex/         # Capturas del proyecto Kayaking
│   │   └── profile.jpg   # Foto de perfil
│   ├── components/       # Componentes reutilizables
│   │   ├── Footer.tsx
│   │   ├── NavigationBar.tsx
│   │   ├── GithubLink.tsx
│   │   └── LinkedinLink.tsx
│   ├── pages/            # Páginas principales
│   │   ├── AboutPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── KayakingPage.tsx
│   │   └── data/
│   │       └── index.ts  # Datos centralizados (proyectos, experiencia, tecnologías)
│   ├── types/            # Definiciones TypeScript
│   │   ├── experience.ts
│   │   ├── project.ts
│   │   └── technology.ts
│   ├── App.tsx           # Componente principal con routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globales y Tailwind
├── public/               # Assets públicos
├── package.json
├── vite.config.ts        # Configuración de Vite
├── tsconfig.json         # Configuración TypeScript
└── eslint.config.js      # Configuración ESLint
```

## 🎨 Diseño y Estilos

El portfolio utiliza **Tailwind CSS 4** con un esquema de colores moderno basado en tonos azules y cyan sobre fondos oscuros:

### Paleta de colores

- **Fondo principal**: Gradiente `from-blue-950 via-black to-cyan-950`
- **Acentos principales**: `cyan-400`, `cyan-300`
- **Elementos secundarios**: `blue-900`, `blue-800`
- **Texto**: `white`, `zinc-300`, `zinc-400`
- **Bordes**: `blue-900/50` con opacidad variable
