import React, { Children, useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { Large, Medium } from "./typography";
import { Container } from "./structure";
import { Box, Type } from "../slang";
import NextImage from "next/image";

const Paragraph = (props: any) => (
  <Container>
    <Medium as="p" {...props} />
  </Container>
);

const H2 = (props: any) => (
  <Container pt={4}>
    <Large as="h2" style={{ fontWeight: 700 }} {...props} />
  </Container>
);

const H3 = (props: any) => (
  <Container>
    <Large as="h3" {...props} />
  </Container>
);

const H4 = (props: any) => (
  <Container>
    <Large as="h4" {...props} />
  </Container>
);

const Image = (props: any) => (
  <Container>
    <NextImage {...props} />
  </Container>
);

const Blockquote = (props: any) => (
  <Container>
    <Type size={2} {...props} />
  </Container>
);

const Pre = (props: any) => {
  return (
    <Container>
      <Box className="code-wrapper" p={4}>
        <pre {...props} />
      </Box>
    </Container>
  );
};

const Ul = ({ children, ...props }: any) => {
  return (
    <Container>
      <Box as="ul" {...props} gap={1}>
        {Children.map(children, (child) =>
          child?.props?.children ? <Type as="li" {...child.props} /> : null
        )}
      </Box>
    </Container>
  );
};

const A = (props: any) => {
  return <a target="_blank" {...props} />;
};

export const MDX = ({ source }: { source: any }) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);

  return (
    <Component
      components={{
        p: Paragraph,
        h2: H2,
        h3: H3,
        h4: H4,
        img: Image,
        blockquote: Blockquote,
        pre: Pre,
        ul: Ul,
        a: A,
      }}
    />
  );
};
