import React from "react";
import { ArrowRight, ArrowUpRight } from "../primitives.jsx";
import { PRACTICE_AREAS, TEAM } from "../data.js";

function MemberProfile({ memberId, go }) {
  const memberIndex = TEAM.findIndex((person) => person.id === memberId);
  const member = TEAM[memberIndex];

  React.useEffect(() => { window.scrollTo(0, 0); }, [memberId]);

  if (!member) {
    return (
      <main className="profile-not-found">
        <div className="container">
          <span className="section-num">People</span>
          <h1 className="display">Profile not found.</h1>
          <button className="btn btn--primary" onClick={() => go("team")}>Return to the team <ArrowRight /></button>
        </div>
      </main>
    );
  }

  const practices = member.practice
    .map((id) => PRACTICE_AREAS.find((practice) => practice.id === id))
    .filter(Boolean);
  const initials = member.name.split(" ").map((part) => part[0]).slice(0, 2).join("");
  const next = TEAM[(memberIndex + 1) % TEAM.length];

  return (
    <main className="member-page page-enter">
      <section className="member-hero">
        <div className="container member-hero__grid">
          <div className="member-portrait" aria-label={`Portrait placeholder for ${member.name}`}>
            {member.image ? <img src={member.image} alt={member.name} /> : (
              <div className="member-portrait__monogram" aria-hidden="true">
                <span>{initials}</span>
                <svg viewBox="0 0 520 650" fill="none">
                  <path d="M-60 590C88 590 104 424 218 424s96-178 212-178 108-190 210-190" />
                  <path d="M-30 640C130 640 148 480 266 480s104-172 222-172 116-178 208-178" />
                  <circle cx="218" cy="424" r="7" /><circle cx="430" cy="246" r="7" />
                </svg>
              </div>
            )}
            <span className="member-portrait__note">Official portrait pending</span>
          </div>

          <div className="member-hero__identity">
            <button className="member-back" onClick={() => go("team")}>People / Profile</button>
            <h1 className="display">{member.name}</h1>
            <p>{member.role}</p>
            <div className="member-hero__rule"></div>
            <div className="member-hero__meta">
              <span>{member.location}</span>
              {member.bar ? <span>Called to bar {member.bar}</span> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="member-body">
        <div className="container member-body__grid">
          <aside className="member-aside">
            <div>
              <span className="member-label">Expertise</span>
              {practices.length ? <ul>{practices.map((practice) => <li key={practice.id}>{practice.title}</li>)}</ul> : <p>General legal practice</p>}
            </div>
            {member.linkedin ? (
              <a className="member-linkedin" href={member.linkedin} target="_blank" rel="noreferrer">
                View LinkedIn <ArrowUpRight size={16} />
              </a>
            ) : null}
          </aside>

          <article className="member-copy">
            <p className="member-copy__lead">
              {member.name.split(" ")[0]} is {member.role === "Team Lead" ? "the" : "an"} {member.role} at Prag Attorneys &amp; Consultants{practices.length ? `, working across ${practices.map((practice) => practice.title).join(", ")}.` : "."}
            </p>
            <p>{member.bio}</p>

            {member.cases.length ? (
              <section className="member-detail">
                <h2 className="display">Focus &amp; professional affiliations</h2>
                <ul>{member.cases.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}

            {member.education.length ? (
              <section className="member-detail">
                <h2 className="display">Education</h2>
                <ul>{member.education.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}

            <section className="member-contact-card">
              <span className="section-num">Work with {member.name.split(" ")[0]}</span>
              <h2 className="display">Have a matter that needs a pragmatic answer?</h2>
              <button className="btn btn--on-dark" onClick={() => go("contact")}>Contact the firm <ArrowRight /></button>
            </section>
          </article>
        </div>
      </section>

      <button className="next-member" onClick={() => go(`team/${next.id}`)}>
        <span>Next person</span>
        <strong className="display">{next.name}</strong>
        <ArrowRight size={22} />
      </button>
    </main>
  );
}

export default MemberProfile;
