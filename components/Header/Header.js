import React from "react";
import Link from "next/link"

import NavBar from "../NavBar/NavBar"

function Header({ homeData }) {

    return (
        <section className="home-header">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <NavBar />
            <div className="container">
                <div className="header-text">
                    <h1>
                        <span className="header-text-greeting"><span className="u-text-highlight--2">👋🏽 Hello there,</span> my name is</span>
                        <span className="header-text-name">Alex Garcia.</span>
                        <span className="header-text-title">I build <span className="u-text-highlight--1">infrastructure for the web.</span></span>
                    </h1>
                    <p className="header-text-desc">I am a system administrator specializing in Microsoft products such as Intune, Azure and PowerShell. My current focus is to expand into DevOps to build automated pipelines for application infrastructure deployments.</p>
                    <button className="button button__primary"><div className="button button__link"><Link href="/#">See my experience &rarr;</Link></div></button>
                </div>
            </div>
        </section>
    )
}

export default Header;