"use client";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { leaders } from "@/lib/content";
function Face({ s, n }: { s: string; n: string }) {
  const [bad, setBad] = useState(false);
  return <div className="face">{bad ? <span>{n.trim()[0]}</span> : <img src={`/leaders/${s}.jpg`} alt={n} loading="lazy" onError={() => setBad(true)} />}</div>;
}
export default function Principles() {
  const { lang, t } = useLang();
  const w = lang === "ne" ? ["राष्ट्रियता", "लोकतन्त्र", "समाजवाद"] : ["Nationalism", "Democracy", "Socialism"];
  return (
    <section className="princ" aria-label="Principles">
      <h2>{w.map((x, i) => <span key={x}><i>★</i>{x}{i === w.length - 1 && <i>★</i>}</span>)}</h2>
      <ul className="leaders">{leaders.map((l) => <li key={l.s}><Face s={l.s} n={t(l.n)} /><span>{t(l.n)}</span></li>)}</ul>
    </section>
  );
}
