import { Box, BoxProps } from "../slang";
export const Page = ({ gap = 5, as = "div", ...props }: BoxProps) => (
  <Box as={as} gap={gap} {...props} />
);
export const Section = ({ gap = 2, as = "section", ...props }: BoxProps) => (
  <Box as={as} gap={gap} {...props} />
);
export const Container = ({ gap = 5, as = "div", ...props }: BoxProps) => (
  <Box as={as} gap={gap} {...props} />
);
