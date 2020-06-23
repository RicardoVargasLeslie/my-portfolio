import React from 'react'
import './Header.css'
import Typewriter from 'typewriter-effect';

const Header = () => (

  <header class="site-header">
    <div className="containerheader">

      <div id="parent">
        <h1>   {"{ welcome: \"Hi there I'm Ricki\" }"}</h1>
      </div>

      <Typewriter
        options={{
          strings: ['a software developer based in london', 'If you where expecting a fancy portfolios with high-resolution images,', 'and too many animations,', 'y regret to disappoint you but thats not me'],
          autoStart: true,
          loop: true,
          delay: 31
        }}
      />
      <ul class="social-header">
        <li><a href="https://github.com/RicardoVargasLeslie" class="icon-github">GitHub</a></li>
      </ul>

    </div>

  </header>
)

export default Header
