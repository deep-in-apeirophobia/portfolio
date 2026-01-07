import { getPosts } from "@/lib/standardsite";
import PostItem from "./_components/PostItem";

export default async function BlogPosts() {
  const { posts, error } = await getPosts({});

  if (error) {
    <div>
      <h1> Something went wrong! </h1>
      <p>{error}</p>
    </div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[1200px] w-11/12 py-24 h-full md:h-[80%] flex flex-col gap-12">
        <h1 className="text-violet-200 font-bold text-3xl md:text-6xl">
          Atrin's Random Thoughts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(12)]
            .map(() => posts[0])
            .map((post) => (
              <PostItem key={post.uri} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
}
