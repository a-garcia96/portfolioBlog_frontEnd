import React from "react";
import Image from 'next/image'

// import profilePhoto from "../../public/images/profilePhoto.jpg"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function HomeHeader({ homeData }) {

    return (
        <section className="home-header">
            <div className="container">
                <div className="header-text">
                    <h1>
                        <span className="header-text-greeting"><span className="header-text-highlight">👋🏽 Hello there,</span> my name is</span>
                        <span className="header-text-name">Alejandro Garcia.</span>
                        <span className="header-text-title">I'm a <span className="header-text-highlight">system administrator.</span></span>
                    </h1>
                    <p className="header-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum incidunt architecto obcaecati! Nemo molestiae non quidem! Similique, aliquam! Quas neque illum culpa consequatur autem? Cum saepe iure pariatur error?</p>
                    <button className="btn-header">See my experience</button>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;