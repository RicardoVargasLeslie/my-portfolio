import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './layout.css'

const LayoutWrapper = ({ children }) => (
    <div id="layout">
        <Header />
        {children}
        <Footer />
    </div>

)

export default LayoutWrapper