import "./App.css";
import customFooter from "./components/footer";
import React, { useState } from "react";

function ActiveSection() {
  let [section, setSection] = useState(); //insert the content sections here
}

function handleASection(thing) {}

function App() {
  return (
    <body>
      <header>
        <h1>Tom Jia</h1>
        <div id="sectionSelection">
          <button onClick={handleASection("about")}>About Me</button>
          <button onClick={handleASection("portfolio")}>Portfolio</button>
          <button onClick={handleASection("contact")}>Contact</button>
          <button onClick={handleASection("resume")}>Resume</button>
        </div>
      </header>

      {section}

      <customFooter />
    </body>
  );
}

export default App;
