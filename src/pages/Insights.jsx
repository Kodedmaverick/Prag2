import React from "react";
import { ImgPlate, ArrowRight, PageHead } from "../primitives.jsx";
import { INSIGHTS } from "../data.js";

function Insights({ go }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  const [feature, ...rest] = INSIGHTS;

  return (
    <main className="page-enter">
      <PageHead
        crumb="Insights"
        title={<>Insight, <em>plainly put.</em></>}
        intro
        lead="Commentary on the Nigerian regulatory and commercial questions our clients actually ask — written by the lawyers who advise on them, in language a board can use."
      />

      {/* featured */}
      <section className="section">
        <div className="container">
          <article className="insight-feature" onClick={() => go("insights")}>
            <div className="insight-feature__media">
              <ImgPlate src={feature.image} alt={feature.title} />
            </div>
            <div className="insight-feature__body">
              <div className="insight__meta">
                <span className="insight__cat">{feature.category}</span>
                <span>{feature.date}</span>
                <span>·</span>
                <span>{feature.read}</span>
              </div>
              <h2 className="display insight-feature__title">{feature.title}</h2>
              <p className="insight-feature__excerpt">{feature.excerpt}</p>
              <div className="insight__author">By {feature.author}</div>
              <a href="#/insights" className="link-arrow" onClick={(e) => { e.preventDefault(); go("insights"); }}>
                Read the article <ArrowRight />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* list */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top"><span className="section-num">More insights</span></div>
              <h2 className="display section-head__title">Recent writing.</h2>
            </div>
            <p className="section-head__sub">Regulatory shifts, practical checklists and the occasional argued position.</p>
          </div>
          <div className="insight-grid">
            {rest.map((a) => (
              <article className="insight-card" key={a.id} onClick={() => go("insights")}>
                <div className="insight-card__media">
                  <ImgPlate src={a.image} alt={a.title} />
                </div>
                <div className="insight__meta">
                  <span className="insight__cat">{a.category}</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="insight-card__title display">{a.title}</h3>
                <p className="insight-card__excerpt">{a.excerpt}</p>
                <div className="insight__author">By {a.author} · {a.read}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--rule)", paddingTop: 48 }}>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 56px)", margin: 0, lineHeight: 1.02, maxWidth: "20ch" }}>
              Want our reading on a specific question?
            </h2>
            <a href="#/contact" className="btn btn--primary" onClick={(e) => { e.preventDefault(); go("contact"); }} style={{ padding: "18px 28px" }}>
              Ask a partner <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Insights;
