"use server";

import { atpAgent, bskyAgent, ATP_ID } from "./atproto";
import * as pub from "@/lexicons/pub";
import { l } from "@atproto/lex";

export type Document = pub.leaflet.document.Main & {
  uri: l.AtUriString;
};

export async function getPosts({
  cursor,
  limit = 20,
}: {
  cursor?: string | undefined;
  limit?: number;
}): Promise<{ posts: Document[]; error: string | null }> {
  const res = await atpAgent.com.atproto.repo.listRecords({
    // collection: "site.standard.document",
    collection: "pub.leaflet.document",
    repo: ATP_ID,
    // cursor: cursor,
    // limit: limit,
  });

  if (!res.success) return { posts: [], error: "Failed to fetch posts" };

  const posts = res.data.records
    .filter((p) => p.value.publication === process.env.LEAFLET_PUB_ID!)
    .map((p) => ({
      cid: p.cid,
      uri: p.uri,
      ...(p.value as pub.leaflet.document.Main),
    })) as Document[];

  return { posts, error: null };
}
