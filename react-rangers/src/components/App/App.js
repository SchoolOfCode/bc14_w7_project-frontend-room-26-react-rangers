import React, { useState } from 'react';
import './App.css';
import LessonCard from '../LessonCard';
import Notepad from '../Notes';

import NavBar from '../NavBar';
import { SOCdata } from '../../SOCdata';
import MotivationalApi from '../MotivationalApi';

function App() {
  const [SOCdataState, setSOCdata] = useState(SOCdata);
  const [activeButton, setActiveButton] = useState(1);
  function handleClick(id) {
    setActiveButton(id);
  };
  const renderComponent = () => {
    const component = SOCdataState.find(item => item.id === activeButton);
    return (
      <LessonCard props={component} />
    );  
    };

// let newData = [...SOCdataState];
// newData[activeButton].notes = text 
// setSOCdata(newData)
 
  return (

    <div className="App">

      <NavBar functionality={handleClick} />
        {renderComponent()}
      <MotivationalApi />
      <Notepad />
    </div>
 
  );
}

export default App;
