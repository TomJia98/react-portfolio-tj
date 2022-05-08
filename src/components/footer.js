import github from "../assets/GitHub-Mark-32px.png";
import linkedIn from "../assets/LI-In-Bug.png";

const imageSize = {
  height: "4em",
  width: "4em",
  margin: "2em",
};
export default function footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <a href="https://github.com/TomJia98">
        <img
          src={github}
          className="logo"
          alt="github logo"
          style={imageSize}
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/tom-jia-222b50226/">
        <img
          src={linkedIn}
          className="logo"
          alt="linkedIn logo"
          style={imageSize}
        ></img>
      </a>
    </footer>
  );
}
