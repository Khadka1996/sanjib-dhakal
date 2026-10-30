"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";
import { history } from "@/lib/content";
const pad = (i: number) => String(i).padStart(2, "0");
const Star = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
export default function History() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const x0 = useRef<number | null>(null);
  const n = history.length;
  const go = (i: number) => setActive((i + n) % n);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => go(active + 1), 7000);
    return () => clearTimeout(id);
  }, [active, paused]); // eslint-disable-line react-hooks/exhaustive-deps
  const pick = (i: number) => { setPaused(true); go(i); };
  return (
    <section id="history" className="hist" aria-roledescription="carousel" aria-label={lang === "ne" ? "नेपाली कांग्रेसको संघर्षको इतिहास" : "History of the Nepali Congress struggle"}
      onTouchStart={(e) => (x0.current = e.touches[0].clientX)}
      onTouchEnd={(e) => { if (x0.current == null) return; const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 40) pick(active + (d < 0 ? 1 : -1)); x0.current = null; }}>
      {history.map((h, i) => (
        <div key={i} className={`slide${i === active ? " on" : ""}`} aria-hidden={i !== active}>
          <div className="bg" style={{ backgroundImage: `linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,0)),linear-gradient(to top,rgba(0,0,0,.3),rgba(0,0,0,0)),url(/history/${pad(i)}.jpg)` }} />
          <div className="slideTxt">
            <div className="hdate">{t(h.date)}</div>
            <h3>{t(h.t)}</h3>
            <p>{t(h.d)}</p>
          </div>
        </div>
      ))}
      <div className="hnav">
        <button className="harr" onClick={() => pick(active - 1)} aria-label={lang === "ne" ? "अघिल्लो" : "Previous"}>‹</button>
        <button className="harr" onClick={() => pick(active + 1)} aria-label={lang === "ne" ? "अर्को" : "Next"}>›</button>
      </div>
      <div className="hbar">
        {history.map((h, i) => (
          <div key={i} className="hstep">
            {i > 0 && <i className={i <= active ? "done" : ""} />}
            <button className={i === active ? "on" : ""} onClick={() => pick(i)} aria-label={t(h.date)} aria-current={i === active}>
              <span>{t(h.date).split(" ").pop()}</span><Star />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
