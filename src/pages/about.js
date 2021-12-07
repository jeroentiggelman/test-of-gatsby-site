// Step 1: import React
import { Link } from "gatsby";
import * as React from "react";

// Step 2: define your component
const AboutPage = () => {
    return (
        <main>
            <title>About me</title>
            <h1>About me</h1>
            <Link to="/">Back to Home</Link>
            <p>
                Hi there! I'm the proud creator of this site, which I built with
                Gatsby.
            </p>
        </main>
    );
};

// Step 3: export your component
export default AboutPage;
