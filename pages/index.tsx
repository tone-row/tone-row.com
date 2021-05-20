import React from "react";
import { Page, Section } from "../components/structure";
import { Extralarge, Large, Medium } from "../components/typography";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { getPosts, Post } from "../lib/api";
import BlogHeader from "../components/BlogHeader";
import { Box } from "../slang";

type Contract = {
  posts: Post[];
};

const g = 4;

export default function Index({ posts }: Contract) {
  return (
    <>
      <Head>
        <title>Tone Row</title>
      </Head>
      <Page>
        <Section>
          <Extralarge as="h1">
            Tone Row is a space for web-development research
            <br /> with a focus on programming for social impact.
          </Extralarge>
        </Section>
        <Box
          gap={g}
          template="none / none"
          at={{
            tablet: { template: "none / 1fr 1fr" },
            desktop: { template: "none / 300px 1fr 1fr" },
          }}
        >
          <Section>
            <Large as="h2">Connect</Large>
            <Box as="ul" gap={1}>
              <li>
                <Medium as="a" href="https://github.com/tone-row">
                  Github
                </Medium>
              </li>
              <li>
                <Medium as="a" href="https://twitter.com/tone_row_">
                  Twitter
                </Medium>
              </li>
              <li>
                <Medium as="a" href="https://opencollective.com/tone-row">
                  Open Collective
                </Medium>
              </li>
              <li>
                <Medium as="a" href="https://github.com/sponsors/tone-row">
                  Github Sponsors
                </Medium>
              </li>
            </Box>
          </Section>
          <Section>
            <Large as="h2">Projects</Large>
            <Medium>
              We like to develop open-source tools to improve productivity and
              developer-experiences.
            </Medium>
            <ul>
              <li>
                <Medium as="a" href="https://flowchart.fun">
                  flowchart.fun
                </Medium>
              </li>
            </ul>
          </Section>
          <Section>
            <Large as="h2">Partnerships</Large>
            <Medium>
              We build apps to accelerate nonprofits and community-centered
              organizations.
            </Medium>
            <ul>
              <li>
                <Link href="/partnerships/tractor-food-and-farms" passHref>
                  <Medium as="a">Tractor Food &amp; Farms</Medium>
                </Link>
              </li>
            </ul>
          </Section>
          <Section>
            <Medium>
              Say Hello!
              <br />
              <a href="mailto:bonjour@tone-row.com">bonjour@tone-row.com</a>
            </Medium>
          </Section>
          <Section style={{ gridColumn: "auto / span 2" }}>
            <Large as="h2">Blog</Large>
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
                <Box as="a">
                  <BlogHeader post={post} />
                </Box>
              </Link>
            ))}
          </Section>
        </Box>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps<Contract> = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
