import React from "react";
import { ImgPlate, ArrowRight, ArrowUpRight, PageHead } from "../primitives.jsx";
import { PRACTICE_AREAS } from "../data.js";

function Practices({ go }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  const [open, setOpen] = React.useState(null);

  return (
    <main className="page-enter">
      <PageHead
        num="02"
        crumb="Practices"
        title={<>Our expertise.<br /><em>Pragmatically applied.</em></>}
        intro
        lead="Our expertise revolves around a wide range of commercial legal services, taxation advisory, information-technology law, and estate planning & conveyancing practice. Each practice below is led by lawyers who have spent careers in it."
      />

      <section className="section">
        <div className="container">
          <div className="practice-list">
            {PRACTICE_AREAS.map((p) => {
              const isOpen = open === p.id;
              return (
                <React.Fragment key={p.id}>
                  <div className="practice-row" onClick={() => setOpen(isOpen ? null : p.id)}>
                    <div className="practice-row__num">{p.num}</div>
                    <div className="practice-row__title display">{p.title}</div>
                    <div className="practice-row__desc">{p.short}</div>
                    <div className="practice-row__arrow">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  {isOpen ? (
                    <div className="fade-in" style={{ padding: "28px 0 40px 0", display: "grid", gridTemplateColumns: "64px 2fr 3fr", gap: "clamp(20px, 3vw, 40px)", borderBottom: "1px solid var(--rule)" }}>
                      <div></div>
                      <div>
                        <div className="section-num" style={{ marginBottom: 14 }}>Approach</div>
                        <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--fg)", maxWidth: "44ch", margin: 0 }}>{p.long}</p>
                        <div style={{ marginTop: 24 }}>
                          <a href="#/contact" className="link-arrow" onClick={(e) => { e.preventDefault(); go("contact"); }}>Speak to the practice lead <ArrowRight /></a>
                        </div>
                      </div>
                      <div>
                        <div className="section-num" style={{ marginBottom: 14 }}>Representative work</div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                          {p.bullets.map((b, i) => (
                            <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", borderBottom: "1px solid var(--rule)", paddingBottom: 12, fontSize: 15 }}>
                              <span style={{ width: 6, height: 6, background: "var(--accent)", marginTop: 8, flexShrink: 0 }}></span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* courtroom image band */}
      <section className="section section--tight">
        <div className="container">
          <ImgPlate
            src="/assets/photo-court.png"
            alt="Prag advocates in a Nigerian superior court"
            style={{ aspectRatio: "21/9", width: "100%" }}
          />
        </div>
      </section>

      {/* sectors band */}
      <section className="section approach">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-head__top"><span className="section-num" style={{ color: "rgba(246,243,236,0.65)" }}>Sectors</span></div>
              <h2 className="display section-head__title">Practices intersect.<br /> Sectors are how clients see us.</h2>
            </div>
            <p className="section-head__sub">A horizontal slice across our four practices — the industries where we have repeat-instruction depth.</p>
          </div>
          <div className="sectors-grid">
            {[
              "Financial services",
              "Energy & power",
              "Technology & fintech",
              "Telecommunications",
              "Real estate & infrastructure",
              "FMCG & manufacturing",
              "Healthcare & life sciences",
              "Hospitality & leisure",
            ].map((s, i) => (
              <div className="sector-cell" key={i}>
                <div className="section-num" style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="sector-cell__title">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Practices;
