import React from 'react';

import "./globals.css"
import "./index.css"
import NavBar from "./components/navbarscripts/Navbar.jsx";
import Linebreaker from "./components/linebreaker/linebreaker.jsx";
import CV from "./components/cv/cv.jsx";
import Bottombar from './components/bottombar/bottombar';
import Squaredescription from "./components/squaredescription/Squaredescription.jsx";
import Background from "./App.js"
import { Unity, useUnityContext } from "react-unity-webgl";


function HomePage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./WebBuild/Build/WebBuild.loader.js",
    dataUrl: "./WebBuild/Build/WebBuild.data",
    frameworkUrl: "./WebBuild/Build/WebBuild.framework.js",
    codeUrl: "./WebBuild/Build/WebBuild.wasm",
  });
  return <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }}/>;
  
}

export default HomePage;
