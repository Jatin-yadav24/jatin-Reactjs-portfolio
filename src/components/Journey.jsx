import React from "react";

const Journey = () => {
  return (
    <section id="journey">
      <h2 className="section-title">
        My <span>Journey</span>
      </h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-content glass-card">
            <div className="timeline-date">
              <i className="fa-solid fa-briefcase"></i> Nov 2025 - Dec 2025
            </div>
            <h3>Front-End Developer Intern</h3>
            <h4>CodeAlpha</h4>
            <p>
              Developed responsive and interactive web pages using HTML, CSS,
              and JavaScript. Implemented UI features including filters,
              animations, hover effects, and full-screen previews.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content glass-card">
            <div className="timeline-date">
              <i className="fa-solid fa-graduation-cap"></i> 2021 - 2024
            </div>
            <h3>B.Sc. Computer Science</h3>
            <h4>SVPC College, Mandleshwar (DAVV University)</h4>
            <p>
              Completed degree with a CGPA of 7.28/10. Established a strong
              technical foundation in computer science principles and software
              development.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content glass-card">
            <div className="timeline-date">
              <i className="fa-solid fa-school"></i> 2020 - 2021
            </div>
            <h3>Higher Secondary (Class XII)</h3>
            <h4>Govt. Higher Secondary School Bamandi</h4>
            <p>Completed higher secondary education scoring 75.4%.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
