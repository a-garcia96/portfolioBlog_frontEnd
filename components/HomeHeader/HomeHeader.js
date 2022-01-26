import React from "react";
import Link from "next/link"

function HomeHeader({ homeData }) {

    return (
        <section className="home-header">
            <div className="container">
                <div className="header-text">
                    <h1>
                        <span className="header-text-greeting"><span className="header-text-highlight">👋🏽 Hello there,</span> my name is</span>
                        <span className="header-text-name">Alejandro Garcia.</span>
                        <span className="header-text-title">I'm a <span className="header-text-highlight">Systems Administrator.</span></span>
                    </h1>
                    <p className="header-text-desc">I specialize in Intune, Azure and PowerShell. Currently I am focused on getting into the world of DevOps and learning about Terraform and Ansible.</p>
                    <button className="btn-header"><Link href="/resume">See my experience</Link></button>
                    
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;