import React from "react";
import axios from "axios";
import https from "https";

axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

import Container from "react-bootstrap/Container"
export default function Projects() {
    return (
        <Container>
            <h1>Projects</h1>
        </Container>
    )
}