import React from 'react'
import './Nav.css'


function Nav() {
    return (
        <nav className="topnav">
            <a href="/" className="active">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/resume">Resume</a>
        </nav>
    )
}

export default Nav
