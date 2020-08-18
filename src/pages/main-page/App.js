import React, { useState } from "react";
import "./App.css";

import LeftColumn from "../../component/main-body/left-column/left-column.component";
import RightColumn from "../../component/main-body/right-column/right-column.component";
// import Footer from '../../component/footer/footer.component';

function App() {
  const [{ fullName, jobTitle }] = useState({
    fullName: "Julián Bazán Aguirre",
    jobTitle: "Fullstack Developer"
  });
  const [courses] = useState([
    {
      title: "Complete React Developer in 2020",
      platform: "Zero to Mastery Academy",
      author: "Andrew Neagoie",
      completion: "40%",
      id: 3
    },
    {
      title: "Advanced JavaScript Concepts",
      platform: "Zero to Mastery Academy",
      author: "Andrew Neagoie",
      completion: "10%",
      id: 3
    },
    {
      title: "Building Applications with React and Flux",
      platform: "Pluralsight",
      author: "Cory House",
      completion: "100%",
      id: 3
    },
    {
      title: "Prototyping your UX Design in React",
      platform: "Pluralsight",
      author: "Lisa Walkosz-Migliacio",
      completion: "100%",
      id: 2
    },
    {
      title: "A practical start with react",
      platform: "Pluralsight",
      author: "Lisa Walkosz-Migliacio",
      completion: "100%",
      id: 1
    },
    {
      title: "JS Algorithms and DatStruct Certification",
      platform: "freeCodeCamp",
      author: "",
      completion: "75%",
      id: 1
    },

    {
      title: "The Python Mega Course",
      platform: "Udemy",
      author: "Ardit Sulce",
      completion: "93%",
      id: 4
    },
    {
      title: "Complete Python Bootcamp",
      platform: "Udemy",
      author: "Jose Portilla",
      completion: "73%",
      id: 5
    }
  ]);
  const [languages] = useState([
    { title: "Spanish -- Native", id: 1 },
    { title: "English -- Fluent C1/C2", id: 2 },
    { title: "German -- Intermediate B2", id: 3 },
    { title: "Chinese -- Intermediate B1", id: 4 }
  ]);
  const [skills] = useState([
    { title: "Django", level: "Proficient", id: 7 },
    { title: "Django-REST", level: "Proficient", id: 8 },
    { title: "Python", level: "Proficient", id: 9 },
    { title: "REST-API", level: "Training", id: 10 },
    { title: "JavaScript", level: "Proficient", id: 1 },
    { title: "HTML & CSS", level: "Proficient", id: 2 },
    { title: "React.js", level: "Proficient", id: 3 },
    { title: "React Hooks&Context", level: "Proficient", id: 4 },
    { title: "Git - GitHub - Git CLI", level: "Proficient", id: 6 }
  ]);
  const [contactInfo] = useState({
    envelope: "jbazanaguirre@gmail.com",
    github: "github.com/the-julianson",
    linkedin: "linkedin.com/in/julianbazanaguirre"
  });
  return (
    <div className="App">
      <div className="main-body">
        <LeftColumn courses={courses} languages={languages} skills={skills} />
        <RightColumn
          fullName={fullName}
          jobTitle={jobTitle}
          contactInfo={contactInfo}
        />
      </div>
    </div>
  );
}

export default App;
