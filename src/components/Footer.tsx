import React from "react";
export default function Footer({ dict }: { dict: any }) {
  return (
    <footer
      style={{
        marginTop: 44,
        textAlign: "center",
        color: "var(--secondary-text)",
        fontSize: 14
      }}
    >
      <hr style={{ border: 0, height: 1, background: "var(--accent-alpha)", margin: "24px 0 10px 0" }} />
      <span>© {new Date().getFullYear()} Dawndot. {dict["all_rights"]}</span>
    </footer>
  );
}