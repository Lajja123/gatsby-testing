import React from "react";
import { SEO } from "../components/seo";

const ThirdPage = () => {
  return <main>Hello World</main>;
};

export default ThirdPage;

export const Head = () => (
  <SEO
    title={"Page 3"}
    image={
      "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
    }
    description={"Page 3 Index....."}
    type={"article"}
    siteUrl={"http://localhost:8000/page-3"}
  />
);
