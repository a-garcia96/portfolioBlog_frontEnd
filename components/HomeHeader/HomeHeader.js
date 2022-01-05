import React from "react";
import Image from 'next/image'

// import profilePhoto from "../../public/images/profilePhoto.jpg"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function HomeHeader({ homeData }) {

    return (
        <section className="text-center homeHeader">
            <Container>
                <Row className="py-large-5 image-row">
                    <Col className="col-lg-6 col-md-8 mx-auto">
                        <div className="center-utility">
                            <div className="profile-frame">
                                {/* <Image alt="Alex Garcia" height={250} width={250} quality={50} objectFit="cover" priority src={profilePhoto} /> */}
                            </div>
                        </div>
                    </Col>
                </Row>
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