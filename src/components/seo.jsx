import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({ title, description, children, type, image, siteUrl }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    type: defaultType,
    image: defaultImage,
    siteUrl: defaultUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    type: type || defaultType,
    image: image || defaultImage,
    siteUrl: siteUrl || defaultUrl,
    twitterUsername,
  };

  return (
    <>
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};
