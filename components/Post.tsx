"use client";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { useLang } from "@/lib/lang";
import type { posts } from "@/lib/content";
export default function Post({ p }: { p: (typeof posts)[number] }) {
  const { t, lang } = useLang();
  return (
    <>
      <Header />
      <main>
      <article className="sec art">
        <img src={`/images/${p.img}.jpg`} alt={t(p.t)} />
        <h1>{t(p.t)}</h1>
        <p>{t(p.b)}</p>
        <Link href="/#blog">{lang === "ne" ? "सबै ब्लग" : "All posts"}</Link>
      </article>
      </main>
      <Footer />
    </>
  );
}
