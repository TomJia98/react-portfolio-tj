import "./App.css";
import CustomFooter from "./components/footer";
import React, { useState } from "react";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Header from "./components/header";

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
      <Header changeActive={changeActive} />

      {renderSection(section)}

      <CustomFooter />
    </div>
  );
}
