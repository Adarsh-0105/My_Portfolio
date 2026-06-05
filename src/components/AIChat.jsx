import { useState } from "react";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch("https://my-portfolio-backend-nnoy.onrender.com/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data = await response.json();

      const aiMessage = {
        role: "ai",
        content: data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Error connecting to backend.",
        },
      ]);
    }

    setLoading(false);
    setQuestion("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAsk();
    }
  };

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

          {/* Chat Messages */}

          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-purple-600"
                      : "bg-slate-700"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 px-4 py-3 rounded-2xl">
                  Thinking...
                </div>
              </div>
            )}

          </div>

          {/* Input */}

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="w-full p-4 rounded-lg bg-slate-700 text-white outline-none"
          />

          <button
            onClick={handleAsk}
         className="mt-4 bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 rounded-xl hover:scale-105 transition duration-300"
          >
            Ask
          </button>

        </div>

      </div>
    </section>
  );
}