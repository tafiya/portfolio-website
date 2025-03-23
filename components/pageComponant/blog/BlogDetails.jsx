"use client";

import dayjs from "dayjs";
import Image from "next/image";


// import { useTypewriter } from "react-simple-typewriter";

const BlogDetails = ({ blog }) => {
  const { title, content, blogImg,author,authorPicture, createdAt ,detail} = blog;

  //console.log(category);

//   const [typeEffect] = useTypewriter({
//     words: [category],
//     loop: true,
//     typeSpeed: 200,
//     delaySpeed: 100,
//   });

  //console.log(typeEffect);
  return (
    <div
      className="container 
    mx-auto my-24 pb-8 px-4"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile: Image at top; Desktop: Image on right */}
       

        <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
         

          {/* Desktop: Image Section */}
          <div className="hidden lg:block w-full lg:w-1/2">
            {blogImg? (
              <Image
                src={blogImg}
                alt={title}
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 rounded-xl">
                No Image Available
              </div>
            )}
          </div>
           {/* Details Section */}
           <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-2">
              {/* <div className="text-4xl font-medium text-white/25 text-outline h-10 capitalize">
                {typeEffect}
              </div> */}
              <h1 className="text-2xl font-bold text-white capitalize">
                {title}
              </h1>
              <p>
                {detail}
              </p>
              <div className="flex gap-4 items-center text-xm text-gray-500">
                <p>Publishing:</p>
                <div className="underline">
                  {dayjs(createdAt).format("MM-DD-YY")}
                </div>
              </div>

              <div className="flex items-center gap-4  p-3 rounded-lg">
                <Image
                  src={blog?.authorPicture || "/default-user.png"} // Add fallback image
                  alt={blog?.author || "User"}
                  width={25}
                  height={25}
                  className="rounded-full border-2 border-accent shadow-lg h-10 w-10"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-white">
                    {blog?.author || "Unknown"}
                  </span>
                  <span className="text-sm text-gray-400">Blog Author</span>
                </div>
              </div>

              <div className="border border-white/20"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
          {blogImg ? (
        <Image
        src={blogImg}
        alt={title}
        width={800}
        height={450}
        className="w-full h-auto object-cover rounded-xl mb-4"
      />
          ) : (
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600 rounded-xl mb-4">
              No Image Available
            </div>
          )}
        </div>

      {/* Description Section */}
      <div className="mt-8">
      <div
          className="text-white text-base mb-4 "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;