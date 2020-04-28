import React, { useState } from "react";
import "./title.styles.scss";

const TitleComponent = () => {
  const [{fullName, jobTitle}] = useState({fullName : "Julian", jobTitle: "React Web Developer"});
  return (
    <div className="titleComp">
      <h1>{fullName}</h1>
      <h4>{jobTitle}</h4>
    </div>
  );
};

export default TitleComponent;
