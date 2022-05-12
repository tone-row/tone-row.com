import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import ImageWithCaption from "../../components/ImageWithCaption";
import Meta from "../../components/Meta";
import PostList from "../../components/PostList";
import { Container, Page, Section } from "../../components/structure";
import { Extralarge, Large, Medium } from "../../components/typography";
import { getPosts, Post } from "../../lib/api";
import { Box } from "../../slang";
import Image from "next/image";

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
        pageTitle={`Partnerships: TRACTOR Food & Farms`}
        description={`TRACTOR Food & Farms operates food relief programs to help
                food insecure community members in Western North Carolina.`}
        image={`https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_600/v1621607908/tone-row-2021/tractor.jpg`}
        url="/partnerships/tractor-food-and-farms"
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
              <Extralarge as="h1">TRACTOR Food &amp; Farms</Extralarge>
            </Box>
            <Section>
              <Large>
                <a
                  href="http://tractorfoodandfarms.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TRACTOR Food &amp; Farms
                </a>{" "}
                operates food relief programs to help food insecure community
                members in Western North Carolina.
              </Large>
              <Medium>
                Together, Tone Row and TRACTOR designed &amp; built an
                application to augment TRACTOR&apos;s distribution of
                locally-grown food to food pantries in the area.
              </Medium>
              <Medium>
                Using the app, TRACTOR publishes their weekly inventory to
                participating food pantries. Then food pantries can respond with
                the current needs and preferences of the community members they
                serve. With that information, the app then becomes a tool to
                help TRACTOR create an optimal food packing strategy.
              </Medium>
              <Medium>
                The goal is to get the right food to the right places to
                minimize food waste and maximize pantry efficacy.
              </Medium>
              <Medium>
                This app is headed into production Summer 2021. Check back for
                more updates on how it&apos;s progressing.
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
            <Image
              width={1000}
              height={604}
              src={`https://res.cloudinary.com/tone-row/image/upload/w_1200/v1621618114/tone-row-2021/cge2qw0seagvp3blyocu.png`}
              alt="Healthy Harvest"
            />
            <ImageWithCaption caption="Photo by Dru Zucchino">
              <Image
                src="https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_600/v1621607908/tone-row-2021/tractor.jpg"
                width={3840}
                height={2160}
                alt="Tractor"
              />
            </ImageWithCaption>
            <ImageWithCaption caption="Photo by Dru Zucchino">
              <Image
                src="https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0,w_600/v1621544380/tone-row-2021/diqx2a2vdek4siba9mvr.jpg"
                width={3840}
                height={2160}
                alt="Fresh Produce"
              />
            </ImageWithCaption>
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
