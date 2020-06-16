import React from 'react'
import avatar from '../../../assets/images/117-ironman.png'
import Avatar from '../Avatar/Avatar'
import "./MeCard.css"

const MeCard = () => {
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
                            I'm a certified <strong>SysAdmin & Junior software developer</strong>, passionate about technology seeking
                            to learn the skills necessary to perform the job in the best possible way, and thereby develop as
                            a professional in the sector adding value to the work done.
                            I've worked on several with over <strong>1300 Java clases and several decoupled services, over different disengage maven modules</strong> with 
                            a strongly defined <strong>design patterns</strong>.
                                <Avatar></Avatar>
                            </p>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeCard
