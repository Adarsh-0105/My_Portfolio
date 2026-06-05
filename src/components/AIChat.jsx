export default function AIChat() {
  return (
    <section
      id="chat"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-6">
          Ask My AI Assistant
        </h2>

        <p className="text-slate-400 mb-8">
          Ask about my projects, skills, education,
          experience, or interests.
        </p>

        <div className="bg-slate-800 p-6 rounded-2xl">

          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full p-4 rounded-lg bg-slate-700 text-white outline-none"
          />

          <button
            className="mt-4 bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 rounded-xl hover:scale-105 transition duration-300"
          >
            Ask
          </button>

        </div>

      </div>
    </section>
  );
}