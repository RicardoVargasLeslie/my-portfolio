import React from 'react'
import './Me.css'
import Avatar from './Avatar/Avatar'

const Me = ({ children }) => {

    const avatarInfo = {
        title: "Im Ricki",
        buttonText: "hire me"
    }

    return (
        <div id="me">
            {children}
        </div>
    )
}
export default Me