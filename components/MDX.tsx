import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { Large, Medium } from "./typography";
import { Container } from "./structure";

const Paragraph = (props: any) => (
  <Container>
    <Medium {...props} />
  </Container>
);

const H2 = (props: any) => (
  <Container>
    <Large as="h2" {...props} />
  </Container>
);

const H3 = (props: any) => (
  <Container>
    <Large as="h3" {...props} />
  </Container>
);

const Image = (props: any) => (
  <Container>
    <img {...props} />
  </Container>
);

export const MDX = ({ source }: { source: any }) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);

  return (
    <Component components={{ p: Paragraph, h2: H2, h3: H3, img: Image }} />
  );
};
