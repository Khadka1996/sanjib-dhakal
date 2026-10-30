"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { WA_GROUP } from "@/lib/content";
const nav: [string, string, string][] = [["about", "परिचय", "About"], ["history", "इतिहास", "History"], ["struggle", "संघर्ष", "Journey"], ["manifesto", "घोषणापत्र", "Manifesto"], ["gallery", "तस्बिर", "Photos"], ["videos", "भिडियो", "Videos"], ["blog", "ब्लग", "Blog"], ["contact", "सम्पर्क", "Contact"]];
export default function Header() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [open]);
  return (
    <>
    <a className="joinbar" href={WA_GROUP} target="_blank" rel="noopener noreferrer">{lang === "ne" ? "हाम्रो अभियानमा जोडिनुहोस्" : "Join our campaign"}<b>{lang === "ne" ? "WhatsApp समूहमा सामेल हुनुहोस् →" : "Join the WhatsApp group →"}</b></a>
    <header className={`hdr${solid ? " solid" : ""}${open ? " open" : ""}`}>
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <span className="logoWrap"><img className="logoTree" src="/images/tree.png" alt="" width={46} height={46} /></span>
        <span className="names"><b>संजिव ढकाल</b><span>Sanjib Dhakal</span></span>
      </Link>
      <nav id="menu">{nav.map(([id, ne, en], i) => <a key={id} href={`/#${id}`} style={{ "--i": i } as React.CSSProperties} onClick={() => setOpen(false)}>{lang === "ne" ? ne : en}</a>)}</nav>
      <button className="lang" onClick={() => setLang(lang === "ne" ? "en" : "ne")} aria-label="Switch language"><span className="lfull">{lang === "ne" ? "English" : "नेपाली"}</span><span className="lshort">{lang === "ne" ? "EN" : "ने"}</span></button>
      <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"}><i /><i /><i /></button>
    </header>
    </>
  );
}
