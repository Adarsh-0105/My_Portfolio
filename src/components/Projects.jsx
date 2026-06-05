const projects = [
  {
    title: "IoT Sensor Monitoring & Visualization System",
    description:
      "Faculty-guided research project involving real-time sensor data collection, visualization, and analysis using ESP32 modules and MQTT communication.",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
        <div key={project.title}>
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <ul>
            <li>
              Integrated multiple sensors with ESP32 modules.
            </li>

            <li>
              Implemented MQTT-based real-time communication.
            </li>

            <li>
              Built dynamic widgets based on detected sensor types.
            </li>

            <li>
              Developed interactive graphs and visualization tools.
            </li>

            <li>
              Implemented moving filters and comparative analysis.
            </li>

            <li>
              Worked with Wi-Fi signal amplitude and phase analysis.
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}