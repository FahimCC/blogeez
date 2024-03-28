import BlogDetails from "@/components/ui/BlogDetails";
import { BLog } from "@/types";
import React from "react";

interface BlogId {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:8000/blogs`);
  const blogs = await res.json();
  return blogs?.slice(0, 10).map((blog: BLog) => ({
    blogId: blog.id,
  }));
};

const page = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:8000/blogs/${params?.blogId}`, {
    cache: "no-store", //by default no-store
  });
  const blog = await res.json();

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default page;
