import github from "../assets/GitHub-Mark-64px.png";
import { useState } from "react";

export default function porfolioInsert(props) {
  const [IsShown, SetIsShown] = useState(false);

  const style = {
    github: {
      height: "50px",
      width: "50px",
    },
  };
  //might need to add some more styling to this once the component is working properly,
  //such as hiding the text until hover

  return (
    <div
      onMouseEnter={() => SetIsShown(true)}
      onMouseLeave={() => SetIsShown(false)}
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: "22em 15em",
        backgroundRepeat: "no-repeat",
        height: "15em",
        width: "22em",
        margin: "5em",
        border: "2px solid black",
      }}
    >
      {IsShown && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a
            target="_blank"
            href={props.liveApp}
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "0.2em",
            }}
          >
            <h3>{props.appName}</h3>
          </a>
          <a target="_blank" href={props.github}>
            <img src={github} style={style.github} alt="liveApp"></img>
          </a>
        </div>
      )}
    </div>
  );
}

//call this component with 4 props, background (an image of the app), liveApp (a link to the deployed website) and github, a link to the github page
//and appName
//each one need to have a background picture of the project,
// a github image that links to the respective page,
// and a title that links to the deployed app, all showing when you hover over the slide
