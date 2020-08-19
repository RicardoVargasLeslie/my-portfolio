import React from "react";
import "./Avatar.css";
import avatar from "../../../../../assets/images/avatar.jpg";

import { ContactHolder, ContactImageHolder, Content, Bottom } from "../../../../../Styled/AvatarComponents";

function Avatar(props) {
    return (
        <div className="container">
            <ContactHolder>
                <ContactImageHolder>
                    <img src={avatar} />
                </ContactImageHolder>
                <Bottom>
                    <h6>or 1=1</h6>
                </Bottom>
            </ContactHolder>
        </div>
    );
}

export default Avatar;
