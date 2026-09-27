import { experiences } from "./data/index.ts";

function ExperiencePage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-white">
            Experiencia Profesional
          </h1>
          <p className="text-zinc-400 text-lg">
            7+ años de trayectoria en desarrollo de software
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/15 to-transparent"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[1.875rem] top-2 w-2 h-2 bg-zinc-100 rounded-full ring-4 ring-zinc-950"></div>

                <div className="bg-white/[0.035] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/20 transition-all duration-300 group">
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

                  <div className="pt-4 border-t border-white/10">
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

export default ExperiencePage;
