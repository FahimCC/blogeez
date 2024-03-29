// import BlogCard from "@/components/ui/BlogCard";
// import { BLog } from "@/types";
// import React from "react";

// const BlogsPage = async () => {
//   //SSR - Server Site Rendering
//   const res = await fetch(`http://localhost:8000/blogs`, {
//     cache: "no-store",
//   });
//   const blogs = await res.json();
//   return (
//     <div>
//       <h1 className="text-center text-4xl">
//         All Blogs From <strong className="text-accent">Blogeez</strong>
//       </h1>
//       <p className="text-gray-400 mt-3 w-1/3 mx-auto text-center">
//         <i>
//           Dive into the fascinating world of quantum computing, where unlocking
//           unprecedented computational power.
//         </i>
//       </p>

//       <div className="grid grid-cols-3 gap-5 mt-7">
//         {blogs.map((blog: BLog) => (
//           <BlogCard key={blog?.id} blog={blog} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;

//!client site rendering

"use client"
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { BLog } from "@/types";
import React from "react";

const BlogsPage = () => {
  //SSR - Server Site Rendering

  const {data:blogs, isLoading, isError, error} = useGetBlogsQuery("")
  return (
    <div>
      <h1 className="text-center text-4xl">
        All Blogs From <strong className="text-accent">Blogeez</strong>
      </h1>
      <p className="text-gray-400 mt-3 w-1/3 mx-auto text-center">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      <div className="grid grid-cols-3 gap-5 mt-7">
        {blogs?.map((blog: BLog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

