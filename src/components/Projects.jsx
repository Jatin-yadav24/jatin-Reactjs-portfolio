import React, { useState, useEffect } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 5,
        speed: 400,
      });
    }
  }, []);

  const projectsData = [
    {
      id: 1,
      category: "web",
      title: "Image Gallery Web App",
      icon: "fa-image",
      isRegular: true,
      desc: "A responsive image gallery application featuring dynamic image filtering and a full-screen preview mode.",
      link: "https://jatin-yadav24.github.io/codealpha_tasks1/",
      bg: "linear-gradient(135deg, #1e293b, var(--primary))",
    },
    {
      id: 2,
      category: "web",
      title: "Calculator Web App",
      icon: "fa-calculator",
      desc: "A real-time arithmetic calculator built using JavaScript for fast and accurate browser-based calculations.",
      link: "https://jatin-yadav24.github.io/codealpha_tasks2/",
      bg: "linear-gradient(135deg, #ff9a9e, #fecfef)",
    },
    {
      id: 3,
      category: "web",
      title: "Personal Portfolio Website",
      icon: "fa-laptop-code",
      desc: "A project showcase website highlighting my frontend skills, experience, and projects.",
      link: "https://jatin-yadav24.github.io/jatin_portfolio/",
      bg: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    },
  ];

  return (
    <section id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="filter-btns">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Projects
        </button>
        <button
          className={`filter-btn ${filter === "web" ? "active" : ""}`}
          onClick={() => setFilter("web")}
        >
          Web Apps
        </button>
      </div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card glass-card"
            style={{
              display:
                filter === "all" || filter === project.category
                  ? "flex"
                  : "none",
            }}
          >
            <div className="project-img" style={{ background: project.bg }}>
              <i
                className={`${project.isRegular ? "fa-regular" : "fa-solid"} ${project.icon}`}
              ></i>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Live <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
