import React from "react";
import Link from "next/link";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <ul>
                    <li className="navbar-link"><Link href="#">About Me</Link></li>
                    <li className="navbar-link"><Link href="#">Projects</Link></li>
                    <li className="navbar-link"><Link href="#">Blog</Link></li>
                    <li className="navbar-link"><Link href="#">Resume</Link></li>
            
                </ul>
            </div>

        </nav>
    );
}

export default NavBar