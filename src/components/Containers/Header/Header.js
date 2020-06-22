import React from 'react'
import './Header.css'
import ReactTypingEffect from 'react-typing-effect';

const Header = () => (

  <header class="site-header">
    <div className="contaimer">

      <div id="parent">

        <h2>Hi there I'm Ricki</h2>

        <ReactTypingEffect

          text="a software developer based
          in London..

      If you where expecting one of those fancy portfolios with high-resolution images and too many animations that all look the same ,
      y regret to disappoint you but that's not me.

      I write code yes, but most of it run under the hood,  therefore you can't see it,
      I could show you some snippets or you could go to my Github profile and take a peek.
      "
      

       spped="1000000"
    
        />

      </div>
      <ul class="social-header">
        <li><a href="https://github.com/RicardoVargasLeslie" class="icon-github">GitHub</a></li>
      </ul>
      <p className="animation"> Don't forget less is more :)</p>
      <br></br>
    </div>


  </header>
)

export default Header
