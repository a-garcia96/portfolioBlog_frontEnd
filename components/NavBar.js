import React from "react";
import Link from "next/link";

function NavBar() {
    return (
        <nav className="NavBar">
            <div className="container">
                <Link href="/">
                    <a className="title">Socal Azure Administrator</a>
                </Link>
                <ul>
                    <li>
                        <Link href="/posts">
                            <a>All Posts</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar