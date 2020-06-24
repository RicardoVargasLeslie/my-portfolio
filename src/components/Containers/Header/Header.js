import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <header class="site-header">
    <div className="containerheader">
      <div id="parent">
        <h1> {'{ welcome: "Hi there I\'m Ricki" }'}</h1>
      </div>

      <Typewriter
        options={{
          strings: [
            "a software developer based in london",
            "If you where expecting a fancy portfolios with high-resolution images,",
            "and too many animations,",
            "y regret to disappoint you but thats not me",
          ],
          autoStart: true,
          loop: true,
          delay: 31,
        }}
      />
      {/*  <ul class="social-header">
        <li>
          <a href="https://github.com/RicardoVargasLeslie" class="icon-github">
            GitHub
          </a>
        </li>
      </ul> */}
      <FontAwesomeIcon icon="coffee" />
      <div class="cardBox">
        <div class="card github">
          <div class="front"><i class="fa fa-github" aria-hidden="true"></i></div>
          <div class="back">Github</div>
        </div>
      </div>
    </div>

  </header >
);

export default Header;
