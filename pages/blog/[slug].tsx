import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { MDX } from "../../components/MDX";
import { Container, Page, Section } from "../../components/structure";
import { Extralarge, Medium } from "../../components/typography";
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
      <Head>
        <title>{`Tone Row – ${post.title}`}</title>
      </Head>
      <Page pb={10} className={styles.Page}>
        <Container as="header">
          <img
            src={`https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_1000,h_500,c_fit/v1621548408/tone-row-2021/${post.preview}`}
            width={1000}
            height={500}
          />
        </Container>
        <Container>
          <Box gap={3} as="header">
            <Medium>{formatDate(post.published)}</Medium>
            <Extralarge as="h1">{post.title}</Extralarge>
          </Box>
        </Container>
        <Section>
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

export const getStaticProps: GetStaticProps<Contract, { slug: string }> =
  async ({ params }) => {
    const slug = params?.slug;
    if (!slug) {
      return { redirect: { destination: "/404" }, props: {} };
    }

    const post = await getPostBySlug(slug);
    // const components = await getComponents();
    const source = await prepareMDX(post.content, {
      Image: `export {default as Image} from 'next/image';`,
    });
    return { props: { post, source } };
  };
