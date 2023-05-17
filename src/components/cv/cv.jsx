import React from "react";
import "./cv.css";
function CV(props) {

  return (
    <div class="cvcontainer">
      <div class="cvheader">
        DÉVELOPPEUR DE JEUX VIDÉO ET D’APPLICATION
      </div>
      <span class="compcategory">COMPÉTENCES</span>
      <div class="categorycontainer">
      
        <div class="reccontainer unityrecb">
          <span class="recname">Unity</span>
          <div class="recblank"> 
            <div class="recfilled unityrecf"> </div>
          </div>
        </div>

        <div class="reccontainer csharprecb">
          <span class="recname">C#</span>
          <div class="recblank"> 
            <div class="recfilled csharprecf"> </div>
          </div>
        </div>

        <div class="reccontainer golangrecb">
          <span class="recname">Golang</span>
          <div class="recblank"> 
            <div class="recfilled golangrecf"> </div>
          </div>
        </div>

        <div class="reccontainer pythonrecb">
          <span class="recname">Python</span>
          <div class="recblank"> 
            <div class="recfilled pythonrecf"> </div>
          </div>
        </div>
        
        <span class="category">LANGUE</span>
        <div class="langcontainer">
          <span>Francais</span>
          <span>Italien (bilingue)</span>
          <span>Anglais</span>
        </div>
    
        <span class="category">ETUDES</span>
        <div class="langcontainer">
          <span>Brevet</span>
          <span>Bac</span>
          <div>
          <span>Bachelor informatique</span>
          <p>(En cours)</p>

          </div>
        </div>

        <span class="category">EXPÉRIENCE PROFESSIONNELLE</span>
        <div class="langcontainer">
          <div>
            <span>Mise en rayon</span>
            <p>(Carrefour)</p>
          </div>
          <span>Serveur</span>

        </div>

      </div>
    </div>
  );
}

export default CV;
