import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { Container, Page, Section } from "../../components/structure";
import { Extralarge, Medium } from "../../components/typography";
import { Box } from "../../slang";

const LeftAlignedContainer = styled(Container)`
  margin-left: 0;
`;

export default function Tractor() {
  return (
    <>
      <Head>
        <title>Tone Row Partnerships – Tractor Food &amp; Farms</title>
      </Head>
      <Box
        pt={5}
        at={{
          desktop: { template: "none / repeat(2, minmax(0, 1fr))" },
        }}
      >
        <LeftAlignedContainer>
          <Page>
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
                Together, we designed and built an app which helps their
                distribution of locally-grown food to food pantries in the area.
              </Medium>
              <Medium>
                Through the app, Tractor Food &amp; Farms is able to publish
                their direct-from-farm inventory weekly to participating food
                pantries. Food pantries can then respond with their current
                needs/preferences. Finally, the app then translates that
                information into an optimal packing strategy, getting the right
                food to the right places to minimize food waste and maximize
                pantry efficacy.
              </Medium>
              <Medium>
                This app is beginning is headed into production this Summer
                2021. Check back for more updates about how it's progressing.
              </Medium>
            </Section>
          </Page>
        </LeftAlignedContainer>
        <LeftAlignedContainer>
          <Page>
            <img
              src="https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0/v1621607908/tone-row-2021/tractor.jpg"
              width={3840}
              height={2160}
            />
            <img
              src="https://res.cloudinary.com/tone-row/image/upload/f_auto,q_auto,dpr_2.0/v1621544380/tone-row-2021/diqx2a2vdek4siba9mvr.jpg"
              width={3840}
              height={2160}
            />
            {/* <Section>
              <Large as="h2">Related Blog Articles</Large>
            </Section> */}
          </Page>
        </LeftAlignedContainer>
      </Box>
    </>
  );
}
