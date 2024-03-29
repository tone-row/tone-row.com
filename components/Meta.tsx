import Head from "next/head";
import { ReactNode } from "react";

const DEFAULT_DESCRIPTION =
  "Tone Row is a space for web-development research with a focus on programming for social impact.";

export default function Meta({
  children,
  pageTitle,
  description = DEFAULT_DESCRIPTION,
  image = "https://res.cloudinary.com/tone-row/image/upload/v1621880547/tone-row-2021/jn9eujlz0tghwlzlptvz.png",
  url = "/",
}: {
  children?: ReactNode;
  pageTitle?: string;
  description?: string;
  image?: string;
  url?: string;
}) {
  const title = [pageTitle, `Tone Row`].filter(Boolean).join(" – ");
  const fullUrl = ["https://tone-row.com", url].join("").toLowerCase();
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:url" content={fullUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tone-row.com" />
      <link rel="canonical" href={fullUrl} />
      {children}
    </Head>
  );
}
