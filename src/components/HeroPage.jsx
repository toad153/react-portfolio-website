import React from 'react'
import Typewriter from "typewriter-effect";
// import {
//     AwesomeButton,
//     AwesomeButtonProgress,
//     AwesomeButtonSocial,
// } from 'react-awesome-button';
import "./HeroPageStyles.css";

import HeroImg from "../assets/pexels-negative-space-160107.jpg";
import { Link } from 'react-router-dom';


const HeroPage = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='hero-img' src={HeroImg} alt="HeroImg" srcset="" />
            </div>
            <div className='content'>
                <h1 className='heading'>Hello, I'm Adwait</h1>
                <div className='animation'>
                    <Typewriter
                        options={{ loop: true, }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Software Developer.")
                                .pauseFor(5000)
                                .deleteAll()
                                // .typeString("I'm Technology Enthusiast.")
                                // .pauseFor(1000)
                                // .deleteAll()
                                // .typeString("I'm a Developer.")
                                // .pauseFor(2000)
                                .start();
                        }}
                    />
                </div>

                <Link to="Project" className='btn btn-dark'>PROJECTS</Link>
                <Link to="https://github.com/toad153" className='btn'>GITHUB</Link>


            </div>
        </div>
    )
}

export default HeroPage