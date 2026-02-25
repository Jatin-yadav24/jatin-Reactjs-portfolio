import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Theme setup
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    localStorage.setItem("theme", theme);

    // Scroll Logic
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((scrollY / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const changeColor = (color, hover) => {
    document.documentElement.style.setProperty("--primary", color);
    document.documentElement.style.setProperty("--primary-hover", hover);
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.particles.color.value = color;
      window.pJSDom[0].pJS.particles.line_linked.color = color;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
    setColorPickerOpen(false);
  };

  return (
    <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
      <a
        href="#home"
        className="logo"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <img
          src="/logo.svg"
          alt="Jatin Logo"
          style={{ width: "40px", height: "40px", borderRadius: "8px" }}
        />
        Jatin
      </a>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#journey" onClick={() => setMenuOpen(false)}>
            Journey
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={() => setColorPickerOpen(!colorPickerOpen)}
        >
          <i className="fa-solid fa-palette"></i>
        </button>
        <div className={`color-picker ${colorPickerOpen ? "show" : ""}`}>
          <div
            className="color-dot"
            style={{ background: "#2563eb" }}
            onClick={() => changeColor("#2563eb", "#1d4ed8")}
          ></div>
          <div
            className="color-dot"
            style={{ background: "#10b981" }}
            onClick={() => changeColor("#10b981", "#059669")}
          ></div>
          <div
            className="color-dot"
            style={{ background: "#8b5cf6" }}
            onClick={() => changeColor("#8b5cf6", "#7c3aed")}
          ></div>
          <div
            className="color-dot"
            style={{ background: "#f43f5e" }}
            onClick={() => changeColor("#f43f5e", "#e11d48")}
          ></div>
          <div
            className="color-dot"
            style={{ background: "#f97316" }}
            onClick={() => changeColor("#f97316", "#ea580c")}
          ></div>
        </div>
        <button
          className="nav-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <i
            className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
          ></i>
        </button>
        <button
          className="nav-btn menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
      <div className="scroll-progress-container">
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
