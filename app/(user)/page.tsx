import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
  *[_type=='post'] { // get me all the posts that are type posts
    ...,
    author->,
    categories[]-> // get full info
  } | order(_createdAt desc) // order by createdAt, desc
`;

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p
              className="
    text-center text-lg animate-pulse text-[#F7AB0A]"
            >
              Loading Preview Data...
            </p>
          </div>
        }
      >
        {/* Preview Blog list */}
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  // console.log(posts); // this gets rendered on the server since it's a server component
  return <BlogList posts={posts} />;
}
export default HomePage;
