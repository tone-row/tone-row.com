import React, { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { Box } from "../slang";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const animationKey = pathname.split("/")[1];
  return (
    <Box gap={1} p={2}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={animationKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.125 }}
        >
          <Box as="main">{children}</Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
