import React from "react";
import "./title.styles.scss";

const TitleComponent = ({fullName, jobTitle}) => {
  
  return (
    <div className="titleComp">
      <h1>{fullName}</h1>
      <h4>{jobTitle}</h4>
    </div>
  );
};

export default TitleComponent;

