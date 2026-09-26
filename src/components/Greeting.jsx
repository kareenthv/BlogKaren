import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div
      style={{
        background: "white",
        padding: "1.5rem",
        borderRadius: "18px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <h3 style={{ color: "#8F4F5F", marginBottom: "1rem" }}>
        {greeting} ¡Gracias por tu visita!
      </h3>
      <button
        onClick={() => setGreeting(randomMessage())}
        style={{
          padding: "10px 20px",
          background: "linear-gradient(135deg, #F4C7D7, #F5E0D0)",
          color: "#8F4F5F",
          border: "none",
          borderRadius: "30px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        Nuevo saludo
      </button>
    </div>
  );
}
