import React from "react";
import axios from "axios";
import https from "https";

axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

export default function Resume() {
    return (
        <>
            <h1>Resume!</h1>
        </>
    )
}