import React from "react";
import "./Content.css";
import Card from "../../Shared/Card/Card";
import contactAvatar from "../../../assets/images/avatar2.png";
import meAvatar from "../../../assets/images/me.jpg";
import workAvatar from "../../../assets/images/avatar2.png";
import MeContent from "./MeContent/MeContent";
import ExperienceContent from "./ExperienceContent/ExperienceContent";
import CardWrapper from "../../Wrappers/CardWrapper/CardWrapper";

const Content = () => (
    <div id="content">
        <CardWrapper>
            <Card img={meAvatar} trigger={<MeContent />}></Card>
        </CardWrapper>

        <CardWrapper>
            <Card img={workAvatar} trigger={<ExperienceContent />}></Card>
        </CardWrapper>
        <CardWrapper>
            <Card img={contactAvatar} trigger={<p>contact</p>}></Card>
        </CardWrapper>
    </div>
);

export default Content;
