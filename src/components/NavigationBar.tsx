function NavigationBar() {
  return (
    <div className="flex flex-row items-center justify-center py-10 md:py-12 max-w-5xl mx-auto relative z-[100] px-4 md:px-8">
      <div className="w-full flex justify-center">
        <div className="flex flex-row space-x-4 md:space-x-8 items-center antialiased border px-3 md:px-4 py-3 rounded-2xl border-zinc-700/60 bg-zinc-800/80 backdrop-blur-md">
          <a href="/" className="text-xs md:text-sm hover:text-zinc-300 transition-colors">
            Sobre mí
          </a>
          <a href="/experience" className="text-xs md:text-sm hover:text-zinc-300 transition-colors whitespace-nowrap">
            Experiencia
          </a>
          <a href="/projects" className="text-xs md:text-sm hover:text-zinc-300 transition-colors">
            Proyectos
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
