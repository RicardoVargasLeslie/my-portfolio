import React from "react";
import TypeWriter from "react-typewriter";
import { SiteHeader, Parent, ContainerHeader } from "../../../Styled/FooterComponents";



const Header = () => (
  <SiteHeader>
    <ContainerHeader>
      <Parent>
        <h1> {'{ welcome: "Hi there I\'m Ricki" }'}</h1>
      </Parent>
      <TypeWriter typing={1}>{'{ Iam: "A software developer based in london " }'}</TypeWriter>

    </ContainerHeader>

  </SiteHeader>


);

export default Header;
