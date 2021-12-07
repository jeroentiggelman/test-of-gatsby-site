// Step 1: import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="Male warrior, looking stoically at the camera"
                src="../images/20210807-warriors_2JT2327-1.jpg"
            />
        </Layout>
    );
};

// Step 3: Export your component
export default IndexPage;
