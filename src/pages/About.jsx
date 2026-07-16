import React from "react";
import { ImgPlate, ArrowRight, PageHead } from "../primitives.jsx";
import { VALUES, TIMELINE } from "../data.js";

function About({ go }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="page-enter">
      <PageHead
        num="01"
        crumb="About / Our firm"
        title={<>The firm,<br /> <em>and what shaped it.</em></>}
        intro
        lead="Prag was founded in 2011 on the idea that legal advice should be a means to an end — the deal, the protection, the resolution — not a monument to itself. Fifteen years on, the bench is deeper, but the discipline is the same."
      />

      {/* origin / split */}
      <section className="section">
        <div className="container">
          <div className="split">
            <ImgPlate
              className="split__media"
              src="/assets/photo-boardroom.png"
              alt="Prag Attorneys boardroom"
            />
            <div className="split__body">
              <div className="section-num" style={{ marginBottom: 16 }}>Origin</div>
              <h3 className="display">A vibrant team, working in the most pragmatic manner.</h3>
              <p>
                Prag is made up of a vibrant team of young, energetic and experienced lawyers, working alongside consultants who have advised, represented, and continue to represent clients in market-leading transactions in Nigeria.
              </p>
              <p>
                We carved a niche for ourselves by consistently providing innovative solutions to legal issues — paying attention to the minute detail in every transaction and developing a thorough understanding of the client's needs.
              </p>
              <p>
                At Prag, pragmatic solutions are paramount at all times.
              </p>
              <div style={{ marginTop: 28 }}>
                <a href="#/team" className="link-arrow" onClick={(e) => { e.preventDefault(); go("team"); }}>Meet the bench <ArrowRight /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top">
                <span className="section-num">Operating principles</span>
              </div>
              <h2 className="display section-head__title">Four habits the firm runs on.</h2>
            </div>
            <p className="section-head__sub">
              We audit ourselves against these every quarter. They are the difference between work that closes and work that drifts.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="values">
            {VALUES.map((v) => (
              <div className="value" key={v.num}>
                <div className="value__num">{v.num}</div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top">
                <span className="section-num">Timeline</span>
              </div>
              <h2 className="display section-head__title">Fifteen years, briefly.</h2>
            </div>
            <p className="section-head__sub">
              From a four-lawyer corporate practice in Victoria Island to a two-office firm with a federal capital presence and a global client roster.
            </p>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className="timeline__row" key={i}>
                <div className="timeline__year display">{t.year}</div>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* memberships */}
      <section className="section section--tight">
        <div className="container">
          <div className="memberships">
            <div className="section-num memberships__label">Memberships & rankings</div>
            <div className="memberships__grid">
              {[
                ["Nigerian Bar Association", "Member"],
                ["Section on Business Law", "Member"],
                ["IBA", "Member"],
                ["Lex Mundi", "Affiliate"],
                ["Legal 500", "Recognised firm"],
                ["Chambers Africa", "Recognised firm"],
              ].map((r, i) => (
                <div className="memberships__cell" key={i}>
                  <div className="memberships__name">{r[0]}</div>
                  <div className="memberships__role">{r[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
