"use client";
import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
const Blogs = ({ blogs }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" min-h-[80vh]  container mx-auto my-24 justify-center pb-12"
    >
      <div className=" flex items-center justify-center">
        <h2 className="text-xl  mb-12 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          Latest Blogs
        </h2>
        <img src={"/assets/navIcon/blog.gif"} width={70} height={70}></img>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {blogs?.data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
