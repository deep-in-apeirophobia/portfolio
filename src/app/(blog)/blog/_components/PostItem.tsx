"use client";
import { type Document } from "@/lib/standardsite";
import { getPostId } from "@/utils/blog-helpers";
import Link from "next/link";

export default function PostItem(props: { post: Document }) {
  const { post } = props;
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-zA-Z \-_]/g, "")
    .replace(/[ _]/g, "-");
  const id = getPostId(post);
  return (
    <Link
      href={`/blog/${slug}/${id}`}
      className="h-[200px] p-4 rounded-lg border border-solid border-white"
    >
      <h2 className="text-white text-lg font-bold">{post.title}</h2>
      <p className="text-white italic">{post.description}</p>
    </Link>
  );
}
