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
    siteUrl={
      "https://65b24e87f0cb7b615f69b3f1--transcendent-cactus-ed39e4.netlify.app/page-3"
    }
  />
);
