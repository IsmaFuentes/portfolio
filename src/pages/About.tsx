import { technologies } from "./data";
import profileImage from "../assets/profile.jpg";

function About() {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950/50 via-black to-cyan-950/50">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Ismael Fuentes Sintes"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-900/50 shadow-xl shadow-blue-950/50 object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 text-white">
                Ismael Fuentes Sintes
              </h1>
              <p className="text-lg md:text-2xl text-zinc-400 font-light mb-4 md:mb-6">
                Desarrollador Full Stack
              </p>

              {/* Social Links */}
              <div className="flex gap-4 items-center justify-center md:justify-start">
                <a
                  href="https://es.linkedin.com/in/ismael-fuentes-sintes-992736191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-blue-950/30 border border-blue-900/50 rounded-lg hover:border-blue-500/50 hover:bg-blue-900/30 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/IsmaFuentes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-blue-950/30 border border-blue-900/50 rounded-lg hover:border-cyan-600 hover:bg-blue-900/30 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-10">
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-5 md:p-8 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/50 transition-all duration-300 group">
            <h2 className="text-2xl font-semibold mb-4 text-white">Sobre mí</h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Desarrollador .NET con experiencia en backend y aplicaciones de
                escritorio, web y multiplataforma.
              </p>
              <p>
                A lo largo de mi trayectoria he trabajado en entornos de alta
                responsabilidad, participando en el mantenimiento, evolución y
                modernización de sistemas críticos, así como en la migración de
                aplicaciones legacy hacia stacks tecnológicos más actuales.
                Complemento mi perfil con experiencia en Node.js y React,
                especialmente en el desarrollo de APIs y aplicaciones web.
              </p>
              <p>
                Compagino mi vida profesional con el deporte de competición, una
                práctica que me ha acompañado desde joven y que ha reforzado
                valores como la disciplina, la constancia y la capacidad de
                superación, los cuales aplico de forma natural en mi día a día
                como desarrollador, especialmente en contextos de presión o con
                alta carga técnica.
              </p>
              <p>
                Valoro entornos de trabajo que fomenten el equilibrio, la mejora
                continua y el bienestar del equipo, convencido de que estos
                factores son clave para construir soluciones sólidas y
                sostenibles a largo plazo.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-10 md:mb-10">
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-5 md:p-8 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/50 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-white">Estudios</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-700 pl-4">
                <h3 className="text-lg font-semibold text-white">
                  Desarrollo de aplicaciones multiplataforma
                </h3>
                <p className="text-sm text-zinc-400">
                  CFGS DAM - Septiembre 2022 a Junio 2023
                </p>
              </div>

              <div className="border-l-2 border-blue-700 pl-4">
                <h3 className="text-lg font-semibold text-white">
                  Desarrollo de aplicaciones web
                </h3>
                <p className="text-sm text-zinc-400">
                  CFGS DAW - Septiembre 2017 a Junio 2019
                </p>
              </div>

              <div className="border-l-2 border-blue-700 pl-4">
                <h3 className="text-lg font-semibold text-white">
                  Sistemas microinformáticos y redes
                </h3>
                <p className="text-sm text-zinc-400">
                  CFGM SMX - Septiembre 2015 a Junio 2017
                </p>
              </div>

              <div className="border-l-2 border-blue-700 pl-4">
                <h3 className="text-lg font-semibold text-white">
                  Trinity College London Grade 8 (B2.2)
                </h3>
                <p className="text-sm text-zinc-400">
                  Estudios de inglés - Septiembre 2011 a Junio 2012
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-2xl p-5 md:p-8 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-8 text-white">
            Stack Tecnológico
          </h2>
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies
                    .filter((t) => t.category === category)
                    .map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-900/30 border border-blue-800/50 rounded-lg text-sm text-cyan-100 hover:bg-blue-800/40 hover:border-blue-600 hover:scale-105 hover:shadow-md hover:shadow-blue-700/30 transition-all duration-200 cursor-default"
                      >
                        {tech.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
