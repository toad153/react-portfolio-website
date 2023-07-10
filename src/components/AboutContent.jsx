import "./aboutContactStyles.css";
import {Link} from "react-router-dom";
// import img1 from "../assets";
// import img2 from "../assets";
import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>
                    I'm a software developer. I create responsive Websites and Software.
                </p>
                <Link to="https://github.com/toad153">
                    <button className="btn-dark">gitHub</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="true" srcset="" className="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" alt="true" srcset="" className="img" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutContent