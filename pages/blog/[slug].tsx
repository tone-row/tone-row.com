import { GetStaticProps } from "next";
import React from "react";
import ImageWithCaption from "../../components/ImageWithCaption";
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
        <Container>
          {post.preview_credit ? (
            <ImageWithCaption caption={post.preview_credit}>
              <img
                src={`https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_1000,h_500,c_fit/v1621548408/tone-row-2021/${post.preview}`}
                width={1000}
                height={500}
              />
            </ImageWithCaption>
          ) : (
            <img
              src={`https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_1000,h_500,c_fit/v1621548408/tone-row-2021/${post.preview}`}
              width={1000}
              height={500}
            />
          )}
        </Container>
        <Container style={{ maxWidth: "800px", textAlign: "center" }}>
          <Box gap={3} as="header">
            <Small>{formatDate(post.published)}</Small>
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
