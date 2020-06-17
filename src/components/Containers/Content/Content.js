import React from 'react'
import './Content.css'
import Me from "../../Me/Me"
import Work from "../../Work/Work"
import Contact from "../../Contact/Contact"
import "./Content.css"
import  Generico from "../../Generico/Generico"
import contactAvatar from '../../../assets/images/back2.jpg'
import meAvatar from '../../../assets/images/117-ironman.png'
import workAvatar from '../../../assets/images/contact.jpg'


const Content = () => {

    return (
        <div id="content">
            <Me>
                <Generico img={meAvatar}></Generico>
            </Me>
            <Work>
            <Generico img={workAvatar}></Generico>
            </Work>
            <Contact>
            <Generico img={contactAvatar}></Generico>
            </Contact>



        </div>
    )
}

export default Content
