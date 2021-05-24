import React from "react";
import { Page, Section } from "../components/structure";
import { Large } from "../components/typography";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getPosts, Post } from "../lib/api";
import { Box } from "../slang";
import Meta from "../components/Meta";
import PostList from "../components/PostList";
import FlowchartFun from "../components/flowchart-fun.svg";
import styles from "./index.module.css";

type Contract = {
  posts: Post[];
};

const gap = 10;

export default function Index({ posts }: Contract) {
  return (
    <>
      <Meta />
      <Page pt={10}>
        <Box
          gap={gap}
          template="none / none"
          at={{
            tablet: { template: "auto auto / 1fr 1fr", flow: "column" },
            desktop: { template: "auto auto / 1fr 1fr 300px", flow: "row" },
          }}
        >
          <Section at={{ desktop: { area: "span 2 / auto" } }}>
            <Large as="h2">Projects</Large>
            <Large>
              We like to develop open-source tools to improve productivity and
              developer-experiences.
            </Large>
            <ul>
              <li>
                <Box
                  as="a"
                  href="https://flowchart.fun"
                  flow="column"
                  content="normal start"
                  items="center normal"
                  gap={3}
                >
                  <FlowchartFun height="70" width="70" className={styles.FF} />
                  <Large>flowchart.fun</Large>
                </Box>
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
            <Large as="h2">Blog</Large>
            <PostList posts={posts} />
          </Section>
          <Section at={{ desktop: { area: "1 / 3 / span 2 / auto" } }}>
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
            <Large>
              Say Hello!
              <br />
              bonjour@tone-row.com
            </Large>
          </Section>
        </Box>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps<Contract> = async () => {
  const posts = (await getPosts()).filter(
    (post) => post.status === "published"
  );
  return { props: { posts } };
};
