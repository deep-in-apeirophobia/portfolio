import { AtpAgent, BskyAgent } from "@atproto/api";

export const ATP_ID = process.env.ATP_IDENTIFIER!;

export const atpAgent = new AtpAgent({
  service: process.env.ATP_SERVICE!,
});

export const bskyAgent = new BskyAgent({
  service: "https://public.api.bsky.app/",
});
