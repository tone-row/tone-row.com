import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { Box } from "../slang";
import Smiley from "./smiley.svg";
import Moon from "./moon.svg";
import Sun from "./sun.svg";
import Link from "next/link";
import styled from "styled-components";
import { Extralarge, Medium } from "./typography";
import styles from "./Layout.module.css";
import createPersistedState from "use-persisted-state";

const useTheme = createPersistedState("tone-row-appearance");

const padding = 4;

const A = styled.a`
  font-size: 0;
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
      py={6}
      className={styles.Layout}
      root
      content="start normal"
    >
      <Box
        as="nav"
        template="repeat(auto-fit, auto) / auto auto"
        gap={6}
        at={{ tablet: { template: "none / 1fr auto" } }}
        content="start normal"
        items="start"
      >
        {pathname === "/" ? (
          <Box area="2 / span 2" at={{ tablet: { area: "auto / auto" } }}>
            <Extralarge as="h1" className={styles.Title}>
              <em>Tone Row</em> is a space for web-development research with a
              focus on programming for social&nbsp;impact.
            </Extralarge>
          </Box>
        ) : (
          <Link href="/" passHref>
            <Box
              as="a"
              flow="column"
              gap={2}
              items="center"
              px={4}
              area="1 / 1"
              className={styles.BackHome}
              self="center start"
            >
              <Medium>&larr; Home</Medium>
            </Box>
          </Link>
        )}
        <Box
          flow="column"
          items="center normal"
          self="start end"
          area="1 / 2"
          gap={1}
          at={{ tablet: { area: "auto / auto" } }}
        >
          <Box
            as="button"
            aria-label="Set Light Mode"
            content="center"
            className={[
              styles.AppearanceButton,
              styles.Icon,
              "btnLightMode",
            ].join(" ")}
            onClick={() => setAppearance("light")}
          >
            <Sun height={36} alt="Light Mode" />
          </Box>
          <Box
            as="button"
            aria-label="Set Dark Mode"
            content="center"
            className={[
              styles.AppearanceButton,
              styles.Icon,
              "btnDarkMode",
            ].join(" ")}
            onClick={() => setAppearance("dark")}
          >
            <Moon height={29} alt="Dark Mode" />
          </Box>
          <Link href="/" passHref>
            <A className={styles.Icon} aria-label="Home">
              <Smiley height={40} alt="Home" />
            </A>
          </Link>
        </Box>
      </Box>

      <Box as="main">{children}</Box>
    </Box>
  );
}
