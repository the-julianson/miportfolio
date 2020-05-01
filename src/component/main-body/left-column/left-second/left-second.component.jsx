import React from "react";
import "./left-second.styles.scss";



const LeftSecond = ({color, height}) => (
  <div className="left-second">
    <h2>Educacion</h2>
    <h4>Ingenieria Quimica</h4>
    <p>Universidad Tecnologica Nacional</p>
    <hr style={{
            color: color,
            backgroundColor: color,
            height: height
        }}/>
  </div>
);
export default LeftSecond;
