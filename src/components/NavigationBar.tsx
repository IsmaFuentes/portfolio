import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="sticky top-0 flex flex-row items-center justify-center py-4 md:py-6 max-w-5xl mx-auto relative z-[100] px-2 md:px-8">
      <div className="w-full flex justify-center">
        <div className="flex flex-row space-x-1 md:space-x-10 items-center antialiased border py-1 rounded-xl md:rounded-2xl border-blue-800/60 bg-blue-950/30 backdrop-blur-md shadow-lg shadow-blue-950/50">
          <Link
            to="/"
            className="text-xs md:text-sm hover:text-cyan-300 transition-colors px-3 md:px-8 py-2"
          >
            Sobre mí
          </Link>
          <Link
            to="/experience"
            className="text-xs md:text-sm hover:text-cyan-300 transition-colors whitespace-nowrap px-3 md:px-8 py-2"
          >
            Experiencia
          </Link>
          <Link
            to="/projects"
            className="text-xs md:text-sm hover:text-cyan-300 transition-colors px-3 md:px-8 py-2"
          >
            Proyectos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
