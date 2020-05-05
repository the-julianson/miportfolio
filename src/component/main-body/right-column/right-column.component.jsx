import React from "react";
import "./right-column.styles.scss";
import RigthExperience from "./right-experience/right-experience.component";

const RightColumn = ({ fullName, jobTitle, contactInfo }) => {
    
  return (
    <div className="rigth-column">
      <div className="contactComp">
        <ul>
          {Object.entries(contactInfo).map(item => (
            <li className={``} key={item[0]}><a href={`https://${item[1]}`} target="blank">{`${item[1]}`}</a></li>
          ))}
        </ul>
      </div>
      <div className="titleComp">
        <h1>
          {fullName}
        </h1>
        <h3>
          {jobTitle}
        </h3>
      </div>
      <RigthExperience />
    </div>
  );
};

export default RightColumn;
