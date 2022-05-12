import React from "react";
import { Page, Section } from "../components/structure";
import { Large, Medium } from "../components/typography";
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
      <Page pt={10} className={styles.home}>
        <Box
          gap={gap}
          template="none / none"
          at={{
            tablet: { template: "auto auto / 1fr 1fr", flow: "column" },
            desktop: { template: "auto auto / 1fr 1fr 300px", flow: "row" },
          }}
        >
          <Section at={{ desktop: { area: "span 2 / auto" } }}>
            <Large as="h2" weight={700}>
              Tools for Creativity &amp; Productivity
            </Large>
            <Medium>
              We like to develop open-source tools to improve productivity and
              developer-experiences.
            </Medium>
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
                  <Medium>flowchart.fun</Medium>
                </Box>
              </li>
              <li>
                <Box
                  as="a"
                  href="https://art-of-the-gradient.tone-row.com/"
                  flow="column"
                  content="normal start"
                  items="center normal"
                  gap={3}
                >
                  <div className={styles.gradient} />
                  <Medium>L&apos;art du dégradé</Medium>
                </Box>
              </li>
            </ul>
          </Section>
          <Section>
            <Large as="h2" weight={700}>
              Non Profit Partnerships
            </Large>
            <Medium>
              We build apps to accelerate nonprofits and community-centered
              organizations.
            </Medium>
            <ul>
              <li>
                <Link href="/partnerships/tractor-food-and-farms" passHref>
                  <Medium as="a">TRACTOR Food &amp; Farms</Medium>
                </Link>
              </li>
            </ul>
          </Section>
          <Section>
            <Large as="h2" weight={700}>
              Blog
            </Large>
            <PostList posts={posts} />
          </Section>
          <Section at={{ desktop: { area: "1 / 3 / span 2 / auto" } }}>
            <Large as="h2" weight={700}>
              Connect
            </Large>
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
            <Medium>
              Say Hello!
              <br />
              bonjour@tone-row.com
            </Medium>
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
