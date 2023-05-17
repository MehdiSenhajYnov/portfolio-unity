import React from "react";
import "./App.css";
import bgimage from "./assets/Background.png";

function Background(props) {

  return (
    <div>
        <img className="fullbackgroundimage" src={bgimage} alt="bg" />

    </div>
    
  );
}

export default Background;
