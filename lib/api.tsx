import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

export interface Post {
  title: string;
  published: string;
  content: string;
  slug: string;
  preview: string;
}

const POSTS_DIRECTORY = path.join(process ? process.cwd() : "./", "content");

const { readdir, readFile } = fs.promises;

export async function getPostPaths() {
  return (await readdir(POSTS_DIRECTORY)).map((dir) => ({
    params: { slug: dir },
  }));
}

export async function getPostBySlug(slug: string) {
  const file = path.join(POSTS_DIRECTORY, slug, "index.mdx");
  const contents = await readFile(file);
  const { data, content } = matter(contents);

  return {
    ...data,
    published: data.published.toISOString(),
    content,
    slug,
  } as Post;
}

export async function getPosts() {
  const paths = await getPostPaths();
  let posts: Post[] = [];
  for (const path of paths) {
    const post = await getPostBySlug(path.params.slug);
    posts.push(post);
  }
  return posts;
}

export const prepareMDX = async (
  source: string,
  files?: Record<string, string>
) => {
  const { code } = await bundleMDX(source, {
    files,
  });

  return code;
};
