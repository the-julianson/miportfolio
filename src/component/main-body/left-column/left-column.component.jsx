import React from "react";
import "./left-column.styles.scss";
//import LeftFirst from "./left-first/left-first.component"

const LeftColumn = ({ experience, languages, skills }) => {
  return (
    <div className="left-column">
      <h2>Skills</h2>
      <div className="skill-main">
        {skills.map(skill => {
          return (
            <div className="skill">
              <div className="skill-div">{skill.title}</div>
              <div className="skill-progress">{skill.level}</div>
            </div>
          );
        })}
      </div>
      <div className="left-third">
        <h2>Idiomas</h2>
        <ul>
          {languages.map(exp => {
            return <li key={exp.id}>{exp.title}</li>;
          })}
        </ul>
      </div>
      <div className="left-third">
        <h2>Experiencia</h2>
        <ul>
          {experience.map(exp => {
            return <li key={exp.id}>{exp.title}</li>;
          })}
        </ul>
      </div>
      <div className="left-last">
        <h2>Educacion</h2>
        <h4>Ingenieria Quimica</h4>
        <p>Universidad Tecnologica Nacional</p>
      </div>

    </div>
  );
};

export default LeftColumn;
