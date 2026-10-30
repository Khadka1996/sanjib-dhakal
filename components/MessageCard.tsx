"use client";
import { useLang } from "@/lib/lang";
// DRAFT message: replace the wording with Sanjib Dhakal's own words.
export default function MessageCard() {
  const { lang } = useLang();
  const ne = lang === "ne";
  return (
    <section className="msg">
      <div className="msgbox">
        <img src="/images/flag.jpg" alt="Sanjib Dhakal" />
        <div>
          <h2>{ne ? "उम्मेदवारको सन्देश" : "A message from the candidate"}</h2>
          {(ne ? ["संगठन कार्यकर्ताको पसिनाले बलियो हुन्छ।", "कोशी प्रदेशका हरेक पालिका र वडासम्म पुग्ने कांग्रेस बनाउने संकल्पसहित म तपाईंको साथ र विश्वास माग्दछु।", "हाम्रो ध्येय एउटै छ— संगठन र देशको समुन्नति।"] : ["An organization is strong because of its workers.", "I ask for your support and trust to build a Congress that reaches every municipality and ward of Koshi Province.", "Our goal is one: the progress of our organization and our country."]).map((l, i) => <p key={i}>{l}</p>)}
          <p className="sign">{ne ? "जय नेपाल ।" : "Jai Nepal."}</p>
          <strong>{ne ? "संजिव ढकाल" : "Sanjib Dhakal"}</strong>
          <small>{ne ? "केन्द्रीय महाधिवेशन प्रतिनिधि, इलाम क्षेत्र १ · कोशी प्रदेश सहमहामन्त्री पदका उम्मेदवार" : "Central Convention Delegate, Ilam 1 · Candidate for Joint General Secretary, Koshi Province"}</small>
        </div>
      </div>
    </section>
  );
}
