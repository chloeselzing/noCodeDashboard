import React,{useState} from 'react';
import{ Nav, CreateSite,TemplateNav,GridTemplate,ListTemplate }from './components';
import '../src/styles/App.css'
import {BrowserRouter as Router, Routes, Route
  } from 'react-router-dom'
import Home from './Home';

function App() {
  const [buttonActive, setButtonActive] = useState(true);
    const [button2Active, setButton2Active] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showOverlay2, setShowOverlay2] = useState(false);


    const handleButtonClick = () => {
      setButtonActive(true);
      setButton2Active(false);
    };
    const handleButtonClick2 = () => {
      setButton2Active(true);
      setButtonActive(false);
      };

    const toggleOverlay = () => {
      setShowOverlay(true)
      setShowOverlay2(false)

    };
    const toggleOverlay2 = () => {
      setShowOverlay2(true)
      setShowOverlay2(false)

    };
    


  return (
    <div>
      <Router>
        <Nav/>
        <CreateSite/>
        <TemplateNav
        onClick={handleButtonClick} 
        Click={handleButtonClick2} 
        ClassName={buttonActive===true && toggleOverlay? 'btn': 'active'}
        ClassName2={button2Active===false && toggleOverlay2? 'active': 'btn'}      
/>
{buttonActive===true ? <GridTemplate /> : <ListTemplate />}
        {/* <GridTemplate/> */}
        {/* <ListTemplate/> */}
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;