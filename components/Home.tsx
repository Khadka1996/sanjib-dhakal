"use client";
import { useState } from "react";
import Link from "next/link";
import Stamp from "./Stamp";
import Header from "./Header";
import Music from "./Music";
import Footer from "./Footer";
import Principles from "./Principles";
import History from "./History";
import SuggestForm from "./SuggestForm";
import MessageCard from "./MessageCard";
import { useLang } from "@/lib/lang";
import { links, reels, reelPosters, timeline, gallery, posts } from "@/lib/content";

function Reel({ url, poster }: { url: string; poster: string }) {
  const [play, setPlay] = useState(false);
  const { lang } = useLang();
  return (
    <div className="reel" style={{ backgroundImage: `url(/images/${poster}.jpg)` }}>
      {play ? <iframe title="Facebook reel" src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=true`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> :
        <button onClick={() => setPlay(true)}><b>▶</b>{lang === "ne" ? "भिडियो हेर्नुहोस्" : "Play video"}</button>}
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const ne = lang === "ne";
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="stage">
            <span className="halo" aria-hidden="true" />
            <span className="ring" aria-hidden="true" />
            <div className="me"><img src="/images/sanjeev.jpg" alt={ne ? "संजिव ढकाल" : "Sanjib Dhakal"} width={1024} height={1024} fetchPriority="high" /></div>
            <span className="vote" aria-hidden="true"><img src="/images/tree.png" alt="" /></span>
          </div>
          <div className="heroTxt">
            <img className="nclogo" src="/images/nc-logo.svg" alt="Nepali Congress" />
            <p className="kicker">{ne ? "नेपाली कांग्रेस, १५औं महाधिवेशन" : "Nepali Congress, 15th General Convention"}</p>
            <h1>{ne ? "संजिव ढकाल" : "Sanjib Dhakal"}</h1>
            <p className="role">{ne ? "कोशी प्रदेश सहमहामन्त्री पदका उम्मेदवार" : "Candidate for Joint General Secretary, Koshi Province"}</p>
            <p className="sub">{ne ? "केन्द्रीय महाधिवेशन प्रतिनिधि, इलाम क्षेत्र १" : "Central Convention Delegate, Ilam Constituency 1"}</p>
            <div className="cta"><a className="btn red" href="#manifesto">{ne ? "घोषणापत्र पढ्नुहोस्" : "Read the manifesto"}</a><a className="btn line" href="#contact">{ne ? "सम्पर्क गर्नुहोस्" : "Get in touch"}</a></div>
          </div>
        </section>
        <Principles />
        <History />
        <MessageCard />

        <section id="about" className="sec two">
          <img src="/images/profile.jpg" alt="Sanjib Dhakal" className="portrait" />
          <div>
            <h2>{ne ? "कुशल संगठनकर्ता, जनताको नेता" : "An organizer who stays close to people"}</h2>
            <p>{ne ? "इलामको प्याङ्गमा विद्यार्थी राजनीतिबाट सुरु गरेका संजिव ढकाल नेपाल विद्यार्थी संघको इकाईदेखि केन्द्रीय सदस्यसम्म पुगेका छन्। नेपाली कांग्रेसको १४औं महाधिवेशनमा इलाम क्षेत्र १ बाट सर्वाधिक मतसहित केन्द्रीय प्रतिनिधि निर्वाचित भए, १५औंमा पनि प्रतिनिधि बनेका छन्। समाजशास्त्र र राजनीतिशास्त्रमा स्नातकोत्तर गरेका उनी हाल नेपाल ल क्याम्पसमा एलएलबी अध्ययनरत छन्।" : "Sanjib Dhakal began in student politics at Pyang, Ilam, and rose in the Nepal Student Union from unit level to the central committee. He was elected central delegate from Ilam 1 with the highest votes at the 14th convention, and again at the 15th. He holds a master's in sociology and political science and is now studying LLB at Nepal Law Campus."}</p>
          </div>
        </section>

        <section id="struggle" className="sec">
          <h2>{ne ? "संघर्षको यात्रा" : "The journey"}</h2>
          <ol className="tl">{timeline.map((x, i) => <li key={i}>{x.year && <small>{t(x.year)}</small>}<h3>{t(x.t)}</h3>{x.d && <p>{t(x.d)}</p>}</li>)}</ol>
        </section>

        <section id="manifesto" className="sec tint">
          <h2>{ne ? "घोषणापत्र" : "Manifesto"}</h2>
          <Stamp />
        </section>

        <section id="gallery" className="sec">
          <h2>{ne ? "तस्बिरमा संघर्ष" : "Struggle in pictures"}</h2>
          <div className="grid">{gallery.map((g) => <figure key={g.src}><img loading="lazy" src={`/images/${g.src}.jpg`} alt={t(g.c)} /><figcaption>{t(g.c)}</figcaption></figure>)}</div>
        </section>

        <section id="videos" className="sec tint">
          <h2>{ne ? "भिडियो" : "Videos"}</h2>
          <div className="story"><video controls playsInline preload="metadata" poster="/media/story.jpg" onPlay={() => window.dispatchEvent(new Event("story-play"))}><source src="/media/story.mp4" type="video/mp4" /></video></div>
          <div className="reels">{reels.map((u, i) => <Reel key={u} url={u} poster={reelPosters[i]} />)}</div>
          <p className="more"><a className="btn fb" href={links.fb} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07Z" /></svg>{ne ? "फेसबुक प्रोफाइलमा थप हेर्नुहोस्" : "See more on his Facebook profile"}<span aria-hidden="true">→</span></a></p>
        </section>

        <section id="blog" className="sec">
          <h2>{ne ? "ब्लग" : "Blog"}</h2>
          <div className="posts">{posts.map((p) => <Link key={p.slug} href={`/blog/${p.slug}`} className="post"><img loading="lazy" src={`/images/${p.img}.jpg`} alt="" /><h3>{t(p.t)}</h3><p>{t(p.b)}</p></Link>)}</div>
        </section>

        <section id="contact" className="sec tint">
          <h2>{ne ? "सम्पर्क" : "Contact"}</h2>
          <div className="cwrap">
          <SuggestForm />
          <div className="contact">
            <a href={`tel:+977${links.phone}`}><small>{ne ? "फोन" : "Phone"}</small>{links.phone}</a>
            <a href={`mailto:${links.mail}`}><small>{ne ? "इमेल" : "Email"}</small>{links.mail}</a>
            <a href={links.fb} target="_blank" rel="noopener noreferrer"><small>Facebook</small>Sanjib Dhakal</a>
            <a href={links.ig} target="_blank" rel="noopener noreferrer"><small>Instagram</small>dhakal.sanjib</a>
            <a href={links.tt} target="_blank" rel="noopener noreferrer"><small>TikTok</small>@sanjibdhk1</a>
          </div>
          </div>
        </section>
      </main>
      <Footer />
      <Music />
    </>
  );
}
