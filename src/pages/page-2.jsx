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
    siteUrl={
      "https://65b24e87f0cb7b615f69b3f1--transcendent-cactus-ed39e4.netlify.app/page-2"
    }
  />
);
