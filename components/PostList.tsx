import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Post } from "../lib/api";
import { formatDate } from "../lib/helpers";
import { Box } from "../slang";
import { Large, Small } from "./typography";

const BlogPostLink = styled.a`
  text-decoration: none;
  .underline {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
`;

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts
        .sort((a, b) => b.published.localeCompare(a.published))
        .map((post) => (
          <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
            <Box as={BlogPostLink} gap={2}>
              <Large className="underline">{post.title}</Large>
              <Small>{formatDate(post.published)}</Small>
            </Box>
          </Link>
        ))}
    </>
  );
}
