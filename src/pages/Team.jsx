import React from "react";
import { ArrowRight, CloseIcon, PageHead } from "../primitives.jsx";
import { PRACTICE_AREAS, TEAM } from "../data.js";

function Team({ go }) {
  const [filter, setFilter] = React.useState("all");
  const [active, setActive] = React.useState(null);
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const filters = [
    ["all", "All"],
    ["lead", "Team Lead"],
    ["partner", "Partner"],
    ["associate", "Associate"],
  ];

  const filtered = TEAM.filter((t) => {
    if (filter === "all") return true;
    if (filter === "lead") return /lead/i.test(t.role);
    if (filter === "partner") return /^partner$/i.test(t.role);
    if (filter === "associate") return /associate/i.test(t.role);
    return true;
  });

  // close on Escape
  React.useEffect(() => {
    if (!active) return;
    const onKey = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <main className="page-enter">
      <PageHead
        num="03"
        crumb="Team / People"
        title={<>The bench.<br /><em>Vibrant. Energetic. Experienced.</em></>}
        intro
        lead="Prag is made up of a vibrant team of young, energetic and experienced lawyers, working alongside notable consultants who have advised, represented, and continue to represent clients in market-leading transactions in Nigeria. Click any name for biography, education, and professional affiliations."
      />

      <section className="section">
        <div className="container">
          <div className="team-controls">
            <div className="team-filters">
              {filters.map(([k, l]) => (
                <button key={k} className={"chip" + (filter === k ? " is-active" : "")} onClick={() => setFilter(k)}>
                  {l}
                </button>
              ))}
            </div>
            <div style={{ fontFamily: "var(--mono-family)", fontSize: 12, color: "var(--fg-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {filtered.length} {filtered.length === 1 ? "lawyer" : "lawyers"}
            </div>
          </div>

          <div className="team-grid">
            {filtered.map((t) => (
              <button key={t.id} className="team-card" onClick={() => setActive(t)}>
                <div className="team-card__photo">
                  <div className="portrait-mark" aria-hidden="true">
                    <span>{t.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>
                    <svg viewBox="0 0 180 220" fill="none"><path d="M-10 198C26 198 34 150 68 150s28-52 62-52 34-66 76-66" /><circle cx="68" cy="150" r="3" /><circle cx="130" cy="98" r="3" /></svg>
                  </div>
                </div>
                <h3 className="team-card__name">{t.name}</h3>
                <div className="team-card__role">{t.role} · {t.location}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* slide-over */}
      <div className={"scrim" + (active ? " is-open" : "")} onClick={() => setActive(null)}></div>
      <aside className={"slideover" + (active ? " is-open" : "")} aria-hidden={!active}>
        {active ? (
          <>
            <div className="slideover__head">
              <span className="section-num">Profile</span>
              <button className="slideover__close" onClick={() => setActive(null)} aria-label="Close">
                <CloseIcon />
              </button>
            </div>
            <div className="slideover__hero">
              <div className="portrait-mark portrait-mark--profile" aria-hidden="true">
                <span>{active.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>
                <svg viewBox="0 0 180 220" fill="none"><path d="M-10 198C26 198 34 150 68 150s28-52 62-52 34-66 76-66" /><circle cx="68" cy="150" r="3" /><circle cx="130" cy="98" r="3" /></svg>
              </div>
              <div>
                <div className="section-num" style={{ marginBottom: 12 }}>{active.role}</div>
                <h2 className="slideover__name display">{active.name}</h2>
                <div className="slideover__role">{active.location}{active.bar ? ` · Called to bar ${active.bar}` : ""}</div>
                <div className="slideover__meta">
                  {active.practice.length ? <div className="slideover__meta-row"><span>Practice</span><span>{active.practice.map((id) => PRACTICE_AREAS.find((p) => p.id === id)?.title).filter(Boolean).join(" · ")}</span></div> : null}
                  {active.bar ? <div className="slideover__meta-row"><span>Bar</span><span>Nigerian Bar Association · {active.bar}</span></div> : null}
                </div>
              </div>
            </div>
            <div className="slideover__body">
              <div>
                <h4>Biography</h4>
                <p>{active.bio}</p>
              </div>
              {active.education.length ? <div>
                <h4>Education</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {active.education.map((e, i) => (
                    <li key={i} style={{ fontSize: 14, paddingBottom: 8, borderBottom: "1px solid var(--rule)" }}>{e}</li>
                  ))}
                </ul>
              </div> : null}
              {active.cases.length ? <div>
                <h4>Affiliations &amp; memberships</h4>
                <div className="slideover__cases">
                  {active.cases.map((c, i) => (
                    <div className="slideover__case" key={i}>
                      <span className="slideover__case-bullet"></span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div> : null}
              <div style={{ display: "flex", gap: 12, paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
                <a href="#/contact" className="btn btn--primary" onClick={(e) => { e.preventDefault(); setActive(null); go("contact"); }}>
                  Engage {active.name.split(" ")[0]} <ArrowRight />
                </a>
                {active.linkedin ? <a href={active.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">LinkedIn profile</a> : null}
              </div>
            </div>
          </>
        ) : null}
      </aside>
    </main>
  );
}

export default Team;
