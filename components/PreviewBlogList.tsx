"use client"; // convert to a client side component;

import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query); // preview hook. This will give us all sanity posts as well as ones that aren't published.
  //   console.log("LOADING posts...", posts);
  return <BlogList posts={posts} />;
}
