import React, {useState} from 'react';
import './App.css';

import LeftColumn from '../../component/main-body/left-column/left-column.component';
import RightColumn from '../../component/main-body/right-column/right-column.component';
// import Footer from '../../component/footer/footer.component';



function App() {

    const [{fullName, jobTitle}] = useState({fullName : "Julián Bazán Aguirre", jobTitle: "Frontend Developer - React.js"});
    const [experience] = useState([
      {title: 'Co-Founder Huerta Viva 2.0 Sep2018 – En2020', id: 1},
      {title: 'Voluntario @TheUFG Kansas Mar18-Jun18', id: 2},
      {title: 'Founder Huerta Hidroponica 1.0 –  Nov16 – Jun17', id: 3},
      {title: 'Founder GreenBlue Ltd HK – Apr15 – Aug16', id: 4},
      {title: 'Ingeniero de perforacion – Sep13 – Mar2015', id: 5},
    ])
    const [languages] = useState([
      {title: 'Español -- Nativo', id: 1},
      {title: 'Inglés -- Fluido C1/C2', id: 2},
      {title: 'Alemán -- Intermedio B2', id: 3},
      {title: 'Chino -- Intermedio B1', id: 4},
    ])
    const [skills] = useState([
      {title: "JavaScript", level: "Competente", id:1},
      {title: "HTML & CSS", level: "Competente", id:2},
      {title: "React.js", level: "Competente", id:3},
      {title: "React Hooks&Context", level: "Competente", id:4},
      {title: "React Redux", level: "Competente", id:5},
      {title: "Git - GitHub - Git CLI", level: "Competente", id:6},
      {title: "Node.js", level: "Principiante", id:7},
    ])
    const [contactInfo] = useState({
      envelope: "jbazanaguirre@gmail.com",
      github: "github.com/the-julianson",
      linkedin: "linkedin.com/in/julianbazanaguirre"
  })
  return (

    <div className="App">
      <div className="main-body">
        <LeftColumn experience={experience} languages={languages} skills={skills}/>
        <RightColumn fullName={fullName} jobTitle={jobTitle} contactInfo={contactInfo}/>
      </div>
      
    </div>
  );
}

export default App;

