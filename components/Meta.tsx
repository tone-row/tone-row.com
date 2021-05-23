import Head from "next/head";
import { ReactNode } from "react";

export default function Meta({
  children,
  pageTitle,
  description = "Tone Row is a space for web-development research with a focus on programming for social impact.",
  image = "https://res.cloudinary.com/tone-row/image/upload/v1621619004/tone-row-2021/x6tprjbbtebz0vyavgek.png",
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
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {children}
    </Head>
  );
}
