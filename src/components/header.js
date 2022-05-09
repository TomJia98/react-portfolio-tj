export default function header(props) {
  function isSelected(section) {
    //checks to see which section is active, and changes the style of the headers to match
    if (section === props.active) {
      return buttonStyleSelected;
    } else {
      return buttonStyleNotSelected;
    }
  }

  const buttonStyleSelected = {
    color: "white",
    margin: "2em",
    fontSize: "2em",
    cursor: "pointer",
  };
  const buttonStyleNotSelected = {
    margin: "2em",
    fontSize: "2em",
    cursor: "pointer",
  };
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "baseline",
        borderBottom: "1px solid black",
      }}
    >
      <h1 style={{ flexGrow: "0", fontSize: "3em" }}>Tom Jia</h1>
      <div id="sectionSelection">
        <a
          onClick={props.changeActive}
          style={isSelected("about")}
          data-section="about"
        >
          About Me
        </a>
        <a
          onClick={props.changeActive}
          style={isSelected("portfolio")}
          data-section="portfolio"
        >
          Portfolio
        </a>
        <a
          onClick={props.changeActive}
          style={isSelected("contact")}
          data-section="contact"
        >
          Contact
        </a>
        <a
          onClick={props.changeActive}
          style={isSelected("resume")}
          data-section="resume"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
