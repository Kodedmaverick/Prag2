import React from "react";
import { ImgPlate, ArrowRight, ArrowUpRight } from "../primitives.jsx";
import { PRACTICE_AREAS, TEAM, STATS, VALUES, INSIGHTS } from "../data.js";

const { useEffect: useEH } = React;

function Home({ go }) {
  useEH(() => { window.scrollTo(0, 0); }, []);

  const challenges = [
    { k: "Starting & structuring", t: "Incorporating, structuring and governing a Nigerian business", p: "Corporate & Commercial" },
    { k: "Transacting", t: "Negotiating, papering and closing commercial agreements", p: "Corporate & Commercial" },
    { k: "Property & wealth", t: "Perfecting title and protecting family and estate interests", p: "Estate Planning & Conveyancing" },
    { k: "Technology & data", t: "Licensing, regulatory and platform obligations for digital business", p: "IT Advisory" },
    { k: "Tax & compliance", t: "Managing tax exposure and resolving disputes with the authorities", p: "Taxation Advisory" },
  ];

  return (
    <main className="page-enter">
      {/* hero */}
      <section className="hero-home">
        <img className="hero-home__bg" src="/assets/prag-hero-editorial.png" alt="Nigerian legal professionals reviewing commercial documents in a Lagos office" />
        <div className="hero-home__scrim" aria-hidden="true"></div>
        <div className="route-lines route-lines--hero" aria-hidden="true">
          <svg viewBox="0 0 780 520" fill="none">
            <path className="route-lines__path" d="M-40 440C120 440 132 312 260 312S360 188 492 188 622 70 820 70" />
            <path className="route-lines__path route-lines__path--soft" d="M-20 482C160 482 170 354 302 354S410 232 540 232 674 118 816 118" />
            <circle cx="260" cy="312" r="5" /><circle cx="492" cy="188" r="5" />
          </svg>
        </div>
        <div className="container hero-home__inner">
          <p className="hero-home__eyebrow">Nigerian commercial law · Est. 2011</p>
          <h1 className="hero-home__title">
            We find a route.<br />
            Or build the <em>bridge</em>.
          </h1>
          <p className="hero-home__lead">
            A Nigerian law firm for business, property, technology and taxation. We give commercially grounded advice to founders, companies and families — and we are measured by the outcome, not the opinion.
          </p>
          <div className="hero-home__cta">
            <a href="#/practices" className="btn btn--on-dark" onClick={(e) => { e.preventDefault(); go("practices"); }}>
              Explore our expertise <ArrowRight />
            </a>
            <a href="#/contact" className="btn btn--ghost-light" onClick={(e) => { e.preventDefault(); go("contact"); }}>
              Speak to a partner
            </a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span>Commercially grounded</span><i></i><span>Legally precise</span><i></i><span>Human by design</span><i></i>
          <span>Commercially grounded</span><i></i><span>Legally precise</span><i></i><span>Human by design</span><i></i>
        </div>
      </div>

      {/* credibility strip */}
      <section className="container" style={{ paddingBlock: "0" }}>
        <div className="stats">
          {STATS.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat__num">{s.num}<em>{s.em}</em></div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* positioning */}
      <section className="section reveal">
        <div className="container">
          <div className="positioning">
            <p className="section-num">Who we are</p>
            <h2 className="display positioning__title">
              Commercially grounded.<br /><em>Legally precise.</em>
            </h2>
            <div className="positioning__body">
              <p>
                Prag pairs technical legal accuracy with a clear read of the business consequences. We attend to the fine print of a transaction and to the larger picture that matters to the people relying on it.
              </p>
              <p>
                For over fifteen years we have advised Nigerian and international clients across four practices — staffing matters tightly, so the partners who pitch the work are the ones who deliver it.
              </p>
              <a href="#/about" className="link-arrow" onClick={(e) => { e.preventDefault(); go("about"); }}>
                More about the firm <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="section editorial-story reveal" aria-labelledby="working-title">
        <div className="container editorial-story__grid">
          <div className="editorial-story__media">
            <img src="/assets/prag-collaboration-editorial.png" alt="Legal advisers and a client working through a commercial agreement" />
            <span className="editorial-story__index">01 / The work</span>
          </div>
          <div className="editorial-story__copy">
            <span className="section-num">Close to the detail</span>
            <h2 id="working-title" className="display">Advice should move a matter <em>forward.</em></h2>
            <p>Our work begins with the commercial outcome, then follows every legal route required to reach it. Clear thinking, senior attention and an honest view of risk come as standard.</p>
            <a href="#/about" className="link-arrow" onClick={(e) => { e.preventDefault(); go("about"); }}>See how we work <ArrowRight /></a>
          </div>
          <div className="editorial-story__line" aria-hidden="true">
            <svg viewBox="0 0 300 220" fill="none"><path d="M8 206C8 128 78 144 78 78s62-64 118-64h96" /><circle cx="78" cy="78" r="4" /></svg>
          </div>
        </div>
      </section>

      {/* expertise — indexed list */}
      <section className="section reveal" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top">
                <span className="section-num">Expertise</span>
              </div>
              <h2 className="display section-head__title">Four practices, one standard.</h2>
            </div>
            <p className="section-head__sub">
              Business, property, technology and taxation — each led by lawyers who chose to specialise.
            </p>
          </div>

          <ul className="xp-index">
            {PRACTICE_AREAS.map((p) => (
              <li className="xp-row" key={p.id} onClick={() => go("practices")} tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") go("practices"); }}>
                <span className="xp-row__num">{p.num}</span>
                <span className="xp-row__name display">{p.title}</span>
                <span className="xp-row__desc">{p.short}</span>
                <span className="xp-row__arrow"><ArrowUpRight size={18} /></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* client challenges */}
      <section className="section challenges reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top">
                <span className="section-num" style={{ color: "rgba(246,243,236,0.65)" }}>Where we help</span>
              </div>
              <h2 className="display section-head__title">Start with the problem.</h2>
            </div>
            <p className="section-head__sub">
              Clients rarely arrive with a practice area in mind — they arrive with a situation. Here is where ours tend to begin.
            </p>
          </div>
          <ul className="challenges__list">
            {challenges.map((c, i) => (
              <li className="challenge" key={i} onClick={() => go("practices")}>
                <span className="challenge__k">{c.k}</span>
                <span className="challenge__t">{c.t}</span>
                <span className="challenge__p">{c.p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* how prag works — manifesto */}
      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top">
                <span className="section-num">How Prag works</span>
              </div>
              <h2 className="display section-head__title">Four words we are held to.</h2>
            </div>
            <p className="section-head__sub">
              Not slogans — the standard by which our partners review their own files each week.
            </p>
          </div>
          <ol className="manifesto">
            {VALUES.map((v) => (
              <li className="manifesto__item" key={v.num}>
                <span className="manifesto__word display">{v.title}</span>
                <p className="manifesto__body">{v.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* people */}
      <section className="section section--tight reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top">
                <span className="section-num">People</span>
              </div>
              <h2 className="display section-head__title">The partners you will actually work with.</h2>
            </div>
            <p className="section-head__sub">
              A deliberately senior bench. The people below lead the matters we take on.
            </p>
          </div>
          <div className="people-row">
            {TEAM.slice(0, 3).map((t) => (
              <button className="person" key={t.id} onClick={() => go("team")}>
                <span className="person__photo">
                  <ImgPlate caption={`${t.name.split(" ")[0]} · portrait`} />
                </span>
                <span className="person__name">{t.name}</span>
                <span className="person__role">{t.role}</span>
                <span className="person__practices">
                  {t.practice.map((id) => (PRACTICE_AREAS.find((p) => p.id === id) || {}).title).filter(Boolean).join(" · ")}
                </span>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
            <a href="#/team" className="link-arrow" onClick={(e) => { e.preventDefault(); go("team"); }}>
              Meet the full team <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* insights */}
      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top">
                <span className="section-num">Insights</span>
              </div>
              <h2 className="display section-head__title">Thinking, plainly put.</h2>
            </div>
            <p className="section-head__sub">
              Commentary on the regulatory and commercial questions our clients actually ask.
            </p>
          </div>
          <div className="home-insights">
            {INSIGHTS.slice(0, 3).map((a) => (
              <article className="hi-card" key={a.id} onClick={() => go("insights")}>
                <div className="hi-card__media">
                  <ImgPlate src={a.image} alt={a.title} />
                </div>
                <div className="insight__meta">
                  <span className="insight__cat">{a.category}</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="hi-card__title display">{a.title}</h3>
                <div className="insight__author">By {a.author} · {a.read}</div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
            <a href="#/insights" className="link-arrow" onClick={(e) => { e.preventDefault(); go("insights"); }}>
              View all insights <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* final contact */}
      <section className="section home-contact">
        <div className="container">
          <div className="home-contact__grid">
            <div>
              <h2 className="display home-contact__title">
                Have a matter that needs a <em>pragmatic</em> answer?
              </h2>
              <a href="#/contact" className="btn btn--on-dark" onClick={(e) => { e.preventDefault(); go("contact"); }} style={{ marginTop: 32 }}>
                Speak to a partner <ArrowRight />
              </a>
            </div>
            <div className="home-contact__details">
              <div className="home-contact__row">
                <span>Email</span>
                <a href="mailto:info@pragattorneys.com">info@pragattorneys.com</a>
              </div>
              <div className="home-contact__row">
                <span>Telephone</span>
                <a href="tel:+2348028597248">+234 802 859 7248</a>
              </div>
              <div className="home-contact__row">
                <span>Lagos office</span>
                <span>Suites 2A &amp; 2H Lapal House, Igbosere, Lagos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
