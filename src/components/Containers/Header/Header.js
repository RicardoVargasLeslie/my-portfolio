import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";



const Header = () => (
  <header class="site-header">
    <div className="containerheader">
      <div id="parent">
        <h1> {'{ welcome: "Hi there I\'m Ricki" }'}</h1>
      </div>

      <div className="letras">
        {<Typewriter
          options={{
            strings: [
              "a software developer based in london",
              "If you where expecting a fancy portfolios with high-resolution images,",
              "and too many animations,",
              "y regret to disappoint you but thats not me",
            ],
            autoStart: true,
            loop: false,
            delay: 31,
            cursor: ""
          }}
        />}
      </div>
    </div>

  </header >


);

export default Header;
