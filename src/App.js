import "./App.css";
import CustomFooter from "./components/footer";
import React, { useState } from "react";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

export default function App() {
  let [section, setSection] = useState("about");

  const changeActive = (e) => {
    switch (e.target.dataset.section) {
      case "about":
        setSection("about");
        break;
      case "portfolio":
        setSection("portfolio");
        break;
      case "contact":
        setSection("contact");
        break;
      case "resume":
        setSection("resume");
        break;
    }
    console.log(e.target.dataset.section);
  };

  const renderSection = (section) => {
    switch (section) {
      case "about":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
    }
  };

  return (
    <div>
      <div>
        <h1>Tom Jia</h1>
        <div id="sectionSelection">
          <button onClick={changeActive} data-section="about">
            About Me
          </button>
          <button onClick={changeActive} data-section="portfolio">
            Portfolio
          </button>
          <button onClick={changeActive} data-section="contact">
            Contact
          </button>
          <button onClick={changeActive} data-section="resume">
            Resume
          </button>
        </div>
      </div>

      {renderSection(section)}

      <CustomFooter />
    </div>
  );
}
