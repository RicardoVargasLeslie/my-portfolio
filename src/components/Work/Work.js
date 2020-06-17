import React from 'react'
import './Work.css'
import WorkCard from "./WorkCard/WorkCard"


const Work = ({ children }) => {
    return (
        <div id="work">
            {children}
        </div>
    )
}

export default Work
