import React from "react";
import { ImgPlate, ArrowUpRight, PageHead } from "../primitives.jsx";
import { PRACTICE_AREAS } from "../data.js";

function Practices({ go }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
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
            {PRACTICE_AREAS.map((p) => (
                <React.Fragment key={p.id}>
                  <div className="practice-row" onClick={() => go(`practices/${p.id}`)} tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") go(`practices/${p.id}`); }}>
                    <div className="practice-row__num">{p.num}</div>
                    <div className="practice-row__title display">{p.title}</div>
                    <div className="practice-row__desc">{p.short}</div>
                    <div className="practice-row__arrow">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* editorial image band */}
      <section className="section section--tight reveal">
        <div className="container">
          <ImgPlate
            src="/assets/prag-collaboration-editorial.png"
            alt="Nigerian advisers collaborating over a commercial document"
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
