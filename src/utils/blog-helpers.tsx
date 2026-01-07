import { type Document } from "@/lib/standardsite";

export function getPostId(post: Document) {
  const sections = post.uri.split("/");
  return sections[sections.length - 1];
}
