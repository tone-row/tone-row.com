import { ReactNode } from "react";
import { Box, Type } from "../slang";

export default function ImageWithCaption({
  children,
  caption,
}: {
  children: ReactNode;
  caption: ReactNode;
}) {
  return (
    <Box gap={2}>
      {children}
      <Type size={-3} color="color-secondary">
        {caption}
      </Type>
    </Box>
  );
}
