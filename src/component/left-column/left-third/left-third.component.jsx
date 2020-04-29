import React from "react";
import "./left-third.styles.scss";

const LeftThird = ({color}) => (
  <div className="left-third">
    <h2>Expertise</h2>
    <ul>
      <li>Skills</li>
      <li>Skills</li>
      <li>Skills</li>
      <li>Skills</li>
      <li>Skills</li>
    </ul>
    <hr style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}/>
  </div>
);
export default LeftThird;
