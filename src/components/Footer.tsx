function Footer() {
  return (
    <footer className="border-t border-blue-900/30 bg-blue-950/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 text-center">
        <p className="text-sm text-zinc-400">
          Powered by <span className="text-cyan-400 font-semibold">React</span>
          {" + "}
          <span className="text-cyan-400 font-semibold">TailwindCSS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
