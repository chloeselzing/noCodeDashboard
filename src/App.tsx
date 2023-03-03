import React from 'react';
import{ Nav, CreateSite,TemplateNav,GridTemplate,ListTemplate }from './components';
import '../src/styles/App.css'
import {BrowserRouter as Router, Routes, Route
  } from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <CreateSite/>
        <TemplateNav/>
        <GridTemplate/>
        {/* <ListTemplate/> */}
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;