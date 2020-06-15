import React from 'react'
import './MeCard.css'
import avatar from '../../../assets/images/117-ironman.png'
import Avatar from '../Avatar/Avatar'

const Card = () => {
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut
                                sed do eiusmod tempor incididunt ut
                                sed do eiusmod tempor incididunt ut
                                sed do eiusmod tempor incididunt ut
                                sed do eiusmod tempor incididunt ut
                                <Avatar></Avatar>
                            </p>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
