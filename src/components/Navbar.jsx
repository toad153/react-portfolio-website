import "./navbarStyles.css";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >=100){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "Header Header-bg": "Header"}>
            <Link to="/">
                <img className="logo" src="images/Logo.png" alt="Logo" srcset="" />
            </Link>
            <ul className={click ? "navbar active" : "navbar"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="https://github.com/toad153">GitHub</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "fff" }} />
                ) : (<FaBars size={20} style={{ color: "fff" }} />
                )}
            </div>
        </div>
    )
}

export default Navbar