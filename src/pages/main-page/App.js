import React from 'react';
import './App.css';

import TitleComponent from '../../component/title/title.component';
import ContactComponent from '../../component/contact/contact.component';
import LeftColumn from '../../component/left-column/left-column.component';
import RightColumn from '../../component/right-column/right-column.component';



function App() {


  return (

    <div className="App">
      <div className="header">
        <TitleComponent/>
        <ContactComponent/>
      </div>
      <div className="main-body">
        <LeftColumn/>
        <RightColumn/>
      </div>
    </div>
  );
}

export default App;

