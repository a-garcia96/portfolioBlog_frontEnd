import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function HomeHeader(props) {
    return (
        <section className="text-center homeHeader">
            <Container>
                <Row className="py-large-5">
                    <Col className="col-lg-6 col-md-8 mx-auto Iam">
                        <h1 className="fw-light">The Socal Azure Admin</h1>
                        <b>
                            <div className="lead innerIam">
                                Azure<br />
                                Intune<br />
                                PowerShell<br />
                                Web Development
                            </div>
                        </b>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeHeader;