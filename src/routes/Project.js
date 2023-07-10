import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import WorkCard from '../components/WorkCard'


const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg heading="PROJECTS." text="Some of my recent projects." />
            <WorkCard />
            <Footer />
        </div>
    )
}

export default Project