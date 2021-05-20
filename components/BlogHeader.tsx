import { motion } from "framer-motion";
import React from "react";
import { Post } from "../lib/api";
import { formatDate } from "../lib/helpers";
import { Section } from "./structure";
import { Medium, Small } from "./typography";

export default function BlogHeader({ post }: { post: Post }) {
  return (
    <Section>
      <Medium>
        <strong>{post.title}</strong>
      </Medium>
      <Small as={motion.span}>{formatDate(post.published)}</Small>
    </Section>
  );
}
