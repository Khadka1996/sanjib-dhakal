"use client";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { useLang } from "@/lib/lang";
export default function ErrorView({ code, onRetry }: { code: "404" | "500"; onRetry?: () => void }) {
  const { lang } = useLang();
  const ne = lang === "ne";
  const lost = code === "404";
  return (
    <>
      <Header />
      <main className="errpage">
        <div className="errbox">
          <img className="errtree" src="/images/tree.png" alt="" width={140} height={140} />
          <p className="errcode">{ne ? (lost ? "४०४" : "त्रुटि") : lost ? "404" : "Error"}</p>
          <h1>{lost ? (ne ? "यो पृष्ठ भेटिएन" : "Page not found") : ne ? "केही गडबड भयो" : "Something went wrong"}</h1>
          <p>{lost ? (ne ? "तपाईंले खोज्नुभएको पृष्ठ सारिएको, हटाइएको वा ठेगाना गलत हुन सक्छ।" : "The page you are looking for may have moved, been removed, or the address may be wrong.") : ne ? "पृष्ठ खोल्दा समस्या आयो। कृपया फेरि प्रयास गर्नुहोस्।" : "There was a problem loading this page. Please try again."}</p>
          <div className="cta">
            {onRetry && <button className="btn red" onClick={onRetry}>{ne ? "फेरि प्रयास गर्नुहोस्" : "Try again"}</button>}
            <Link className={`btn ${onRetry ? "line" : "red"}`} href="/">{ne ? "गृहपृष्ठमा जानुहोस्" : "Go to the home page"}</Link>
            <a className="btn line" href="/#contact">{ne ? "सम्पर्क गर्नुहोस्" : "Contact"}</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
