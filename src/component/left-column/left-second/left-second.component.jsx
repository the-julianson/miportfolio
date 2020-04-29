import React from "react";
import "./left-second.styles.scss";

const LeftSecond = ({color}) => (
  <div className="left-second">
    <h2>Education</h2>
    <h4>1st Degree</h4>
    <p>University of People</p>
    <h4>2nd Degree</h4>
    <p>University of Money</p>
    <hr style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}/>
  </div>
);
export default LeftSecond;
