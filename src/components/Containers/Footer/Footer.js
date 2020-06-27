import React from "react";
import "./Footer.css";
import Social from "./../../Shared/Social/Social";

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="about-container">
                        <h6>About</h6>
                        <p>{'{ about: "I\'m Just a Developer" }'}</p>
                    </div>
                    <div class="quick-container">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
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
                    </div>
                </div>
                <hr />
            </div>
            <div class="copyright-container">
                <div>
                    <div>
                        <Social></Social>
                        <p>

                            {'{ cp: " Copyright 2020 All Rights Reserved by Ricardo Vargas" }'}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
