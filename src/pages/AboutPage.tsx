import LinkedinLink from "../components/LinkedinLink";
import GitHubLink from "../components/GithubLink";
import { technologies } from "./data";
import profileImage from "../assets/profile.jpg";

function AboutPage() {
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
                Desarrollador de software
              </p>

              {/* Social Links */}
              <div className="flex gap-4 items-center justify-center md:justify-start">
                <LinkedinLink url="https://es.linkedin.com/in/ismael-fuentes-sintes-992736191" />
                <GitHubLink url="https://github.com/IsmaFuentes" />
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
                He trabajado en entornos de alta responsabilidad, abordando
                sistemas críticos con alta deuda técnica, participando
                activamente en su evolución y en la migración exitosa hacia
                soluciones modernas, escalables y mantenibles. Además, cuento
                con experiencia en Node.js y React para el desarrollo de APIs y
                aplicaciones web.
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

export default AboutPage;
