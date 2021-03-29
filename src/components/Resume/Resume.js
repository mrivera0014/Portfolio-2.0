import React from 'react'
import './Resume.css'

function Resume() {
    return (
        <>
            <img className="resumeImg" src={process.env.PUBLIC_URL + 'assets/maribel_rivera_resume.png'} alt="Resume" />
        </>
    )
}

export default Resume
