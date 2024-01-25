import React from "react";
import { SEO } from "../components/seo";

const SecondPage = () => {
  return <main>Hello World</main>;
};

export default SecondPage;

export const Head = () => (
  <SEO
    title={"Page Two"}
    image={
      "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
    }
    description={"Page...."}
    type={"article"}
    siteUrl={"http://localhost:8000/page-2"}
  />
);
