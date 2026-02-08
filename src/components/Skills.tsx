import React from "react";
// 可用 iconfont 或 svg
const SKILLS = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Node.js", icon: "🟩" },
  { name: "CSS/SCSS", icon: "🎨" },
  { name: "Figma", icon: "🎨" },
  { name: "Vite/Webpack", icon: "⚡" }
];

export default function Skills({ dict }: { dict: any }) {
  return (
    <section>
      <h2>{dict["skills"]}</h2>
      <div style={{
        display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 32
      }}>
        {SKILLS.map(s =>
          <div key={s.name} style={{
            background: "var(--card-bg)",
            borderRadius: "var(--border-radius)",
            padding: "16px 20px",
            boxShadow: "0 2px 8px #715cfd12",
            display: "flex", alignItems: "center", gap: 8, minWidth: 100
          }}>
            <span style={{ fontSize: 28 }}>{s.icon}</span>
            <span>{s.name}</span>
          </div>
        )}
      </div>
    </section>
  );
}