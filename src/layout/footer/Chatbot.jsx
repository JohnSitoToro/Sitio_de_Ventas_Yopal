import React, { useState, useEffect, useRef } from "react";

export default function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy tu asistente, ¿en qué puedo ayudarte?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(prev => !prev);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    const botReply = getBotResponse(input);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: botReply }]);
    }, 500);

    setInput("");
  };

  const getBotResponse = (msg) => {
    const text = msg.toLowerCase();
    if (text.includes("precio")) return "Nuestros precios dependen del servicio solicitado.";
    if (text.includes("horario")) return "Atendemos de lunes a viernes de 9 a 18 hs.";
    if (text.includes("hola") || text.includes("buenas")) return "¡Hola! ¿Cómo puedo ayudarte hoy?";
    return "Lo siento, no entendí tu mensaje. Intenta con otra pregunta.";
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  return (
    <>
      {/* Burbuja flotante con SVG */}
      <div className="chat-bubble" onClick={toggleChat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M2 3h20v14H5l-3 3V3zm2 2v10h16V5H4zm3 3h10v2H7V8zm0 4h7v2H7v-2z"/>
        </svg>
      </div>

      {/* Modal del chat */}
      {isOpen && (
        <div className="chat-overlay">
          <div className="chat-modal">
            <div className="chat-header">
              <h3>Chatbot</h3>
              <button className="close-btn" onClick={toggleChat}>X</button>
            </div>

            <div className="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`chat-message ${m.from}`}>
                  {m.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe tu mensaje..."
              />
              <button onClick={handleSend}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}