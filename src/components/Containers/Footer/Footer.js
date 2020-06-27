import React from "react";
import "./Footer.css";
import Social from "./../../Shared/Social/Social";

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
            Im Just a Developer
          </div>
                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li>
                                <a href="http://scanfcode.com/about/">About Us</a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/contact/">Contact Us</a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                                    Contribute
                </a>
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
            <div class="container">
                <div class="row">
                    <div class="copyright-text">
                        <Social></Social>
                        <p>
                            Copyright &copy; 2017 All Rights Reserved by
            </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
