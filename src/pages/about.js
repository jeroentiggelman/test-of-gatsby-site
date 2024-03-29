// Step 1: import React
import * as React from "react";
import Layout from "../components/layout";

// Step 2: define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>
                Hi there! I'm the proud creator of this site, which I built with
                Gatsby.
            </p>
        </Layout>
    );
};

// Step 3: export your component
export default AboutPage;
