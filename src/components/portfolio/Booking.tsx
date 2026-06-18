import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "2px solid #15130f",
  borderRadius: 6,
  padding: "16px 18px",
  fontSize: 14,
  fontFamily: "'Archivo', sans-serif",
  background: "#F4F1EA",
  color: "#15130f",
  outline: "none",
};

export function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setEvent("");
    setMessage("");
    setError("");
    setSent(false);
  };

  const submit = () => {
    if (!name.trim() || !email.trim() || !event.trim()) {
      setError("› please add your name, email, and event details.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("› that email doesn’t look right.");
      return;
    }
    const subject = encodeURIComponent("Booking request — " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\n" + "Email: " + email + "\n" + "Event: " + event + "\n\n" + (message || "")
    );
    window.location.href = "mailto:contact@itskosi.com?subject=" + subject + "&body=" + body;
    setSent(true);
  };

  return (
    <div id="book" style={{ scrollMarginTop: 64 }}>
      <div
        className="kosi-stack"
        style={{ maxWidth: 1240, margin: "0 auto", padding: "80px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 54, alignItems: "center" }}
      >
        <div>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(48px,7vw,72px)", textTransform: "uppercase", lineHeight: 0.9, margin: 0 }}>
            Let's<br />make it<br />
            <span style={{ color: "#FF3B1D" }}>loud.</span>
          </h2>
          <p style={{ fontSize: 16, color: "#3a3833", marginTop: 22, maxWidth: 380, lineHeight: 1.6 }}>
            Weddings, brand activations, club nights, fashion events — tell me what you're planning and I'll get back within 48 hours.
          </p>
          <div style={{ marginTop: 26, fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#56544d", lineHeight: 1.8 }}>
            <div><span style={{ color: "#FF3B1D" }}>↳</span> contact@itskosi.com</div>
            <div><span style={{ color: "#FF3B1D" }}>↳</span> @kosipl · Seattle, WA</div>
          </div>
        </div>

        <div>
          {sent ? (
            <div style={{ border: "2px solid #15130f", borderRadius: 8, padding: "40px 32px", textAlign: "center", background: "#15130f", color: "#F4F1EA" }}>
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 40, textTransform: "uppercase", color: "#FF3B1D", lineHeight: 0.95 }}>
                You're in.
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#c9c5bb", margin: "16px 0 0" }}>
                Your request is ready to send from your mail app. Talk soon — expect a reply within 48 hours.
              </p>
              <div
                onClick={reset}
                className="kosi-btn"
                style={{ display: "inline-block", marginTop: 22, border: "2px solid #F4F1EA", color: "#F4F1EA", padding: "11px 22px", borderRadius: 100, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
              >
                Send another
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 14 }}>
                <input value={name} onChange={(e) => { setName(e.target.value); setError(""); }} placeholder="Your name" style={{ ...inputStyle, flex: 1 }} />
                <input value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} placeholder="Email" style={{ ...inputStyle, flex: 1 }} />
              </div>
              <input value={event} onChange={(e) => { setEvent(e.target.value); setError(""); }} placeholder="Event type & date" style={inputStyle} />
              <textarea
                value={message}
                onChange={(e) => { setMessage(e.target.value); setError(""); }}
                placeholder="Tell me about the event…"
                style={{ ...inputStyle, minHeight: 110, resize: "vertical" }}
              />
              {error && (
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#FF3B1D" }}>{error}</div>
              )}
              <div
                onClick={submit}
                className="kosi-btn"
                style={{ background: "#FF3B1D", color: "#fff", textAlign: "center", padding: 18, borderRadius: 100, fontWeight: 800, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.04em", cursor: "pointer" }}
              >
                Send booking request
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
