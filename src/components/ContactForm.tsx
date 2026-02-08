import React, { useState } from "react";

export default function ContactForm({ dict }: { dict: any }) {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`mailto:your@mail.com?subject=From%20${state.name}&body=${encodeURIComponent(state.message)}`, '_blank');
    setState({ name: "", email: "", message: "" });
  };
  return (
    <section>
      <h2>{dict["contact"]}</h2>
      <form style={{ maxWidth: 440 }} onSubmit={handleSubmit}>
        <input
          placeholder={dict["your_name"]}
          name="name"
          value={state.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          placeholder={dict["your_email"]}
          name="email"
          value={state.email}
          onChange={handleChange}
          style={inputStyle}
          type="email"
          required
        />
        <textarea
          placeholder={dict["message"]}
          name="message"
          value={state.message}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: 96, resize: "vertical" }}
          required
        />
        <button type="submit" style={btnStyle}>{dict["send"]}</button>
      </form>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  margin: "8px 0",
  borderRadius: 8,
  border: "1px solid #ebe4ff",
  fontSize: 16,
  outline: "none",
  background: "var(--card-bg)",
  color: "var(--text)"
};
const btnStyle: React.CSSProperties = {
  marginTop: 10,
  padding: "12px 0",
  width: "100%",
  background: "var(--accent)",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontSize: 18,
  cursor: "pointer"
};