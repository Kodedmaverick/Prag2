import React, { useState, useEffect } from "react";
import { Header, Footer } from "./chrome.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Practices from "./pages/Practices.jsx";
import Team from "./pages/Team.jsx";
import Insights from "./pages/Insights.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const parseRoute = () => {
    const h = window.location.hash.replace(/^#\/?/, "");
    const r = (h || "home").split("/")[0];
    return ["home", "about", "practices", "team", "insights", "careers", "contact"].includes(r) ? r : "home";
  };
  const [route, setRoute] = useState(parseRoute());

  const go = (r) => {
    setRoute(r);
    history.replaceState(null, "", "#/" + r);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  useEffect(() => {
    const onHash = () => setRoute(parseRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  let Page = Home;
  if (route === "about") Page = About;
  else if (route === "practices") Page = Practices;
  else if (route === "team") Page = Team;
  else if (route === "insights") Page = Insights;
  else if (route === "careers") Page = Careers;
  else if (route === "contact") Page = Contact;

  return (
    <>
      <Header route={route} go={go} />
      <div id="main-content">
        <Page key={route} go={go} />
      </div>
      <Footer go={go} />
    </>
  );
}

export default App;
