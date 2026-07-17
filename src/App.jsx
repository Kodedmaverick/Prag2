import React, { useState, useEffect } from "react";
import { Header, Footer } from "./chrome.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Practices from "./pages/Practices.jsx";
import PracticeDetail from "./pages/PracticeDetail.jsx";
import Team from "./pages/Team.jsx";
import MemberProfile from "./pages/MemberProfile.jsx";
import Insights from "./pages/Insights.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const parsePath = () => {
    const h = window.location.hash.replace(/^#\/?/, "");
    const candidate = h || "home";
    const r = candidate.split("/")[0];
    return ["home", "about", "practices", "team", "insights", "careers", "contact"].includes(r) ? candidate : "home";
  };
  const [path, setPath] = useState(parsePath());
  const [route, detailId] = path.split("/");

  const go = (r) => {
    setPath(r);
    history.replaceState(null, "", "#/" + r);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  useEffect(() => {
    const onHash = () => setPath(parsePath());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [path]);

  let Page = Home;
  if (route === "about") Page = About;
  else if (route === "practices") Page = detailId ? PracticeDetail : Practices;
  else if (route === "team") Page = detailId ? MemberProfile : Team;
  else if (route === "insights") Page = Insights;
  else if (route === "careers") Page = Careers;
  else if (route === "contact") Page = Contact;

  return (
    <>
      <Header route={route} go={go} />
      <div id="main-content">
        <Page key={path} go={go} memberId={detailId} practiceId={detailId} />
      </div>
      <Footer go={go} />
    </>
  );
}

export default App;
