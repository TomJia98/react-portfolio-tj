import "./App.css";
import CustomFooter from "./components/footer";
import React, { useState } from "react";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

export default function App() {
  let [section, setSection] = useState("about");

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
      <header>
        <h1>Tom Jia</h1>
        <div id="sectionSelection">
          <button onClick={setSection("about")}>About Me</button>
          <button onClick={setSection("portfolio")}>Portfolio</button>
          <button onClick={setSection("contact")}>Contact</button>
          <button onClick={setSection("resume")}>Resume</button>
        </div>
      </header>

      {renderSection(section)}

      <CustomFooter />
    </div>
  );
}
