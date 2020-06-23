import React from 'react'
import './Avatar.css'

function Avatar(props) {



    return (
        <div className="container">
            <ul class="rp-grid">
                <li>
                    <div class="rp-item rp-img-1">
                        <div class="rp-info">
                            <h3>{props.avatarInfo.title}</h3>
                            <button className="button1">{props.avatarInfo.buttonText}</button>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Avatar
