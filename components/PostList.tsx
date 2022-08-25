import Link from "next/link";
import React from "react";
import { Post } from "../lib/api";
import { formatDate } from "../lib/helpers";
import { Box } from "../slang";
import { Medium, Small } from "./typography";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts
        .sort((a, b) => b.published.localeCompare(a.published))
        .map((post) => (
          <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
            <Box as="a" gap={1}>
              <Medium>{post.title}</Medium>
              <Small>{formatDate(post.published)}</Small>
            </Box>
          </Link>
        ))}
    </>
  );
}
