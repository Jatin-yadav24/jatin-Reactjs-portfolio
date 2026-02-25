import React, { useEffect } from "react";

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>
      <div className="about-content">
        <div className="blob-container">
          <div
            className="about-blob"
            style={{ backgroundImage: "url('/jatin.jpg')" }}
          ></div>
        </div>
        <div className="about-text glass-card" style={{ padding: "2.5rem" }}>
          <h3>Front-End Developer</h3>
          <p>
            I am a Front-End Developer with hands-on experience in building
            responsive and user-friendly web applications.
          </p>
          <p>
            Skilled in HTML5, CSS3, JavaScript (ES6+), Bootstrap, and React.js.
            I am comfortable with creating reusable components, improving
            performance, and ensuring cross-browser compatibility. My main focus
            is always on delivering a clean UI and a smooth user experience.
          </p>
          <a href="mailto:yadavjatin44285@gmail.com" className="btn">
            Email Me{" "}
            <i
              className="fa-solid fa-envelope"
              style={{ marginLeft: "5px" }}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
