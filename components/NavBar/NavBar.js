import React from "react";
import Link from "next/link";

function NavBar() {
    return (
        <nav className="NavBar">
            <div className="container">
                <Link href="/">
                    <a className="title">The Socal Azure Admin</a>
                </Link>
                <ul>
                    <li>
                        <Link href="/about">
                            <a>About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar