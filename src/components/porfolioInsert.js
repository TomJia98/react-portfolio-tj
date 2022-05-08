import github from "../assets/GitHub-Mark-64px.png";

export default function porfolioInsert(props) {
  const style = {
    // background: {
    //   backgroundImage: props.background,
    // },
    github: {
      height: "50px",
      width: "50px",
    },
  };
  //might need to add some more styling to this once the component is working properly,
  //such as hiding the text until hover

  return (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: "22em 15em",
        backgroundRepeat: "no-repeat",
        height: "15em",
        width: "22em",
        margin: "5em",
      }}
    >
      <div>
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
