import React from "react";
import Link from "next/link";

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>
                    <Link href="/">
                        The Socal Azure Admin
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link>
                                <Link href="/about">
                                    About Me
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link href="/posts">
                                    Blog
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link href="/projects">
                                    Projects
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link href="/resume">
                                    Resume
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar