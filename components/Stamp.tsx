"use client";
import { useInView, useLang } from "@/lib/lang";
import { manifesto } from "@/lib/content";
const npDigits = (s: string) => s.replace(/\d/g, (d) => "०१२३४५६७८९"[+d]);
export default function Stamp() {
  const { t, lang } = useLang();
  const ne = lang === "ne";
  const [ref, on] = useInView<HTMLDivElement>();
  const [gridRef, gridOn] = useInView<HTMLOListElement>(0.08);
  return (
    <>
      <div ref={ref} className={"stampgrid" + (on ? " go" : "")}>
        <div className="treebox" role="img" aria-label="Tree symbol with a vote stamp">
          <img src="/images/tree.png" alt="" />
          <svg viewBox="0 0 250 250" className="over">
            <g className="ink"><circle cx="125" cy="78" r="23" fill="none" stroke="#cf1230" strokeWidth="4" /><text x="125" y="86" textAnchor="middle" fontSize="22" fontWeight="700" fill="#cf1230">मत</text></g>
            <g className="stamp" transform="translate(0,78)"><rect x="113" y="-52" width="24" height="46" rx="8" fill="#6e1620" /><rect x="99" y="-6" width="52" height="12" rx="4" fill="#cf1230" /></g>
          </svg>
        </div>
        <div className="mintro">
          <p className="mkick">{ne ? "कोशी प्रदेशका लागि मेरा प्रतिबद्धता" : "My commitments for Koshi Province"}</p>
          <h3>{ne ? "कार्यकर्ताको पसिनादेखि वडासम्म पुग्ने कांग्रेस" : "A Congress built on its workers, reaching every ward"}</h3>
          <p>{ne ? "विद्यार्थी आन्दोलनदेखि केन्द्रीय प्रतिनिधिसम्मको यात्राले सिकाएको एउटै कुरा: संगठन बलियो भए मात्र पार्टी र देश बलियो हुन्छ। सहमहामन्त्रीका रूपमा यी आठ प्रतिबद्धता पूरा गर्न म जवाफदेही रहनेछु।" : "From student politics to central delegate, one lesson has held: the party and the country are only as strong as the organization. As Joint General Secretary, I will be accountable for these eight commitments."}</p>
          <ul className="mstats">
            <li><b>{ne ? "१४" : "14"}</b>{ne ? "जिल्ला" : "districts"}</li>
            <li><b>{ne ? "१३७" : "137"}</b>{ne ? "पालिका" : "local units"}</li>
            <li><b>{ne ? "८" : "8"}</b>{ne ? "प्रतिबद्धता" : "commitments"}</li>
          </ul>
        </div>
      </div>
      <ol ref={gridRef} className={"pledges" + (gridOn ? " go" : "")}>
        {manifesto.map((m, i) => {
          const n = String(i + 1).padStart(2, "0");
          return (
            <li key={i} style={{ ["--i" as string]: i } as React.CSSProperties}>
              <span className="pnum" aria-hidden="true">{ne ? npDigits(n) : n}</span>
              <h3>{t(m.t)}</h3>
              <p>{t(m.d)}</p>
              <ul>{m.p.map((x, j) => <li key={j}>{t(x)}</li>)}</ul>
            </li>
          );
        })}
      </ol>
      <div className="pledge">
        <p>{ne ? "“पद होइन, जिम्मेवारी। भाषण होइन, काम।”" : "“Not a post, a responsibility. Not speeches, work.”"}</p>
        <a className="btn red" href="#suggest">{ne ? "सुझाव दिनुहोस्" : "Share your suggestions"}</a>
      </div>
    </>
  );
}
