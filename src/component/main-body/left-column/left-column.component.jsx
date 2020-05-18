import React from "react";
import "./left-column.styles.scss";
//import LeftFirst from "./left-first/left-first.component"

const LeftColumn = ({ courses, languages, skills }) => {
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
        <h2>Courses</h2>
        
          {courses.map(course => {
            return (
              <ul key={course.id}>
            <li >{course.title} *</li>
            
            </ul>
            );
          })}
        
      </div>
      <div className="left-third">
        <h2>Languages</h2>
        <ul>
          {languages.map(exp => {
            return <li key={exp.id}>{exp.title}</li>;
          })}
        </ul>
      </div>
      
      <div className="left-last">
        <h2>Education</h2>
        <h4>Zero to Mastery Academy</h4>
        <p style={{fontSize: `13px`}}>Complete React Developer and Advanced JavaScript</p>
        <h4>Chemical Engineering</h4>
        <p>Universidad Tecnológica Nacional - avg grade: 8.2</p>
      </div>

    </div>
  );
};

export default LeftColumn;
