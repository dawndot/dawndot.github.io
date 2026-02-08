import React from "react";

export default function ProfileCard({ dict }: { dict: any }) {
  return (
    <section style={{
      background: "var(--card-bg)",
      borderRadius: "var(--border-radius)",
      padding: "32px",
      display: "flex",
      alignItems: "center",
      gap: 32,
      boxShadow: "0 3px 16px 0 #715cfd10",
      marginBottom: 32
    }}>
      <img
        src="https://avatars.githubusercontent.com/u/your-github-id?v=4"
        alt="avatar" width={104} height={104}
        style={{ borderRadius: "50%", boxShadow: "0 2px 8px #715cfd33" }}
      />
      <div>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>{dict["title"]}</h1>
        <p style={{ color: "var(--secondary-text)", margin: "16px 0 10px 0" }}>
          {dict["desc"]}
        </p>
        <div>
          <a href="mailto:your@mail.com" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--accent)", fontWeight: 500 }}>
            your@mail.com
          </a>
          <span style={{ marginLeft: 16 }}>
            <a href="https://github.com/dawndot" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          {/* 可以添加其他社交/微信/微博 */}
        </div>
      </div>
    </section>
  );
}