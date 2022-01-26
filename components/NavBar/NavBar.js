import React from "react";
import Link from "next/link";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <ul>
                    <li className="navbar-link"><Link href="/about">About Me</Link></li>
                    <li className="navbar-link"><Link href="/projects">Projects</Link></li>
                    <li className="navbar-link"><Link href="/posts">Blog</Link></li>
                    <li className="navbar-link"><Link href="/resume">Resume</Link></li>
            
                </ul>
            </div>

        </nav>
    );
}

export default NavBar