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
    liveApp: "https://project-2-dw.herokuapp.com/",
    github: "https://github.com/TomJia98/Project-2",
  },
  {
    appName: "TuneSplice",
    background: tunesplicePhoto,
    liveApp: "https://tomjia98.github.io/Project_Wunners/",
    github: "https://github.com/TomJia98/Project_Wunners",
  },
  {
    appName: "My Portfolio",
    background: portfolioPhoto,
    liveApp: "https://tomjia98.github.io/Portfolio_TJ/",
    github: "https://github.com/TomJia98/Portfolio_TJ",
  },
  {
    appName: "Employee Tracker",
    background: empoyeePhoto,
    liveApp:
      "https://drive.google.com/file/d/1Awc_5PFn5LFnEkY5mu4kU-hMt-W6VNsC/view?usp=sharing",
    github: "https://github.com/TomJia98/employee-tracker",
  },
  {
    appName: "Weather Scheduler",
    background: WeatherPhoto,
    liveApp: "https://tomjia98.github.io/weather_scheduler_TJ/",
    github: "https://github.com/TomJia98/weather_scheduler_TJ",
  },
  {
    appName: "Code Quiz",
    background: quizPhoto,
    liveApp: "https://tomjia98.github.io/code_quiz_TJ/",
    github: "https://github.com/TomJia98/code_quiz_TJ",
  },
]; // all the projects, dynamically adds them if more are added
function addProjects() {
  let arr = [];
  for (let i = 0; i < projects.length; i++) {
    arr.push(<PortfolioInsert {...projects[i]} />);
  }
  return arr;
} //loops through the portfolio array and adds an insert into the html for each
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
