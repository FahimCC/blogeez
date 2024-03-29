import LoadingCard from '@/components/ui/LoadingCard';
import { BLog } from '@/types';
import React from 'react';

const BlogLoadingPage = async() => {

    const res = await fetch(`http://localhost:8000/blogs`)
    const blogs = await res.json();
    return (
        <div>
            {
                blogs?.map((blog: BLog) =><LoadingCard key={blog.id}/>)
            }
        </div>
    );
};

export default BlogLoadingPage;