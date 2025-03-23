import { getAllTBlogs } from '@/service';
import React from 'react';
import Blogs from '@/components/pageComponant/blog/Blogs';

const BlogPage = async() => {
    const {data}=await getAllTBlogs()

    return ( <div>
           <Blogs  blogs={{ data }}></Blogs>
            
        </div>
 
    );
};

export default BlogPage;