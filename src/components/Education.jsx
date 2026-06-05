export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Education
        </h2>

        <div className="space-y-6">

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="font-bold text-xl">
              BITS Pilani, Hyderabad Campus
            </h3>
            <p className="text-slate-300">
              B.E. Electronics & Communication Engineering
            </p>
            <p className="text-purple-400">
              2024 - Present
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="font-bold text-xl">
              Bal Vidya Niketan
            </h3>
            <p className="text-slate-300">
              Senior Secondary Education (XI-XII)
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="font-bold text-xl">
              Don Bosco Academy
            </h3>
            <p className="text-slate-300">
              Secondary Education (Up to Class X)
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}