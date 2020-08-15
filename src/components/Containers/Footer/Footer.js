import React from "react";
import Social from "./../../Shared/Social/Social";
import styled from "styled-components";

const SiteFooter = styled.div`

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

const FooterLinks = styled.div`
 
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

const AboutContainer = styled.div`
 color: #ffc107;
`;
const CopyrightContainer = styled.div`
 color: #79787c;
 margin: 0;
 text-align: center;
`;


const Footer = () => {
    return (
        <SiteFooter>
            <div>
                <div>
                    <AboutContainer>
                        <div>
                            <h6>About</h6>
                            <p>{'{ about: "I\'m Just a Developer" }'}</p>
                        </div>
                    </AboutContainer>
                    <div>
                        <h6>Quick Links</h6>
                        <FooterLinks>
                            <ul>
                                <li>
                                    <a href="http://scanfcode.com/about/">About Us</a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/contact/">Contact Us</a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/privacy-policy/">
                                        Privacy Policy
                </a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                                </li>
                            </ul>
                        </FooterLinks>
                    </div>
                </div>
                <hr />
            </div>

            <CopyrightContainer>
                <div>
                    <div>
                        <div>
                            <Social></Social>
                            <p>

                                {'{ cp: " Copyright 2020 All Rights Reserved by Ricardo Vargas" }'}
                            </p>
                        </div>
                    </div>
                </div>
            </CopyrightContainer>
        </SiteFooter>
    );
};

export default Footer;
