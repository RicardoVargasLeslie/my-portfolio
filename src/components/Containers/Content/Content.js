import React from "react";
import Card from "../../Shared/Card/Card";
import contactAvatar from "../../../assets/images/contact.jpeg";
import meAvatar from "../../../assets/images/me.jpg";
import workAvatar from "../../../assets/images/work.jpeg";
import MeContent from "./MeContent/MeContent";
import ExperienceContent from "./ExperienceContent/ExperienceContent";
import ContactContent from "./ContactContent/ContactContent";
import CardWrapper from "../../Wrappers/CardWrapper/CardWrapper";
import ContentWrapper from '../../../Styled/Content/ContentWrapper';

const Content = () => (

    <ContentWrapper>
        <CardWrapper>
            <Card img={meAvatar} trigger={<MeContent />}></Card>
        </CardWrapper>

        <CardWrapper>
            <Card img={workAvatar} trigger={<ExperienceContent />}></Card>
        </CardWrapper>
        <CardWrapper>
            <Card img={contactAvatar} trigger={<ContactContent />}></Card>
        </CardWrapper>
    </ContentWrapper>
);

export default Content;
