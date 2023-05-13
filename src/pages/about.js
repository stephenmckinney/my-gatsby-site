// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    //add layout component
    <Layout pageTitle="About Me">
      <p>
        {" "}
        Hi there! I'm the proud creator of this site, which I built with Gatsby.{" "}
      </p>
    </Layout>
  );
};

// You can set set the page's metadata here only in a page in src/pages
export const Head = () => <title>About Steve</title>;

// Step 3: Export your component
export default AboutPage;
