import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    // Initialize Vanilla Tilt for 3D effect on cards
    if (window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll(".skill-card"), {
        max: 15,
        speed: 400,
      });
    }
  }, []);

  const skillsList = [
    { name: "HTML5", icon: "fa-html5" },
    { name: "CSS3", icon: "fa-css3-alt" },
    { name: "JavaScript (ES6+)", icon: "fa-js" },
    { name: "React.js", icon: "fa-react" },
    { name: "Bootstrap", icon: "fa-bootstrap" },
    { name: "Git & GitHub", icon: "fa-git-alt" },
    { name: "Responsive UI", icon: "fa-mobile-screen", isSolid: true },
    { name: "Cross-Browser", icon: "fa-window-restore", isSolid: true },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card glass-card">
            <div className="icon">
              <i
                className={`${skill.isSolid ? "fa-solid" : "fa-brands"} ${skill.icon}`}
              ></i>
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
