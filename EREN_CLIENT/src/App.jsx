import './App.css'
import React from "React";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 
function App() {

useEffect(() => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    window.onkeydown = (e) => {
      if (e.keyCode === 123) {  
        e.preventDefault();
      }
    };
  }, []);
  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}

export default App
