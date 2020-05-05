import React, { useState } from "react";
import "./right-column.styles.scss";

import RigthExperience from "./right-experience/right-experience.component";

const RightColumn = ({ fullName, jobTitle }) => {
    const [properties] = useState({
        envelope: "jbazanaguirre@gmail.com",
        github: "github.com/the-julianson",
        linkedin: "linkedin.com/in/julianbazanaguirre"
    })


  return (
    <div className="rigth-column">
      <div className="contactComp">
        <ul>
          {Object.entries(properties).map(item => (
            <li className={``} key={item[0]}>{`${item[1]}`}</li>
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
