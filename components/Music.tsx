"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";
export default function Music() {
  const a = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const { lang } = useLang();
  useEffect(() => {
    const el = a.current!; el.volume = 0.2;
    const start = () => { if (!sessionStorage.getItem("muted")) el.play().then(() => setOn(true)).catch(() => {}); };
    const evs = ["pointerdown", "keydown", "touchstart"];
    evs.forEach((e) => window.addEventListener(e, start, { once: true }));
    const stop = () => { el.pause(); setOn(false); };
    window.addEventListener("story-play", stop);
    return () => { evs.forEach((e) => window.removeEventListener(e, start)); window.removeEventListener("story-play", stop); };
  }, []);
  const toggle = () => {
    const el = a.current!;
    if (on) { el.pause(); setOn(false); sessionStorage.setItem("muted", "1"); }
    else { sessionStorage.removeItem("muted"); el.play().then(() => setOn(true)).catch(() => {}); }
  };
  return (
    <>
      <audio ref={a} src="/media/music.mp3" loop preload="none" />
      <button className="mus" onPointerDown={(e) => e.stopPropagation()} onClick={toggle} aria-pressed={on}>{on ? "♪ " : "× "}{lang === "ne" ? (on ? "संगीत बन्द गर्नुहोस्" : "संगीत सुरु गर्नुहोस्") : on ? "Music off" : "Music on"}</button>
    </>
  );
}
