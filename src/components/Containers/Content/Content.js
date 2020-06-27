import React from "react";
import "./Content.css";
import Card from "../../Shared/Card/Card";
import contactAvatar from "../../../assets/images/contact.jpeg";
import meAvatar from "../../../assets/images/me.jpg";
import workAvatar from "../../../assets/images/work.jpeg";
import MeContent from "./MeContent/MeContent";
import ExperienceContent from "./ExperienceContent/ExperienceContent";
import ContactContent from "./ContactContent/ContactContent";
import CardWrapper from "../../Wrappers/CardWrapper/CardWrapper";
import img from "../../../assets/images/coder.png";
import Typewriter from "typewriter-effect";

const Content = () => (
    <div id="content">

        <div className="letras">
            {<Typewriter
                options={{
                    strings: [
                        "a software developer based in london",
                        "If you where expecting a fancy portfolios with high-resolution images,",
                        "and too many animations,",
                        "y regret to disappoint you but thats not me",
                    ],
                    autoStart: true,
                    loop: false,
                    delay: 31,
                    cursor: ""
                }}
            />}
        </div>


        {/* <div className="img"><img src={img} alt="Paris" /></div> */}
        <CardWrapper>
            <Card img={meAvatar} trigger={<MeContent />}></Card>
        </CardWrapper>

        <CardWrapper>
            <Card img={workAvatar} trigger={<ExperienceContent />}></Card>
        </CardWrapper>
        <CardWrapper>
            <Card img={contactAvatar} trigger={<ContactContent />}></Card>
        </CardWrapper>
    </div>
);

export default Content;
