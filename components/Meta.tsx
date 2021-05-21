import Head from "next/head";
import { ReactNode } from "react";

export default function Meta({
  children,
  pageTitle,
  description = "Tone Row is a space for web-development research with a focus on programming for social impact.",
  image = "https://tone-row.com/ogimg.png",
}: {
  children?: ReactNode;
  pageTitle?: string;
  description?: string;
  image?: string;
}) {
  const title = [`Tone Row`, pageTitle].filter(Boolean).join(" – ");
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {children}
    </Head>
  );
}
