import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-slate-900 text-white min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="flex-1">

          <p className="text-purple-400 font-medium mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Kumar Adarsh
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
            ECE Undergraduate | Aspiring Software Developer
          </h2>

          <p className="text-slate-400 leading-relaxed max-w-xl">
            Passionate about software development, IoT systems,
            data visualization, and scalable applications.
            I enjoy solving real-world problems through technology
            and continuously learning new concepts, tools, and
            emerging technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 rounded-xl font-medium hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-slate-800 px-6 py-3 rounded-xl font-medium hover:bg-slate-700 transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">

          <img
            src={heroImage}
            alt="Hero"
            className="w-72 md:w-96 rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}