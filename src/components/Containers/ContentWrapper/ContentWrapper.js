import React from 'react'
import './ContentWrapper.css'

import Card from '../../Shared/Card/Card'
import contactAvatar from '../../../assets/images/avatar2.png'
import meAvatar from '../../../assets/images/117-ironman.png'
import workAvatar from '../../../assets/images/avatar3.png'
import MeContent from '../../Sections/Me/MeContent/MeContent'
import WorkContent from '../../Sections/Work/WorkContent/WorkContent'
import ContactContent from '../../Sections/Contact/ContactContent/ContactContent'
import Generico from '../../Generico/Generico'



const ContentWrapper = () => (

    <div id="content">

        <Generico class="generico">
            <Card img={meAvatar} trigger={<MeContent />}></Card>
        </Generico>

        <Generico class="generico">
            <Card img={workAvatar} trigger={<WorkContent />}></Card>

        </Generico>
        <Generico class="generico">
            <Card img={contactAvatar} trigger={<p>contact</p>}></Card>
        </Generico>


    </div>
)

export default ContentWrapper
