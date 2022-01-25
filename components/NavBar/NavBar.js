import React from "react";
import Link from "next/link";

function NavBar() {
    return (
        <div>
            <Link href="/resume">
                Resume
            </Link>
            <Link href="/about">
                About Me
            </Link>
            <Link href="/posts">
                Blog
            </Link>
            <Link href="/projects">
                Projects
            </Link>
        </div>
    );
}

export default NavBar