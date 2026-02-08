import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./styles/globals.scss";
import { setTheme, getPreferredTheme } from "./theme";

export type LangType = "en" | "zh";

export default function App() {
  const [theme, setThemeState] = useState<"light" | "dark">(getPreferredTheme());
  const [lang, setLang] = useState<LangType>("zh");
  // 动态加载语言文件
  const [dict, setDict] = useState<any>({});

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  useEffect(() => {
    import(`./locales/${lang}.json`).then(setDict);
  }, [lang]);

  return (
    <>
      <Header
        theme={theme}
        setTheme={setThemeState}
        lang={lang}
        setLang={setLang}
        dict={dict}
      />
      <main style={{ maxWidth: 940, margin: "0 auto", padding: "32px 16px" }}>
        <ProfileCard dict={dict} />
        <Skills dict={dict} />
        <Portfolio dict={dict} />
        <ContactForm dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}