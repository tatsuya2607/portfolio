"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    // Reading persisted/browser language is an external-system sync that can
    // only run on the client after mount, so a one-shot setState here is intended.
    if (saved === "ja" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(saved);
    } else if (typeof navigator !== "undefined" && navigator.language?.startsWith("ja")) {
      setLangState("ja");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const toggle = () => setLang(lang === "en" ? "ja" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
