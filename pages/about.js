import React from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";

export default function About(props) {

    const md = new MarkdownIt();
    const htmlContent = md.render(props.aboutData.content);
    
    return (
        <div className="container">
            <h1>{props.aboutData.title}</h1>
            <section dangerouslySetInnerHTML={{__html: htmlContent}}></section>
        </div>
    )
}

export async function getStaticProps() {
    const aboutRes = await axios.get(`${process.env.STRAPI_URL}/about`);

    return {
        props: {
            aboutData: aboutRes.data
        }
    }
}