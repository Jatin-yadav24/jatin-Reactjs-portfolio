import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="wave-container">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              href="#gentle-wave"
              x="48"
              y="0"
              fill="var(--primary)"
              opacity="0.3"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="3"
              fill="var(--primary)"
              opacity="0.5"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="5"
              fill="var(--primary)"
              opacity="0.7"
            />
            <use href="#gentle-wave" x="48" y="7" fill="var(--primary)" />
          </g>
        </svg>
      </div>

      <footer>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jatin-yadav-webdev/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/jatin-yadav24"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:yadavjatin44285@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <p>&copy; 2024 Jatin Yadav. All rights reserved.</p>
      </footer>

      {/* Back to Top Button */}
      <a href="#home" className={`back-to-top ${showTopBtn ? "show" : ""}`}>
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
