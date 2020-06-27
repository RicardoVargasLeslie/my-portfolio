import React from "react";
import "./Header.css";
import TypeWriter from 'react-typewriter';



const Header = () => (
  <header class="site-header">
    <div className="containerheader">
      <div id="parent">
        <h1> {'{ welcome: "Hi there I\'m Ricki" }'}</h1>
      </div>
      <TypeWriter typing={1}>{'{ Iam: "A software developer based in london " }'}</TypeWriter>

    </div>

  </header >


);

export default Header;
