import React from "react";
import "./Avatar.css";
import avatar from "../../../../../assets/images/avatar.jpg";

import { ContactHolder, ContactImageHolder, Content, Bottom } from "../../../../../Styled/AvatarComponents"

function Avatar(props) {
    return (
        <div className="container">
            <div class="contact-holder">
                <div class="contact-image-holder">
                    <img src={avatar} />
                </div>
                <div class="bottom">
                    <h6>or 1=1</h6>
                </div>
            </div>
        </div>
    );
}

export default Avatar;
