import { AnimateSharedLayout } from "framer-motion";
import Link from "next/link";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Page } from "./structure";
import { WideLarge } from "./typography";

const Title = styled.a`
  text-decoration: none;
`;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <Page>
      <Link href="/blog" passHref>
        <WideLarge as={Title}>Blog</WideLarge>
      </Link>
      <AnimateSharedLayout type="crossfade">{children}</AnimateSharedLayout>
    </Page>
  );
}
