const skills = [
  "C",
  "C++",
  "Java",
  "HTML",
  "CSS",
  "ESP32",
  "MQTT",
  "IoT",
  "Data Visualization",
  "Git",
  "Verilog HDL",
  "OOP",
  "Problem Solving",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-purple-600/20 border border-purple-500 px-5 py-3 rounded-xl hover:bg-purple-600/40 hover:scale-105 transition duration-300 cursor-pointer "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
