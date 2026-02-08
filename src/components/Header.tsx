import React from "react";

export default function Header({
  theme,
  setTheme,
  lang,
  setLang,
  dict
}: {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  lang: "en" | "zh";
  setLang: (l: "en" | "zh") => void;
  dict: any;
}) {
  return (
    <header style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: "var(--card-bg)", borderRadius: "var(--border-radius)", marginTop: 24, padding: "12px 28px"
    }}>
      <h2 style={{ margin: 0 }}>DAWNDOT</h2>
      <div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
            marginRight: 12,
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: 18
          }}
          aria-label={dict["switch_theme"]}
        >
          {theme === "light" ? "🌞" : "🌙"}
        </button>
        <select
          value={lang}
          onChange={e => setLang(e.target.value as "zh" | "en")}
          aria-label={dict["switch_lang"]}
          style={{
            border: "none",
            background: "none",
            fontSize: 16
          }}
        >
          <option value="zh">中文</option>
          <option value="en">EN</option>
        </select>
      </div>
    </header>
  );
}