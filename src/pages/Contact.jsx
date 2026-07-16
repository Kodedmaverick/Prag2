import React from "react";
import { ImgPlate, ArrowRight, PageHead } from "../primitives.jsx";

function Contact({ go }) {
  const [form, setForm] = React.useState({
    name: "", email: "", company: "", subject: "general", message: "", consent: false,
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const set = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [k]: v });
    setErrors({ ...errors, [k]: undefined });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please tell us your name";
    if (!form.email.trim()) e.email = "An email address is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "That email doesn't look right";
    if (!form.message.trim() || form.message.trim().length < 20) e.message = "A few sentences (20+ chars), please";
    if (!form.consent) e.consent = "We need your consent to respond";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  return (
    <main className="page-enter">
      <PageHead
        num="05"
        crumb="Contact"
        title={<>Talk to a partner.<br /><em>Directly.</em></>}
        intro
        lead="Tell us what you are working on. We will respond within one business day, with a partner — not a form letter — on the other end."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="section-num" style={{ marginBottom: 24 }}>Send a message</div>
              {submitted ? (
                <div className="success">
                  <div className="success__num">Message received</div>
                  <h3>Thank you, {form.name.split(" ")[0]}.</h3>
                  <p>Your message has reached the partner on intake. You'll hear back from us within one business day at <strong>{form.email}</strong>. For genuinely urgent matters call our Lagos office.</p>
                  <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
                    <button className="btn btn--ghost" style={{ borderColor: "rgba(244,241,234,0.4)", color: "var(--cream)" }} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", subject: "general", message: "", consent: false }); }}>
                      Send another
                    </button>
                    <button className="btn btn--ghost" style={{ borderColor: "rgba(244,241,234,0.4)", color: "var(--cream)" }} onClick={() => go("home")}>
                      Back to home
                    </button>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={onSubmit}>
                  <div className="field-row">
                    <div className={"field" + (errors.name ? " field--error" : "")}>
                      <label>Full name</label>
                      <input type="text" value={form.name} onChange={set("name")} placeholder="Your full name" />
                      {errors.name ? <div className="field__error">{errors.name}</div> : null}
                    </div>
                    <div className={"field" + (errors.email ? " field--error" : "")}>
                      <label>Email</label>
                      <input type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" />
                      {errors.email ? <div className="field__error">{errors.email}</div> : null}
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>Company / Firm</label>
                      <input type="text" value={form.company} onChange={set("company")} placeholder="Optional" />
                    </div>
                    <div className="field">
                      <label>Subject</label>
                      <select value={form.subject} onChange={set("subject")}>
                        <option value="general">General enquiry</option>
                        <option value="corporate">Corporate / M&A</option>
                        <option value="energy">Energy</option>
                        <option value="finance">Banking & Finance</option>
                        <option value="disputes">Dispute Resolution</option>
                        <option value="careers">Careers</option>
                        <option value="press">Press</option>
                      </select>
                    </div>
                  </div>
                  <div className={"field" + (errors.message ? " field--error" : "")}>
                    <label>Message</label>
                    <textarea rows="5" value={form.message} onChange={set("message")} placeholder="Tell us what you are working on. The more specific, the better — but no privileged details, please." />
                    {errors.message ? <div className="field__error">{errors.message}</div> : null}
                  </div>
                  <div className={"field" + (errors.consent ? " field--error" : "")} style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
                    <input type="checkbox" id="consent" checked={form.consent} onChange={set("consent")} style={{ marginTop: 4, width: 16, height: 16 }} />
                    <label htmlFor="consent" style={{ fontFamily: "var(--body-family)", textTransform: "none", letterSpacing: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.5 }}>
                      I consent to Prag Attorneys storing my details and contacting me about this enquiry. We will not share them. Read our <a href="#" style={{ borderBottom: "1px solid var(--rule)" }}>privacy notice</a>.
                    </label>
                  </div>
                  {errors.consent ? <div className="field__error" style={{ marginTop: -10, marginBottom: 16 }}>{errors.consent}</div> : null}
                  <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                    <button type="submit" className="btn btn--primary">
                      Send message <ArrowRight />
                    </button>
                    <button type="button" className="btn btn--ghost" onClick={() => { setForm({ name: "", email: "", company: "", subject: "general", message: "", consent: false }); setErrors({}); }}>
                      Clear
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="contact-info__block">
                <h4>Lagos · Headquarters</h4>
                <p><strong>Suites 2A &amp; 2H Lapal House</strong></p>
                <p>Igbosere, Lagos</p>
                <p style={{ color: "var(--fg-muted)", fontSize: 14, marginTop: 4 }}>+234 802 859 7248 · info@pragattorneys.com</p>
              </div>
              <div className="contact-info__block">
                <h4>Abuja</h4>
                <p><strong>8C Biskra Street</strong></p>
                <p>Abacus Estate, Zone 4, Wuse, Abuja</p>
                <p style={{ color: "var(--fg-muted)", fontSize: 14, marginTop: 4 }}>+234 802 859 7248 · info@pragattorneys.com</p>
              </div>
              <div className="contact-info__block">
                <h4>Oyo</h4>
                <p><strong>The Law Hub</strong></p>
                <p>9, Ring Road, Opposite Iyaganku Roundabout, Ibadan</p>
                <p style={{ color: "var(--fg-muted)", fontSize: 14, marginTop: 4 }}>+234 806 008 9327 · info@pragattorneys.com</p>
              </div>
              <div className="contact-info__block">
                <h4>Ogun</h4>
                <p><strong>KM37 Lagos/Abeokuta Expressway</strong></p>
                <p>Sango, Ogun State</p>
                <p style={{ color: "var(--fg-muted)", fontSize: 14, marginTop: 4 }}>+234 817 470 1694 · info@pragattorneys.com</p>
              </div>
              <div className="contact-info__block" style={{ borderBottom: 0 }}>
                <h4>Hours</h4>
                <p style={{ fontSize: 15 }}>Monday – Friday · 08:30 – 18:00 WAT</p>
                <p style={{ color: "var(--fg-muted)", fontSize: 14, marginTop: 4 }}>For urgent matters out-of-hours, please call the main Lagos line.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map plate */}
      <section className="section section--tight">
        <div className="container">
          <ImgPlate
            src="/assets/photo-lagos.png"
            alt="Lagos skyline"
            style={{ aspectRatio: "21/9", width: "100%" }}
          />
        </div>
      </section>
    </main>
  );
}

export default Contact;
