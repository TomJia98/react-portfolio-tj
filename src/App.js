import "./App.css";
import CustomFooter from "./components/footer";
import React, { useState } from "react";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Header from "./components/header";
//importing needed stuff
export default function App() {
  let [section, setSection] = useState("about"); //the hook for what section the user is on

  const changeActive = (e) => {
    switch (
      e.target.dataset.section //get the data attribute of the heading, and changes the hook to match
    ) {
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
    //checks the hook to see which section was selected, changes the content to match
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
    <div id="content">
      <Header changeActive={changeActive} active={section} />

      {renderSection(section)}

      <CustomFooter />
    </div>
  );
}
