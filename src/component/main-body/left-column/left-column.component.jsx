import React from "react";
import "./left-column.styles.scss";
//import LeftFirst from "./left-first/left-first.component";
import LeftSecond from "./left-second/left-second.component";
import LeftThird from "./left-third/left-third.component";

const LeftColumn = ({fullName, jobTitle}) => {


  
    return (
      <div className="left-column">
           <div className="titleComp">
                <h1>{fullName}</h1>
                <h4>{jobTitle}</h4>
            </div>
        <LeftSecond />
        <LeftThird />
        <div className="skill">
          <span className="skill-span">Git</span>
          <progress className="skill-bar" max="100" value="80"></progress>
        </div>
        <div className="skill">
            <span className="skill-span">Git</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
          <div className="skill">
            <span className="skill-span">JavaScript</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
          <div className="skill">
            <span className="skill-span">React</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
      </div>
    );
  
}

export default LeftColumn;
