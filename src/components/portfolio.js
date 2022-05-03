import PortfolioInsert from "./porfolioInsert";

const projects = [
  {
    appName: "asd",
    backgroundImage: "",
    liveApp: "",
    github: "",
  },
  {
    appName: "ddddd",
    backgroundImage: "",
    liveApp: "",
    github: "",
  },
  {
    appName: "",
    backgroundImage: "",
    liveApp: "",
    github: "",
  },
  {
    appName: "",
    backgroundImage: "",
    liveApp: "",
    github: "",
  },
  {
    appName: "",
    backgroundImage: "",
    liveApp: "",
    github: "",
  },
]; // an array of object for all the projects i want to do
//make the thing below loop through it to add them to the page

function addProjects() {
  console.log(projects.length);
  let arr = [];
  for (let i = 0; i < projects.length; i++) {
    arr.push(<PortfolioInsert {...projects[i]} />);
  }
  return arr;
}
export default function portfolio() {
  return <div>{addProjects()}</div>;
}
