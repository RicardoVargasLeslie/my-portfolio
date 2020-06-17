import React from 'react'
import ContactCard from "./ContactCard/ContactCard/ContactCard"
import "./Contact.css"
import Social from "./ContactCard/Social/Social"


const Contact = ({ children }) => {
  return (
    <div className="contact">
      {children}
      <Social />
    </div>
  )
}
export default Contact