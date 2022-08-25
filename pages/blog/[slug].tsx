/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import React from "react";

import { MDX } from "../../components/MDX";
import Meta from "../../components/Meta";
import { Container, Page, Section } from "../../components/structure";
import { Extralarge, Small } from "../../components/typography";
import { getPostBySlug, getPostPaths, Post, prepareMDX } from "../../lib/api";
import { formatDate } from "../../lib/helpers";
import { Box } from "../../slang";
import styles from "./[slug].module.css";

type Contract = {
  post?: Post;
  source?: string;
};

export default function Slug({ post, source = "" }: Contract) {
  if (!post) throw new Error("NO POST");
  return (
    <>
      <Meta
        pageTitle={post.title}
        image={`https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_1000,h_500,c_fit/v1621548408/tone-row-2021/${post.preview}`}
        description={post.description}
        url={`/blog/${post.slug}`}
      />
      <Page pb={10} className={styles.Page} pt={3} at={{ tablet: { pt: 0 } }}>
        <Box gap={3}>
          <img
            src={`https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_1000,h_500,c_fit/v1621548408/tone-row-2021/${post.preview}`}
            alt={post.title}
            className={styles.BannerImage}
            width={post.preview_width}
            height={post.preview_height}
          />
          <Container style={{ maxWidth: "800px", textAlign: "center" }}>
            <Box gap={3} as="header">
              <Small>{formatDate(post.published)}</Small>
              <Extralarge as="h1">{post.title}</Extralarge>
            </Box>
          </Container>
        </Box>
        <Section className={styles.Mdx}>
          <MDX source={source} />
        </Section>
      </Page>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getPostPaths();
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<
  Contract,
  { slug: string }
> = async ({ params }) => {
  const slug = params?.slug;
  if (!slug) {
    return { redirect: { destination: "/404" }, props: {} };
  }

  const post = await getPostBySlug(slug);
  const source = await prepareMDX(post.content);
  return { props: { post, source } };
};
