import React from "react";

const projects = [
  {
    title: "个人博客",
    description: "基于 Next.js + Markdown 的静态博客，简洁高效。",
    link: "https://github.com/dawndot/your-blog"
  },
  {
    title: "UI 组件库",
    description: "一套为自己项目量身打造的 React 组件库，支持暗黑模式。",
    link: "https://github.com/dawndot/your-ui-kit"
  },
  // ...可继续添加
];

export default function Portfolio({ dict }: { dict: any }) {
  return (
    <section>
      <h2>{dict["portfolio"]}</h2>
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 24
      }}>
        {projects.map(p =>
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--card-bg)",
              borderRadius: "var(--border-radius)",
              padding: "22px 20px",
              minWidth: 260,
              flex: "1 1 280px",
              textDecoration: "none",
              boxShadow: "0 2px 8px #715cfd15",
              color: "unset"
            }}
          >
            <h4 style={{ margin: "0 0 8px" }}>{p.title}</h4>
            <p style={{ margin: 0, color: "var(--secondary-text)" }}>{p.description}</p>
          </a>
        )}
      </div>
    </section>
  );
}