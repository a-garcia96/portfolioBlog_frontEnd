import React from "react";
import Link from "next/link"

function HomeHeader({ homeData }) {

    return (
        <section className="home-header">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="container">
                <div className="header-text">
                    <h1>
                        <span className="header-text-greeting"><span className="header-text-highlight">👋🏽 Hello there,</span> my name is</span>
                        <span className="header-text-name">Alex Garcia.</span>
                        <span className="header-text-title">I build <span className="header-text-highlight">infrastructure for the web.</span></span>
                    </h1>
                    <p className="header-text-desc">I specialize in Intune, Azure and PowerShell. Currently I am focused on getting into the world of DevOps and adopting Terraform and Ansible to build automated infrastructure deployment pipelines.</p>
                    <button className="btn-header"><Link href="/resume">See my experience</Link></button>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;