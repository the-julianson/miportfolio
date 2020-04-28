import React from 'react';
import './App.css';

import TitleComponent from '../../component/title/title.component';
import ContactComponent from '../../component/contact/contact.component';


function App() {


  return (

    <div className="App">
      <div className="header">
        <TitleComponent/>
        <ContactComponent/>
      </div>
    </div>
  );
}

export default App;

