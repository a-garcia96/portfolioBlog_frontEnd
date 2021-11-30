import React from "react";
import axios from "axios";

function HomeHeader(props) {
    console.log(props.homeData)
    return (
        <div className="jumbotron">
            <section className="container">
                <h1>{props.homeData.title}</h1>
                <h2>{props.homeData.header}</h2>
                <p>{props.homeData.description}</p>
            </section>
        </div>
    )
}

export default HomeHeader;