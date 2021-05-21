import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { Box } from "../slang";
import Smiley from "./smiley.svg";
import Link from "next/link";
import styled from "styled-components";
import { Extralarge, Small } from "./typography";
import styles from "./Layout.module.css";

const padding = 6;

const A = styled.a`
  font-size: 0;
`;

const Hand = styled.span`
  font-size: 24px;
  margin-top: -3px;
`;

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const animationKey = pathname.split("/")[1];
  return (
    <Box p={padding}>
      <Box
        as="nav"
        template="none / 1fr auto"
        content="start normal"
        items="start"
      >
        {pathname === "/" ? (
          <Extralarge as="h1" className={styles.Title}>
            Tone Row is a space for web-development research with a focus on
            programming for social impact.
          </Extralarge>
        ) : (
          <Link href="/" passHref>
            <Box
              as="a"
              flow="column"
              gap={2}
              items="center"
              className={styles.BackHome}
            >
              <Hand>{`👈`}</Hand>
              <Small>Home</Small>
            </Box>
          </Link>
        )}

        <Link href="/" passHref>
          <A>
            <Smiley width={40} alt="Home" />
          </A>
        </Link>
      </Box>

      <Box as="main">{children}</Box>
    </Box>
  );
}
