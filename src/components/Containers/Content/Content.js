import React from 'react'
import './Content.css'
import Me from '../../Me/Me'
import Work from '../../Work/Work'
import Contact from "../../Contact/Contact"
import Card from '../../Shared/Card/Card'
import contactAvatar from '../../../assets/images/avatar2.png'
import meAvatar from '../../../assets/images/117-ironman.png'
import workAvatar from '../../../assets/images/avatar3.png'


const Content = () => (

    <div id="content">
        <Me>

            <Card img={meAvatar} trigger={<p>me</p>}></Card>

        </Me>
        <Work>
            <Card img={workAvatar} trigger={<p>work</p>}></Card>
        </Work>
        <Contact>
            <Card img={contactAvatar} trigger={<p>contact</p>}></Card>
        </Contact>



    </div>)

export default Content
