import React from 'react'

import avatar from './../../../../assets/images/contact.jpg'
import "./ContactCard.css"


const ContactCard = () => {
    return (
        <div id="main">
            <div id="card">
                <div class="flip-card-container">
                    <div class="flip-card">
                        <div class="flip-card-front">
                            <img src={avatar} alt="Contact" />
                        </div>
                        <div class="flip-card-back">
                            <p>
                               CONTACT CARD
                            </p>
                           {/* <Social></Social> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
