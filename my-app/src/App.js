import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextArea from './components/TextArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  //this is for bootstrap
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
      document.title = 'TextUtils-dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils-light Mode'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route path="/">
              <TextArea heading="A nice TextBox for you :)" mode={mode}/>            
            </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;