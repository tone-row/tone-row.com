import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import BlogHeader from "../../components/BlogHeader";
import BlogLayout from "../../components/BlogLayout";
import { Container, Section } from "../../components/structure";
import { getPosts, Post } from "../../lib/api";

type Contract = {
  posts: Post[];
};

const NoUnderline = styled.a`
  text-decoration: none;
`;

const LeftContainer = styled.div`
  margin-left: 0;
`;

export default function Blog({ posts }: Contract) {
  return (
    <BlogLayout>
      <Container as={LeftContainer}>
        <Section>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <NoUnderline>
                <BlogHeader post={post} />
              </NoUnderline>
            </Link>
          ))}
        </Section>
      </Container>
    </BlogLayout>
  );
}

export const getStaticProps: GetStaticProps<Contract> = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
