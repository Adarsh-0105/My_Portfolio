export default function Education() {
  const education = [
    {
      institution: "BITS Pilani, Hyderabad Campus",
      degree: "B.E. Electronics & Communication Engineering",
      duration: "2024 - Present",
    },
    {
      institution: "Bal Vidya Niketan",
      degree: "Senior Secondary Education (Class XI-XII)",
      duration: "",
    },
    {
      institution: "Don Bosco Academy",
      degree: "Secondary Education (Up to Class X)",
      duration: "",
    },
  ];

  return (
    <section id="education">
      <h2>Education</h2>

      {education.map((item) => (
        <div key={item.institution}>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <p>{item.duration}</p>
        </div>
      ))}
    </section>
  );
}