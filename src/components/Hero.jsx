import React, { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const textArray = ["Front-End Developer", "React Developer", "UI Enthusiast"];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const currentWord = textArray[textIndex];
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          timer = setTimeout(type, 2000);
          return;
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length;
        }
      }
      timer = setTimeout(type, isDeleting ? 50 : 100);
    };

    timer = setTimeout(type, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Jatin Yadav</span>
        </h1>
        <p id="typing-text">
          {text}
          <span
            style={{
              borderRight: "2px solid var(--primary)",
              animation: "blink 0.7s infinite",
            }}
          >
            &nbsp;
          </span>
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
