import LinkedinLink from "../components/LinkedinLink";
import GitHubLink from "../components/GithubLink";
import { technologies } from "./data";
import profileImage from "../assets/profile.jpg";

function AboutPage() {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Ismael Fuentes Sintes"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/15 shadow-2xl shadow-black/50 object-cover ring-4 ring-white/[0.03]"
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
          <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/20 transition-all duration-300 group">
            <h2 className="text-2xl font-semibold mb-4 text-white">Sobre mí</h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Desarrollador .NET con experiencia en backend y aplicaciones
                multiplataforma, especialmente de escritorio y móvil.
              </p>
              <p>
                A lo largo de mi carrera he trabajdo en entornos de alta
                responsabilidad, participando en el desarrollo de sistemas
                complejos y el mantenimiento de bases de código con alta deuda
                técnica, participando activamente en su evolución y en la
                migración hacía soluciones modernas, escalables y mantenibles.
              </p>
              <p>
                He trabajado principalmente con el stack tecnológico de .NET,
                aunque también tengo experiencia adicional con Node.js y React
                para el desarrollo de aplicaciones web.
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
                Actualmente trabajo como entrenador de piragüismo, y dedico
                parte de mi tiempo a desarrollar herramientas relacionadas con
                el deporte de alto rendimiento.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-10 md:mb-10">
          <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-white">Estudios</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-white/25 pl-4">
                <h3 className="text-lg font-semibold text-white">
                  Desarrollo de aplicaciones multiplataforma
                </h3>
                <p className="text-sm text-zinc-400">
                  CFGS DAM - Septiembre 2022 a Junio 2023
                </p>
              </div>

              <div className="border-l-2 border-white/25 pl-4">
                <h3 className="text-lg font-semibold text-white">
                  Desarrollo de aplicaciones web
                </h3>
                <p className="text-sm text-zinc-400">
                  CFGS DAW - Septiembre 2017 a Junio 2019
                </p>
              </div>

              <div className="border-l-2 border-white/25 pl-4">
                <h3 className="text-lg font-semibold text-white">
                  Sistemas microinformáticos y redes
                </h3>
                <p className="text-sm text-zinc-400">
                  CFGM SMX - Septiembre 2015 a Junio 2017
                </p>
              </div>

              <div className="border-l-2 border-white/25 pl-4">
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

        {/* Complementary Training Section */}
        <div className="mb-10">
          <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Formación complementaria
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <article className="border-l-2 border-white/25 pl-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    Curso completo de JavaScript
                  </h3>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                    70 h
                  </span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-400 marker:text-zinc-600">
                  <li>Fundamentos del lenguaje</li>
                  <li>Manipulación del DOM</li>
                  <li>Programación orientada a objetos</li>
                  <li>Programación asíncrona</li>
                </ul>
                <a
                  href="https://www.udemy.com/course/the-complete-javascript-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Ver curso en Udemy
                  <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="border-l-2 border-white/25 pl-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    Desarrollo de APIs con Node.js y MongoDB
                  </h3>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                    40 h
                  </span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-400 marker:text-zinc-600">
                  <li>Desarrollo backend con Express y Mongoose</li>
                  <li>Autenticación con JWT</li>
                  <li>Seguridad, cifrado y saneamiento de datos</li>
                </ul>
                <a
                  href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Ver curso en Udemy
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-8 text-white">
            Stack Tecnológico
          </h2>
          <div className="space-y-5">
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
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-zinc-100 cursor-default"
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
