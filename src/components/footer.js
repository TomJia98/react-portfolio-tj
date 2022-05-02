import github from "../assets/GitHub-Mark-32px.png";
import linkedIn from "../assets/LI-In-Bug.png";

export default function footer() {
  return (
    <footer>
      <a href="https://github.com/TomJia98">
        <img src={github} className="logo" alt="github logo"></img>
      </a>
      <a href="https://www.linkedin.com/in/tom-jia-222b50226/">
        <img src={linkedIn} className="logo" alt="linkedIn logo"></img>
      </a>
    </footer>
  );
}
