import React, {useState} from 'react';
import './App.css';

import TitleComponent from '../../component/header/title/title.component';
import ContactComponent from '../../component/header/contact/contact.component';
import LeftColumn from '../../component/main-body/left-column/left-column.component';
import RightColumn from '../../component/main-body/right-column/right-column.component';
// import Footer from '../../component/footer/footer.component';



function App() {

    const [{fullName, jobTitle}] = useState({fullName : "Julian", jobTitle: "React Web Developer"});

  return (

    <div className="App">
      <div className="header">
        <TitleComponent />
        <ContactComponent/>
      </div>
     
      <div className="main-body">
        <LeftColumn fullName={fullName} jobTitle={jobTitle}/>
        <RightColumn/>
      </div>
      <div className="autor">Created with React and passion by Julian!</div>
    </div>
  );
}

export default App;

