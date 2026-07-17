import React from "react";
import { ArrowRight, ArrowUpRight } from "../primitives.jsx";
import { PRACTICE_AREAS, TEAM } from "../data.js";

function PracticeDetail({ practiceId, go }) {
  const practiceIndex = PRACTICE_AREAS.findIndex((item) => item.id === practiceId);
  const practice = PRACTICE_AREAS[practiceIndex];

  React.useEffect(() => { window.scrollTo(0, 0); }, [practiceId]);

  if (!practice) {
    return (
      <main className="profile-not-found"><div className="container"><span className="section-num">Expertise</span><h1 className="display">Practice not found.</h1><button className="btn btn--primary" onClick={() => go("practices")}>Return to expertise <ArrowRight /></button></div></main>
    );
  }

  const contacts = TEAM.filter((person) => person.practice.includes(practice.id));
  const next = PRACTICE_AREAS[(practiceIndex + 1) % PRACTICE_AREAS.length];

  return (
    <main className="practice-page page-enter">
      <section className="practice-masthead">
        <div className="container practice-masthead__inner">
          <div>
            <button className="practice-crumb" onClick={() => go("practices")}>Capabilities</button>
            <h1 className="display">{practice.title}</h1>
          </div>
          <div className="practice-pattern" aria-hidden="true">
            <svg viewBox="0 0 720 300" fill="none">
              {[0, 1, 2, 3].map((row) => [0, 1, 2, 3, 4].map((col) => {
                const x = col * 145 + (row % 2) * 72 - 20;
                const y = row * 76 - 6;
                return <path key={`${row}-${col}`} d={`M${x} ${y}h72l36 38-36 38h-72l36-38-36-38Zm72 0 36 38 36-38`} />;
              }))}
            </svg>
          </div>
        </div>
      </section>

      <figure className="practice-image">
        <img src={practice.image} alt={practice.imageAlt} />
        <figcaption><span>{practice.num}</span> Prag Attorneys &amp; Consultants / {practice.title}</figcaption>
      </figure>

      <section className="practice-content">
        <div className="container practice-content__grid">
          <aside className="practice-services">
            <h2 className="display">Our expertise</h2>
            <ul>{practice.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>

          <article className="practice-overview">
            <p className="practice-overview__lead">{practice.short}</p>
            <p>{practice.long}</p>
            <p>We approach every instruction through the client's commercial objective, the applicable regulatory framework and the practical steps required to move the matter forward.</p>

            <section className="practice-contacts">
              <span className="section-num">Key contacts</span>
              <h2 className="display">People in this practice</h2>
              <div className="practice-contacts__grid">
                {(contacts.length ? contacts : TEAM.slice(0, 2)).map((person) => (
                  <button className="practice-contact" key={person.id} onClick={() => go(`team/${person.id}`)}>
                    <div className="practice-contact__portrait" aria-hidden="true">
                      <span>{person.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>
                      <svg viewBox="0 0 180 220" fill="none"><path d="M-10 198C26 198 34 150 68 150s28-52 62-52 34-66 76-66" /></svg>
                    </div>
                    <span className="practice-contact__name display">{person.name}</span>
                    <span className="practice-contact__role">{person.role}</span>
                    <span className="practice-contact__arrow"><ArrowUpRight /></span>
                  </button>
                ))}
              </div>
            </section>

            <section className="practice-enquiry">
              <div><span className="section-num">Start a conversation</span><h2 className="display">Talk to a lawyer who understands the detail.</h2></div>
              <button className="btn btn--on-dark" onClick={() => go("contact")}>Contact the firm <ArrowRight /></button>
            </section>
          </article>
        </div>
      </section>

      <button className="next-member next-practice" onClick={() => go(`practices/${next.id}`)}>
        <span>Next capability</span><strong className="display">{next.title}</strong><ArrowRight size={22} />
      </button>
    </main>
  );
}

export default PracticeDetail;
