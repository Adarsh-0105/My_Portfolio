export default function Contact() {
return ( <section
   id="contact"
   className="bg-slate-950 text-white py-24 px-6"
 > <div className="max-w-5xl mx-auto">


    <h2 className="text-4xl font-bold mb-10">
      Contact
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="font-semibold">Email</h3>
        <a
          href="mailto:kumaradarsh10381@gmail.com"
          className="text-purple-400 hover:text-purple-300"
        >
          kumaradarsh10381@gmail.com
        </a>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="font-semibold">Mobile</h3>
        <p className="text-slate-300">
          +91 9470000297
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="font-semibold">GitHub</h3>
        <a
          href="https://github.com/Adarsh-0105"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          github.com/Adarsh-0105
        </a>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="font-semibold">LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/kumar-adarsh-10381abc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          linkedin.com/in/kumar-adarsh-10381abc
        </a>
      </div>

    </div>

  </div>
</section>


);
}
