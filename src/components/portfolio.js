import PortfolioInsert from "./porfolioInsert";
import junglrPhoto from "../assets/junglr.png";
import tunesplicePhoto from "../assets/TuneSplice.png";
import portfolioPhoto from "../assets/desktop.png";
import empoyeePhoto from "../assets/employeetracker.png";
import WeatherPhoto from "../assets/weatherScheduler.png";
import quizPhoto from "../assets/quiz.png";

const projects = [
  {
    appName: "Junglr",
    background: junglrPhoto,
    liveApp: "",
    github: "",
  },
  {
    appName: "TuneSplice",
    background: tunesplicePhoto,
    liveApp: "",
    github: "",
  },
  {
    appName: "My Portfolio",
    background: portfolioPhoto,
    liveApp: "",
    github: "",
  },
  {
    appName: "Employee Tracker",
    background: empoyeePhoto,
    liveApp: "",
    github: "",
  },
  {
    appName: "Weather Scheduler",
    background: WeatherPhoto,
    liveApp: "",
    github: "",
  },
  {
    appName: "Code Quiz",
    background: quizPhoto,
    liveApp: "",
    github: "",
  },
]; // an array of object for all the projects
//add the content into this ^^^ object, as well as imported background images

function addProjects() {
  console.log(projects.length);
  let arr = [];
  for (let i = 0; i < projects.length; i++) {
    arr.push(<PortfolioInsert {...projects[i]} />);
  }
  return arr;
}
export default function portfolio() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {addProjects()}
    </div>
  );
}
