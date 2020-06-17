import React from 'react'
import './Footer.css'
import Social from './../../Social/Social'

const Footer = () => {

    /*     const address = "South East,London";
        const country = "United Kindom";
        const phone = "+44 07927485295";
        const email = "Ricardovargasleslie@gmail.com";
        const name = "Ricardo Vargas"; */

    return (
        <footer class="site-footer">
            <div class="container">
                <div>
                    <h6>Quick Links</h6>
                    <ul class="footer-links">
                        <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                        <li><a href="https://www.privacypolicies.com/privacy/view/bd344204e9794c55d364181511764e63">Privacy Policy</a></li>
                        <li><a href="http://scanfcode.com/privacy-policy/">Disclaimer</a></li>
                        <Social />
                    </ul>
                </div>
            </div>
            <hr />
            <div class="container">
                <div class="row">
                    <div>
                        <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
                        <br/>
                        <a href="#">Ricardo Vargas Leslie :)</a>.
                        </p>
    
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer
