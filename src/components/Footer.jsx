import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import "./footerStyles.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='icons'>
                        <a href="https://github.com/toad153"><FaGithub size={30} style={{ color: "#5ce1e6", margin: "1rem" }} /></a>
                        <a href="mailto:adwaitsumbh@gmail.com"><FaEnvelope size={30} style={{ color: "#5ce1e6", margin: "1rem" }} /></a>
                        <a href="https://www.linkedin.com/in/adwait-sumbh-8a8a981ba/"><FaLinkedin size={30} style={{ color: "#5ce1e6", margin: "1rem" }} /></a>
                    </div>
                    <p>© 2023 Adwait Sumbh</p>
                </div>
                {/* <div className='right'></div> */}
            </div>
        </div>
    )
}

export default Footer