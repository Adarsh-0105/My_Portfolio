export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="font-semibold">Email</h3>
            <p className="text-slate-300">
              kumaradarsh10381@gmail.com
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="font-semibold">Mobile</h3>
            <p className="text-slate-300">
              +91 9470000297
            </p>
          </div>

         <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-slate-300">
             github.com/Adarsh-0105
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-slate-300">
              www.linkedin.com/in/kumar-adarsh-10381abc
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}