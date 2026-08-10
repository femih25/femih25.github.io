import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="contact-section" id="CONTACT">
      <div className="contact-inner">
        <h2 className="contact-heading">Let's keep in touch!</h2>

        <div className="contact-chips">
          <a
            href="mailto:femihorrall2027@u.northwestern.edu"
            className="contact-chip contact-chip--outline"
          >
            <svg viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/femi-horrall-1103342aa/"
            target="_blank"
            rel="noreferrer"
            className="contact-chip contact-chip--outline"
          >
            <svg viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <line x1="7" y1="10" x2="7" y2="17" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
              <path d="M11 10v7M11 13a3 3 0 0 1 6 0v4" />
            </svg>
            LinkedIn
          </a>

          <a
            href="photos/Femi Horrall Resume (2026) .pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-chip contact-chip--outline"
          >
            <svg viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="12" y1="11" x2="12" y2="17" />
              <polyline points="9,14 12,17 15,14" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}