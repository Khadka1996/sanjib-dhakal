"use client";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import type { L } from "./content";
type Lang = "ne" | "en";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (x: L) => string }>({ lang: "ne", setLang: () => {}, t: (x) => x.ne });
export const useLang = () => useContext(Ctx);
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ne");
  useEffect(() => {
    try { const saved = localStorage.getItem("lang"); if (saved === "en" || saved === "ne") setLang(saved); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang, t: (x) => x[lang] }}>{children}</Ctx.Provider>;
}
export function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, on] as const;
}
