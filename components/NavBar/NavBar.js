import React from "react";
import Link from "next/link";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <ul>
                    <li className="navbar-link"><Link href="/blank">About Me</Link></li>
                    <li className="navbar-link"><Link href="/blank">Projects</Link></li>
                    <li className="navbar-link"><Link href="/blank">Blog</Link></li>
                    <li className="navbar-link"><Link href="/blank">Resume</Link></li>
            
                </ul>
            </div>

        </nav>
    );
}

export default NavBar