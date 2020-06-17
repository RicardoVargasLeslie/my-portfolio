import React from 'react'
import "./Generico.css"
import CardImage from "./../Shared/CardImage"

const Generico = (props) => {

   
    return (
        <div id="main">
            <div id="card">
                <div class="flip-card-container">
                    <div class="flip-card">
                        <div class="flip-card-front">
                        <img src={(props.img)}/>
                        </div>
                        <div class="flip-card-back">
                            <p>
                           Generico
                         
                            </p>
                         
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Generico
