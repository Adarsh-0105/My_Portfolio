const skills = [
  "C",
  "C++",
  "Java",
  "HTML",
  "CSS",
  "Object Oriented Programming",
  "ESP32",
  "MQTT",
  "IoT",
  "Data Visualization",
  "Verilog HDL",
  "Problem Solving",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}