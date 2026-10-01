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
                Desarrollador .NET · Backend y aplicaciones multiplataforma
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
        <div className="mb-10">
          <section className="border-y border-white/10 py-6 md:py-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">Sobre mí</h2>
            <div className="grid gap-4 text-zinc-300 leading-relaxed md:grid-cols-2 md:gap-8">
              <p>
                Desarrollador .NET con experiencia en backend y aplicaciones
                multiplataforma, con experiencia adicional en Node.js y React.
                He trabajado en sistemas complejos, modernizando bases de código
                y evolucionándolas hacia soluciones más mantenibles y
                escalables.
              </p>
              <p>
                Actualmente trabajo como entrenador de piragüismo y dedico parte
                de mi tiempo a colaborar con el desarrollo de herramientas para
                el deporte de alto rendimiento.
              </p>
            </div>
          </section>
        </div>

        <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm md:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Formación y tecnologías
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-zinc-500">
                Estudios
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-white/25 pl-4">
                  <h4 className="font-semibold text-white">
                    Desarrollo de aplicaciones multiplataforma
                  </h4>
                  <p className="text-sm text-zinc-400">
                    CFGS DAM - Septiembre 2022 a Junio 2023
                  </p>
                </div>
                <div className="border-l-2 border-white/25 pl-4">
                  <h4 className="font-semibold text-white">
                    Desarrollo de aplicaciones web
                  </h4>
                  <p className="text-sm text-zinc-400">
                    CFGS DAW - Septiembre 2017 a Junio 2019
                  </p>
                </div>
                <div className="border-l-2 border-white/25 pl-4">
                  <h4 className="font-semibold text-white">
                    Sistemas microinformáticos y redes
                  </h4>
                  <p className="text-sm text-zinc-400">
                    CFGM SMX - Septiembre 2015 a Junio 2017
                  </p>
                </div>
                <div className="border-l-2 border-white/25 pl-4">
                  <h4 className="font-semibold text-white">
                    Trinity College London Grade 8 (B2.2)
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Estudios de inglés - Septiembre 2011 a Junio 2012
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-zinc-500">
                Formación complementaria
              </h3>
              <div className="space-y-6">
                <article className="border-l-2 border-white/25 pl-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-white">
                      Curso completo de JavaScript
                    </h4>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                      70 h
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Fundamentos, DOM, programación orientada a objetos y
                    asincronía.
                  </p>
                  <a
                    href="https://www.udemy.com/course/the-complete-javascript-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Ver curso en Udemy <span aria-hidden="true">↗</span>
                  </a>
                </article>
                <article className="border-l-2 border-white/25 pl-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-white">
                      Desarrollo de APIs con Node.js y MongoDB
                    </h4>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                      40 h
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Express y Mongoose, autenticación JWT, seguridad y
                    saneamiento de datos.
                  </p>
                  <a
                    href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Ver curso en Udemy <span aria-hidden="true">↗</span>
                  </a>
                </article>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="mb-5 text-sm font-semibold uppercase text-zinc-500">
              Stack tecnológico
            </h3>
            <div className="space-y-5">
              {categories.map((category) => (
                <div key={category}>
                  <h4 className="mb-3 text-sm font-medium text-zinc-400">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies
                      .filter((technology) => technology.category === category)
                      .map((technology) => (
                        <span
                          key={technology.name}
                          className="cursor-default rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-zinc-100"
                        >
                          {technology.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
