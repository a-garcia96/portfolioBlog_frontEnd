import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function HomeHeader(props) {
    return (
        <section className="text-center">
            <Container>
                <Row className="py-large-5">
                    <Col className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">The Socal Azure Admin</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum fugit aperiam explicabo consectetur! Accusamus qui perspiciatis delectus veritatis reiciendis illo fugit eaque asperiores, adipisci cum iste corrupti consequuntur, itaque laborum?</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeHeader;