import React from 'react'
import './ContentWrapper.css'
import Me from '../../Sections/Me/Me'
import Work from '../../Sections/Work/Work'
import Contact from "../../Sections/Contact/Contact"
import Card from '../../Shared/Card/Card'
import contactAvatar from '../../../assets/images/avatar2.png'
import meAvatar from '../../../assets/images/117-ironman.png'
import workAvatar from '../../../assets/images/avatar3.png'
import MeContent from '../../Sections/Me/MeContent/MeContent'
import WorkContent from '../../Sections/Work/WorkContent/WorkContent'
import ContactContent from '../../Sections/Contact/ContactContent/ContactContent'
import Generico from '../../Generico/Gnerico'


const ContentWrapper = () => (

    <div id="content">

        <Generico>
            <Card img={meAvatar} trigger={<MeContent />}></Card>
        </Generico>

        <Generico>
            <Card img={workAvatar} trigger={<WorkContent />}></Card>

        </Generico>
        <Generico>
            <Card img={contactAvatar} trigger={<p>contact</p>}></Card>
        </Generico>


    </div>
)

export default ContentWrapper
