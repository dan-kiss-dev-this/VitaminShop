// CTA.jsx
"use client";
import { useState } from "react";
import "./styles.css";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="cta-container">
      <div className="gradient-border">
        <div className="cta-content">
          <div className="cta-text">
            <h2>
              The best deals on supplements,
              <br />
              straight to your inbox.
            </h2>
            <p>100% free. No spam. Unsubscribe at any time.</p>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="email-input"
                />
                <button type="submit" className="signup-button">
                  SIGN UP
                </button>
              </div>
              {isSubmitted && (
                <div className="success-message">
                  Thanks for signing up! Check your inbox soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
