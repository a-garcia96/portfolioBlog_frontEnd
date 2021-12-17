import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function HomeHeader({homeData}) {

    return (
        <section className="text-center homeHeader">
            <Container>
                <Row className="py-large-5">
                    <Col className="col-lg-6 col-md-8 mx-auto Iam">
                        <h1 className="fw-light">{homeData.header}</h1>
                        <b>
                            <div className="lead innerIam">
                                {homeData.veritcalText1}<br />
                                {homeData.verticalText2}<br />
                                {homeData.verticalText3}<br />
                                {homeData.verticalText4}
                            </div>
                        </b>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeHeader;