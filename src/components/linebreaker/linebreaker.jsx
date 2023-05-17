import React from "react";
import "./linebreaker.css";
function Linebreaker(props) {

  return (
    <div class="bigbreakcontainer">
      <div class="breakcontainer">
        <div class="bigline"></div>
        <div class="smallline"></div>
      </div>
      <div class="breakcontainer">
      <div class="smallline"></div>
      <div class="bigline"></div>
    </div>
  </div>
  );
}

export default Linebreaker;
