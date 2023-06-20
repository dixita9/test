import React, { useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";
import CalcOne from "./CalcOne";
import Submit from "./Submit";
import handleCalculation from "./CalcOne";
import Hiking from "./hiking";
import Header from "./header";

function App() {
  const [completed, setCompleted] = useState(33.33); // Set the initial completed value here

  return (
    <div className="container">
      
      <div className="background-image">
       
        <Hiking />
      </div>
      <div className="content">
        <Header />
        <ProgressBar bgcolor="#36545d" completed={completed} /> 
        <CalcOne />
        <Submit />
      </div>
    </div>
  );
}

export default App;
