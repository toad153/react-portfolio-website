import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg heading="ABOUT." text="I'm a Software Developer." />
            <Footer />
        </div>
    )
}

export default About