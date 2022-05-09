import github from "../assets/GitHub-Mark-64px.png";
import React, { useState } from "react";
//import whats needed
export default function PorfolioInsert(props) {
  let [IsShown, setIsShown] = useState(false);
  //setting up the hooks (this isnt the correct way to do it, as the hook is in a component)
  const style = {
    github: {
      height: "50px",
      width: "50px",
    },
  };

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
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
      {IsShown && ( //if setIsShown is true, e.g, element is hovered, display links
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
