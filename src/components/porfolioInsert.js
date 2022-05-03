import github from "../assets/GitHub-Mark-64px.png";

export default function porfolioInsert(props) {
  const style = {
    background: {
      backgroundImage: props.backgroundImage,
    },
    github: {
      height: "50px",
      width: "50px",
    },
  };
  //might need to add some more styling to this once the component is working properly,

  return (
    <div style={style.background}>
      <div>
        test
        <a href={props.liveApp}>
          <h3>{props.appName}</h3>
        </a>
        <a href={props.github}>
          <img src={github} style={style.github} alt="liveApp"></img>
        </a>
      </div>
    </div>
  );
}

//call this component with 4 props, background (an image of the app), liveApp (a link to the deployed website) and github, a link to the github page
//and appName
//each one need to have a background picture of the project,
// a github image that links to the respective page,
// and a title that links to the deployed app, all showing when you hover over the slide
