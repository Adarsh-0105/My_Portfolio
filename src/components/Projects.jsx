export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

       <div
         className="
          bg-slate-900
          rounded-2xl
          p-8
          shadow-lg
          hover:shadow-purple-500/20
          hover:-translate-y-2
          transition
          duration-300"
          >

          <h3 className="text-2xl font-bold mb-4">
            IoT Sensor Monitoring & Visualization System
          </h3>

          <p className="text-slate-300 mb-6">
            Faculty-guided research project involving
            real-time sensor data collection, MQTT-based
            communication, visualization, and analysis.
          </p>

          <ul className="space-y-3 text-slate-300 list-disc pl-6">
            <li>Integrated multiple sensors with ESP32 modules.</li>
            <li>Implemented MQTT-based communication.</li>
            <li>Built dynamic sensor widgets.</li>
            <li>Created interactive graphs.</li>
            <li>Implemented moving filters.</li>
            <li>Worked on Wi-Fi signal analysis.</li>
          </ul>

        </div>

      </div>
    </section>
  );
}