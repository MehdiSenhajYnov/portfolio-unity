import React from "react";
import "./Navbar.css";
import iconMail from "../../assets/NavBar/email-1@2x.png";
import iconHome from "../../assets/NavBar/home.png";
import newsblack1 from "../../assets/NavBar/etoile.png";
import iconLinkedin from "../../assets/NavBar/linkedin.png";

function NavBar(props) {

  return (
    <div className="iconcontainer">
      <div className="iconparent">
        <img className="icon" src={iconHome} alt="icon-home" />
        <div className="icontext">Accueil</div>
      </div>
      <div className="iconparent">
        <img className="icon" src={newsblack1} alt="NewsBlack" />
        <div className="icontext">Articles</div>
      </div>
      <div className="iconparent">
        <img className="icon" src={iconMail} alt="icon-mail" />
        <div className="icontext">Place</div>
      </div>
      <div className="iconparent">
        <img className="icon" src={iconLinkedin} alt="icon-linkedin" />
        <div className="icontext">Linkedin</div>
      </div>
    </div>
    
  );
}

export default NavBar;
