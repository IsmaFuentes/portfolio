function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 text-center">
        <p className="text-sm text-zinc-400">
          Powered by <span className="text-zinc-200 font-semibold">React</span>
          {" + "}
          <span className="text-zinc-200 font-semibold">TailwindCSS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
