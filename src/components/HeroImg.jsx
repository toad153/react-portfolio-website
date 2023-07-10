import "./HeroImgStyles.css";

import React, { Component } from 'react'

class HeroImg extends Component {
    render() {
        return (
            <div className="heroImg">
                <div className="heading">
                    <h1>{this.props.heading} </h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImg