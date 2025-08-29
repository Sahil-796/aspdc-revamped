import { zenblog } from "./zenblog";

//  posts
export async function getAllPosts() {
  return await zenblog.posts.list();
}

// single post by slug
export async function getPostBySlug(slug: string) {
  return await zenblog.posts.get({ slug });
}