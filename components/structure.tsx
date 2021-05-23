import styles from "./structure.module.css";

import { Box, BoxProps } from "../slang";

export const Page = ({
  gap = 10,
  as = "div",
  content = "start normal",
  className = "",
  ...props
}: BoxProps) => (
  <Box
    content={content}
    as={as}
    gap={gap}
    className={[styles.Page, className].join(" ")}
    {...props}
  />
);

export const Section = ({
  gap = 4,
  as = "section",
  content = "start normal",
  ...props
}: BoxProps) => <Box content={content} as={as} gap={gap} {...props} />;

export const Container = ({
  gap = 5,
  as = "div",
  className = "",
  ...props
}: BoxProps) => (
  <Box
    as={as}
    gap={gap}
    className={[className, styles.Container].join(" ")}
    {...props}
  />
);

Container.Medium = ({
  gap = 5,
  as = "div",
  className = "",
  ...props
}: BoxProps) => (
  <Box
    as={as}
    gap={gap}
    className={[className, styles.ContainerMedium].join(" ")}
    {...props}
  />
);

Container.Large = ({
  gap = 5,
  as = "div",
  className = "",
  ...props
}: BoxProps) => (
  <Box
    as={as}
    gap={gap}
    className={[className, styles.ContainerLarge].join(" ")}
    {...props}
  />
);
