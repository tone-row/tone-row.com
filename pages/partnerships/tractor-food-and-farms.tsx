import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import Meta from "../../components/Meta";
import PostList from "../../components/PostList";
import { Container, Page, Section } from "../../components/structure";
import { Extralarge, Large, Medium } from "../../components/typography";
import { getPosts, Post } from "../../lib/api";
import { Box } from "../../slang";

type Contract = {
  posts: Post[];
};

const LeftAlignedContainer = styled(Container)`
  margin-left: 0;
`;

export default function Tractor(props: Contract) {
  const { posts } = props;
  return (
    <>
      <Meta
        pageTitle={`Partnerships: Tractor Food & Farms`}
        description={`Tractor Food & Farms operates food relief programs to help
                food insecure community members in Western North Carolina.`}
        image={`https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_600/v1621607908/tone-row-2021/tractor.jpg`}
      />
      <Box
        pt={5}
        gap={6}
        at={{
          desktop: { template: "none / repeat(2, minmax(0, 1fr))" },
        }}
      >
        <LeftAlignedContainer>
          <Page gap={6}>
            <Box as="header" gap={3}>
              <Medium>Partnerships</Medium>
              <Extralarge as="h1">Tractor Food &amp; Farms</Extralarge>
            </Box>
            <Section>
              <Medium>
                Tractor Food &amp; Farms operates food relief programs to help
                food insecure community members in Western North Carolina.
              </Medium>
              <Medium>
                Together, Tone Row and Tractor designed & built an application
                to help with their distribution of locally-grown food to food
                pantries in the area.
              </Medium>
              <Medium>
                Using the app, Tractor publishes their weekly inventory to
                participating food pantries. Food pantries respond with the
                current needs/preferences of the community members they serve.
              </Medium>
              <Medium>
                Finally, the app translates that information into an optimal
                food packing strategy, getting the right food to the right
                places to minimize food waste and maximize pantry efficacy.
              </Medium>
              <Medium>
                This app is headed into production Summer 2021. Check back for
                more updates on how it's progressing.
              </Medium>
            </Section>
            {posts.length ? (
              <Section>
                <Large as="h2">Related Blog Articles</Large>
                <PostList posts={posts} />
              </Section>
            ) : null}
          </Page>
        </LeftAlignedContainer>
        <LeftAlignedContainer>
          <Page gap={3}>
            <img
              src="https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_600/v1621607908/tone-row-2021/tractor.jpg"
              width={3840}
              height={2160}
            />
            <img
              width={1200}
              height={765}
              src={`https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_600/v1621618114/tone-row-2021/jft6fj2erwjzemikakbs.png`}
            />
            <img
              src="https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_600/v1621544380/tone-row-2021/diqx2a2vdek4siba9mvr.jpg"
              width={3840}
              height={2160}
            />
          </Page>
        </LeftAlignedContainer>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps<Contract> = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts
        .filter((post) => post.partnership === "tractor-food-and-farms")
        .filter((post) => post.status === "published"),
    },
  };
};
