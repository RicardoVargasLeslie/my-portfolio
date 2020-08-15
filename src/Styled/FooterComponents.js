import styled from "styled-components";


export const SiteFooter = styled.div`

* {
  align-items: baseline;
  align-items: baseline;
  vertical-align: baseline;
  align-self: baseline;
}

  background-color: #424242;
  padding: 5px;
  font-size: 15px;
  line-height: 24px;
  color: #424242;
  text-align: center;
  margin-top: 5%;

  hr {

     border-top-color: #bbb;
     opacity: 0.5;
     border-top-color: #79787c;
    
  }

  h6 {

  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
  font-family: "Roboto", sans-serif;
  }
`;

export const FooterLinks = styled.div`
 
  list-style: none;
  display: inline-block;
  text-align: center;
  margin-top: 0%;

  a{
  display: inline-block;
  text-align: center;
  color: #79787c;
  }

  li
  {
     display: inline-block;
     text-align: center;
  }

  a:active,a:focus,a:hover 
  {
    color: #ffc107;
    text-decoration: none;
  }
`;

export const AboutContainer = styled.div`
 color: #ffc107;
`;
export const CopyrightContainer = styled.div`
 color: #79787c;
 margin: 0;
 text-align: center;
`;