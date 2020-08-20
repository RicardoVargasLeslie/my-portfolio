import React from "react";
import Social from "./../../Shared/Social/Social";
import {
    SiteFooter,
    FooterLinks,
    AboutContainer,
    CopyrightContainer,
    Global
} from "../../../Styled/FooterComponents";


const Footer = () => {
    return (
        <Global>
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
        </Global>
    );
};

export default Footer;
