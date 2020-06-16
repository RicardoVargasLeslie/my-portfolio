import React from 'react'
import './WorkCard.css'
import avatar from '../../../assets/images/back2.jpg'


const WorkCard = () => {
    return (
        <div id="main">
            <div id="card">
                <div class="flip-card-container">
                    <div class="flip-card">
                        <div class="flip-card-front">
                        <img src={avatar} alt="Rick" />
                        </div>
                        <div class="flip-card-back">
                            <p>
                               WORK CARD
                            </p>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
