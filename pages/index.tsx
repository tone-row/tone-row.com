import React from "react";
import { Page, Section } from "../components/structure";
import { Large, Small } from "../components/typography";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getPosts, Post } from "../lib/api";
import { Box } from "../slang";
import { formatDate } from "../lib/helpers";
import styled from "styled-components";
import Meta from "../components/Meta";

type Contract = {
  posts: Post[];
};

const gap = 10;

export default function Index({ posts }: Contract) {
  return (
    <>
      <Meta />
      <Page pt={20}>
        <Box
          gap={gap}
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
                <Large as="a" href="https://github.com/tone-row">
                  Github
                </Large>
              </li>
              <li>
                <Large as="a" href="https://twitter.com/tone_row_">
                  Twitter
                </Large>
              </li>
              <li>
                <Large as="a" href="https://opencollective.com/tone-row">
                  Open Collective
                </Large>
              </li>
              <li>
                <Large as="a" href="https://github.com/sponsors/tone-row">
                  Github Sponsors
                </Large>
              </li>
            </Box>
          </Section>
          <Section>
            <Large as="h2">Projects</Large>
            <Large>
              We like to develop open-source tools to improve productivity and
              developer-experiences.
            </Large>
            <ul>
              <li>
                <Large as="a" href="https://flowchart.fun">
                  flowchart.fun
                </Large>
              </li>
            </ul>
          </Section>
          <Section>
            <Large as="h2">Partnerships</Large>
            <Large>
              We build apps to accelerate nonprofits and community-centered
              organizations.
            </Large>
            <ul>
              <li>
                <Link href="/partnerships/tractor-food-and-farms" passHref>
                  <Large as="a">Tractor Food &amp; Farms</Large>
                </Link>
              </li>
            </ul>
          </Section>
          <Section>
            <Large>
              Say Hello!
              <br />
              <a href="mailto:bonjour@tone-row.com">bonjour@tone-row.com</a>
            </Large>
          </Section>
          <Section gap={8}>
            <Large as="h2">Blog</Large>
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
                <Box as={BlogPostLink} gap={2}>
                  <Large className="underline">{post.title}</Large>
                  <Small>{formatDate(post.published)}</Small>
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

const BlogPostLink = styled.a`
  text-decoration: none;
  .underline {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
`;
