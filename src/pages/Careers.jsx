import React from "react";
import { ImgPlate, ArrowRight, PageHead } from "../primitives.jsx";
import { ROLES } from "../data.js";

function Careers({ go }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="page-enter">
      <PageHead
        num="04"
        crumb="Careers"
        title={<>Build a career,<br /><em>not just a CV.</em></>}
        intro
        lead="Prag is where Nigerian lawyers come to do their best work. Senior on every matter means real responsibility, early — and structured mentorship from partners who remember being in your seat."
      />

      <section className="section">
        <div className="container">
          <div className="careers-band">
            <div>
              <div className="section-num" style={{ marginBottom: 16 }}>What it's like here</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.02em", margin: 0, lineHeight: 1.05, maxWidth: "20ch" }}>
                A small firm with the bench of a much larger one — and the conviction that the work should always come first.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.6, maxWidth: "52ch" }}>
              <p style={{ margin: 0 }}>We hire for craft and judgement. We staff matters tightly so juniors get real instructions, not just bibles. We invest in development — secondments, LL.M sponsorship, and an unusually candid feedback loop.</p>
              <p style={{ margin: 0 }}>And we pay attention to what makes a long career sustainable: predictable weekends where we can offer them, a flat partnership track, and the quiet refusal of work that doesn't fit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top"><span className="section-num">Open positions</span></div>
              <h2 className="display section-head__title">We are hiring.</h2>
            </div>
            <p className="section-head__sub">Six roles across both offices. Don't see your fit? We always read speculative applications from lawyers we'd like to know.</p>
          </div>

          <div className="role-list">
            {ROLES.map((r) => (
              <div className="role" key={r.id}>
                <div className="role__title display">{r.title}</div>
                <div className="role__meta">{r.team}</div>
                <div className="role__loc">{r.type} · {r.location}</div>
                <a href="#/contact" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); go("contact"); }}>
                  Apply <ArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top"><span className="section-num">What we offer</span></div>
              <h2 className="display section-head__title">Less perks, more conditions for great work.</h2>
            </div>
            <p className="section-head__sub">No ping-pong tables. The things that actually matter.</p>
          </div>
        </div>
        <div className="container">
          <div className="perks">
            {[
              ["01", "Senior on every matter", "Trainees and associates are staffed alongside partners — not buried under five layers of seniority."],
              ["02", "Structured mentorship", "Every lawyer has a partner mentor and a quarterly written review. Honest, specific, useful."],
              ["03", "LL.M sponsorship", "Two fully-funded LL.M scholarships per year for high-performing associates with three+ years' tenure."],
              ["04", "Secondments", "In-house secondments with anchor clients across financial services, energy and tech — paid by the firm."],
              ["05", "Flat track to partnership", "No counsel limbo. Clear, transparent partnership criteria published internally each January."],
              ["06", "Real time off", "Twenty-five days, taken. The partner who covers your file is the partner who insists you go."],
            ].map((p) => (
              <div className="perk" key={p[0]}>
                <div className="perk__num">{p[0]}</div>
                <h4>{p[1]}</h4>
                <p>{p[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* culture image band */}
      <section className="section section--tight">
        <div className="container">
          <ImgPlate
            src="/assets/photo-court.png"
            alt="Prag lawyers in court, Lagos"
            style={{ aspectRatio: "21/9", width: "100%" }}
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--rule)", paddingTop: 48 }}>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: 0, letterSpacing: "-0.02em", lineHeight: 1, maxWidth: "20ch" }}>
              Don't see the right role? Tell us about yourself anyway.
            </h2>
            <a href="#/contact" className="btn btn--primary" onClick={(e) => { e.preventDefault(); go("contact"); }} style={{ padding: "18px 28px" }}>
              Speculative application <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;
