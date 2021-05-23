import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { Box } from "../slang";
import Smiley from "./smiley.svg";
import Moon from "./moon.svg";
import Sun from "./sun.svg";
import Link from "next/link";
import styled from "styled-components";
import { Extralarge, Small } from "./typography";
import styles from "./Layout.module.css";
import createPersistedState from "use-persisted-state";

const useTheme = createPersistedState("tone-row-appearance");

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
  const [appearance, setAppearance] = useTheme<"light" | "dark" | undefined>();

  useEffect(() => {
    if (appearance) {
      document.documentElement.dataset.mode = appearance;
    }
  }, [appearance]);

  return (
    <Box
      px={padding}
      py={3}
      className={styles.Layout}
      root
      content="start normal"
    >
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
              px={4}
              className={styles.BackHome}
            >
              <Hand>{`👈`}</Hand>
              <Small>Home</Small>
            </Box>
          </Link>
        )}
        <Box flow="column" items="center normal">
          <Box
            flow="column"
            items="center normal"
            className="appearanceWrapper"
          >
            <Box
              as="button"
              title="Set Light Mode"
              content="center"
              className={[
                styles.AppearanceButton,
                styles.Icon,
                "btnLightMode",
              ].join(" ")}
              onClick={() => setAppearance("light")}
            >
              <Sun height={40} alt="Light Mode" />
            </Box>
            <Box
              as="button"
              title="Set Dark Mode"
              content="center"
              className={[
                styles.AppearanceButton,
                styles.Icon,
                "btnDarkMode",
              ].join(" ")}
              onClick={() => setAppearance("dark")}
            >
              <Moon height={32} alt="Dark Mode" />
            </Box>
          </Box>
          <Link href="/" passHref>
            <A className={styles.Icon}>
              <Smiley height={40} alt="Home" />
            </A>
          </Link>
        </Box>
      </Box>

      <Box as="main">{children}</Box>
    </Box>
  );
}
