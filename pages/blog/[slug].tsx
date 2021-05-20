import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import BlogHeader from "../../components/BlogHeader";
import BlogLayout from "../../components/BlogLayout";
import { MDX } from "../../components/MDX";
import { Container, Page, Section } from "../../components/structure";
import { getPostBySlug, getPostPaths, Post, prepareMDX } from "../../lib/api";

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
      <BlogLayout>
        <Page>
          <Container>
            <BlogHeader post={post} />
          </Container>
          <Section>
            <MDX source={source} />
          </Section>
        </Page>
      </BlogLayout>
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
