import React, { useState, useEffect } from "react";
import { ArrowRight } from "./primitives.jsx";

function Header({ route, go, brandTag }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const items = [
    ["home", "Home"],
    ["about", "About"],
    ["practices", "Practices"],
    ["team", "Team"],
    ["insights", "Insights"],
    ["careers", "Careers"],
  ];

  const navTo = (id) => {
    setMenuOpen(false);
    go(id);
  };

  return (
    <header className={"header" + (scrolled ? " is-scrolled" : "") + (menuOpen ? " is-menu-open" : "")}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="container header__inner">
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); navTo("home"); }} aria-label="Prag Attorneys & Consultants — Home">
          <img className="brand__img" src="/assets/prag-logo.png" alt="Prag Attorneys & Consultants" />
        </a>
        <nav className="nav nav--desktop" aria-label="Primary">
          {items.map(([id, label]) => (
            <a
              key={id}
              href={"#/" + id}
              className={"nav__item" + (route === id ? " is-active" : "")}
              onClick={(e) => { e.preventDefault(); navTo(id); }}
            >
              {label}
            </a>
          ))}
          <a
            href="#/contact"
            className="btn btn--primary nav__cta"
            onClick={(e) => { e.preventDefault(); navTo("contact"); }}
          >
            Contact <ArrowRight />
          </a>
        </nav>
        <button
          className={"nav__burger" + (menuOpen ? " is-open" : "")}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={"nav__panel" + (menuOpen ? " is-open" : "")} aria-hidden={!menuOpen}>
        <nav className="nav__panel-inner" aria-label="Mobile">
          {items.map(([id, label]) => (
            <a
              key={id}
              href={"#/" + id}
              className={"nav__panel-item" + (route === id ? " is-active" : "")}
              onClick={(e) => { e.preventDefault(); navTo(id); }}
            >
              {label}
            </a>
          ))}
          <a
            href="#/contact"
            className={"nav__panel-item nav__panel-item--cta" + (route === "contact" ? " is-active" : "")}
            onClick={(e) => { e.preventDefault(); navTo("contact"); }}
          >
            Contact <ArrowRight />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <img src="/assets/prag-logo.png" alt="Prag Attorneys & Consultants" style={{ height: 72, width: "auto", filter: "invert(1) hue-rotate(180deg) brightness(1.15)", marginBottom: 20 }} />
            <p className="footer__tag">A pragmatic Nigerian law firm — finding the route, or building the bridge, to commercial outcomes that actually close.</p>
          </div>
          <div>
            <h4>Sitemap</h4>
            <ul>
              <li><a href="#/home" onClick={(e) => { e.preventDefault(); go("home"); }}>Home</a></li>
              <li><a href="#/about" onClick={(e) => { e.preventDefault(); go("about"); }}>About</a></li>
              <li><a href="#/practices" onClick={(e) => { e.preventDefault(); go("practices"); }}>Practices</a></li>
              <li><a href="#/team" onClick={(e) => { e.preventDefault(); go("team"); }}>Team</a></li>
              <li><a href="#/insights" onClick={(e) => { e.preventDefault(); go("insights"); }}>Insights</a></li>
              <li><a href="#/careers" onClick={(e) => { e.preventDefault(); go("careers"); }}>Careers</a></li>
              <li><a href="#/contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Lagos</h4>
            <ul>
              <li>Suites 2A &amp; 2H Lapal House,</li>
              <li>Igbosere, Lagos</li>
              <li><a href="tel:+2348028597248">+234 802 859 7248</a></li>
              <li><a href="mailto:info@pragattorneys.com">info@pragattorneys.com</a></li>
            </ul>
          </div>
          <div>
            <h4>Offices</h4>
            <ul>
              <li>Abuja — Wuse, Zone 4</li>
              <li>Oyo — The Law Hub, Ibadan</li>
              <li>Ogun — Sango (Lagos/Abeokuta Exp.)</li>
              <li><a href="mailto:info@pragattorneys.com">info@pragattorneys.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2011–2026 Prag Attorneys. All rights reserved.</span>
          <span>Lagos · Abuja · Oyo · Ogun</span>
          <span>info@pragattorneys.com</span>
        </div>
      </div>
    </footer>
  );
}

function Ticker() {
  const items = ["Pragmatic", "Precise", "Principled", "Present"];
  const star = <span className="ticker__star" aria-hidden="true"></span>;
  const seq = (
    <span>
      {items.map((w, i) => (
        <React.Fragment key={i}>
          <em>{w}</em>{star}
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {seq}{seq}{seq}
      </div>
    </div>
  );
}

export { Header, Footer, Ticker };
