import React from "react";
import Image from "next/image"

export default function custom404() {
    return (
        <div className="custom-404-container">
            <div className="fourohfour-text-box">
                <h1>Uh Oh!</h1>
                <hr />
                <p>This site is still being built. <br/> I promise you'll get more soon!</p>
            </div>
        </div>
    );
}