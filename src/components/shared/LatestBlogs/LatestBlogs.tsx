import BlogCard from "@/components/ui/BlogCard";
import LatestBlogCard from "@/components/ui/LatestBlogCard";
import { BLog } from "@/types";
import React from "react";

const LatestBlogs = ({ blogs }: { blogs: BLog[] }) => {
  return (
    <div className="">
      <h1 className="text-center text-4xl">
        Latest Blogs From <strong className="text-accent">Blogeez</strong>
      </h1>
      <p className="text-gray-400 mt-2 mb-4 w-1/3 mx-auto text-center">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-5 mt-7">
        {blogs?.slice(0, 2)?.map((blog) => (
          <LatestBlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 mt-7">
        {blogs?.slice(2, 5)?.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
