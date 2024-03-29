"use server";

import { BLog } from "@/types";

export const createBlog = async (data:BLog) => {
    const res = await fetch(`http://localhost:8000/blogs`,{
        method: "POST",
        headers: { 
          "Content-type": "application/json"
        },
        body: JSON.stringify(data),
        cache: "no-store"
    });

    const blogInfo = await res.json();
    return blogInfo
}