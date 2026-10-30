"use client";
import { FormEvent, useState } from "react";
import { useLang } from "@/lib/lang";
import { WHATSAPP } from "@/lib/content";
const topics: [string, string][] = [["सुझाव", "Suggestion"], ["संगठन", "Organization"], ["युवा तथा विद्यार्थी", "Youth & students"], ["शिक्षा", "Education"], ["स्थानीय समस्या", "Local issue"], ["अन्य", "Other"]];
export default function SuggestForm() {
  const { lang } = useLang();
  const ne = lang === "ne";
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) || "").trim();
    const lines = ne
      ? ["नमस्ते संजिव जी,", "", `*नाम:* ${v("name")}`, `*फोन:* ${v("phone")}`, v("place") ? `*ठेगाना:* ${v("place")}` : null, `*विषय:* ${v("topic")}`, "", v("msg"), "", "(वेबसाइटबाट पठाइएको)"]
      : ["Hello Sanjib ji,", "", `*Name:* ${v("name")}`, `*Phone:* ${v("phone")}`, v("place") ? `*Place:* ${v("place")}` : null, `*Topic:* ${v("topic")}`, "", v("msg"), "", "(Sent from the website)"];
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.filter((l) => l !== null).join("\n"))}`;
    const w = window.open(url, "_blank");
    if (w) w.opener = null; else window.location.href = url;
    setSent(true);
  };
  return (
    <form id="suggest" className="sform" onSubmit={submit}>
      <h3>{ne ? "तपाईंको सुझाव पठाउनुहोस्" : "Send your suggestion"}</h3>
      <p className="shint">{ne ? "फारम भर्नुहोस्, पठाउँदा सन्देश सिधै संजिव ढकालको WhatsApp मा खुल्छ।" : "Fill in the form. Sending opens the message straight in Sanjib Dhakal's WhatsApp."}</p>
      <div className="srow">
        <label>{ne ? "नाम" : "Name"} *<input name="name" required autoComplete="name" maxLength={80} /></label>
        <label>{ne ? "फोन नम्बर" : "Phone number"} *<input name="phone" required type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+\-\s०-९]{7,16}" maxLength={16} /></label>
      </div>
      <div className="srow">
        <label>{ne ? "जिल्ला / पालिका" : "District / municipality"}<input name="place" autoComplete="address-level2" maxLength={80} /></label>
        <label>{ne ? "विषय" : "Topic"}<select name="topic" defaultValue={ne ? topics[0][0] : topics[0][1]} key={lang}>{topics.map(([a, b]) => <option key={a}>{ne ? a : b}</option>)}</select></label>
      </div>
      <label>{ne ? "तपाईंको सुझाव वा सन्देश" : "Your suggestion or message"} *<textarea name="msg" required rows={5} maxLength={1500} /></label>
      <button className="btn" type="submit">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9A11.82 11.82 0 0 0 12.05 0Zm0 21.79a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 5.45 0 9.88 4.43 9.88 9.88 0 5.45-4.43 9.89-9.89 9.89Z" /></svg>
        {ne ? "WhatsApp मा पठाउनुहोस्" : "Send on WhatsApp"}
      </button>
      {sent && <p className="sok" role="status">{ne ? "WhatsApp खुल्यो। त्यहाँ ‘Send’ थिचेर सन्देश पठाउनुहोस्। धन्यवाद!" : "WhatsApp is open. Press ‘Send’ there to deliver your message. Thank you!"}</p>}
    </form>
  );
}
