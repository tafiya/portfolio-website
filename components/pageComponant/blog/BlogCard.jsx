"use client"
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import dayjs from "dayjs";
import {  Share2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-xl  shadow-lg overflow-hidden flex flex-col border border-accent/50">
      {/* Blog Image */}
      <div className="relative w-full h-56">
        <Image
          src={blog.blogImg}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Date */}
        <div className="flex items-center text-accent text-sm mb-2">
          <FaCalendar className="mr-1" />
          {dayjs(blog.createdAt).format("MMM D, YYYY")}
        </div>

        <p className="capitalize text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-glow">
          {/* {blog.category} */}
        </p>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-300 mb-2 line-clamp-2">
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-400 flex-1 line-clamp-3">
          {blog.detail.slice(0, 60) }<Link className=" text-accent text-xl" href={`/blogs/${blog._id}`}> Read More...</Link>
        </p>

        {/* Footer: Details button and Author info */}
        <div className="flex items-center justify-between mt-3 px-2 ">
    
          {/* Author Info */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <Image
                src={blog?.authorPicture|| "/default-avatar.png"}
                alt={blog?. author}
                fill
                className="rounded-full object-cover border-2 border-accent"
              />
            </div>
            <div className="flex flex-col">
                  <span className="text-sm font-semibold text-accent ">
                    {blog?.author || "Unknown"}
                  </span>
                  <span className="text-xs text-gray-400">Blog Author</span>
                </div>
            {/* <span className="text-gray-300 text-sm hover:text-accent hover:underline cursor-pointer">
              {blog?. author}
            </span> */}
          </div>
          <Link href={`/blogs/${blog._id}`}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center hover:bg-gray-700   ">
                  <Share2 className=" text-xl text-accent" />
               
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share Now</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
