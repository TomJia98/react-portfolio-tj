export default function header(props) {
  return (
    <header>
      <h1>Tom Jia</h1>
      <div id="sectionSelection">
        <button onClick={props.changeActive} data-section="about">
          About Me
        </button>
        <button onClick={props.changeActive} data-section="portfolio">
          Portfolio
        </button>
        <button onClick={props.changeActive} data-section="contact">
          Contact
        </button>
        <button onClick={props.changeActive} data-section="resume">
          Resume
        </button>
      </div>
    </header>
  );
}
