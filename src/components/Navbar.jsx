export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-white">
          Kumar Adarsh
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#hero" className="hover:text-purple-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}