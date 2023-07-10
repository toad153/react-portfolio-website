import "./workCard.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
        <div className="project-card">
                    <img src={props.imgsrc} alt="" />
                    <h2 className="projectTitle"> {props.title} </h2>
                    <div className="proDetails">
                    <p>{props.text} </p>
                        <div className="proButtons">
                            <NavLink to={props.view} className="btn-dark">VIEW</NavLink>
                            <NavLink to={props.source} className="btn-dark">SOURCE</NavLink>
                        </div>
                    </div>
                </div>
    )
}

export default WorkCard