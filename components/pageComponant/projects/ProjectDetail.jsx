"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import { useTypewriter } from "react-simple-typewriter";
import InnerHTML from "dangerously-set-html-content";

// import { ScrollArea } from "../ui/scroll-area";
import { FaCalendar } from "react-icons/fa6";
import dayjs from "dayjs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink } from "lucide-react";

const ProjectsDetails = ({ project }) => {
  const {
    title,
    details,
    mainImg,
    liveLink,
    githubServerLink,
    githubClientLink,
    stack,
    category,
  } = project;
  const formattedDetails = details
    .replace(/<h2>/g, '<h1 style="color: #a4d2df; font-size: 2.5rem;">') // Red color and larger font for h1
    .replace(/<h3>/g, '<h2 style="color: #a4d2df; font-size: 2rem;">') // Green color and medium font for h2
    .replace(/<li>/g, '<p style="color: #999999; ">')
    .replace(/<p>/g, '<p style="font-weight:600; color: #999999; ">');

  //   const [typeEffect] = useTypewriter({
  //     words: [category],
  //     loop: true,
  //     typeSpeed: 200,
  //     delaySpeed: 100,
  //   });
  return (
    <div className="container mx-auto my-20 px-4 pb-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile: Image at top; Desktop: Image on right */}
        <div className="lg:hidden">
          {mainImg ? (
            <Image
              src={mainImg}
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

        <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
          {/* Details Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center mt-10">
            <div className="space-y-8">
              <div className="text-4xl font-medium text-balance h-10 text-accent ">
                {title}
              </div>
              <h1 className="text-3xl font-bold text-white capitalize">
                {category} Project
              </h1>
              <p className=" text-white/60">{project?.shortDetails}</p>
              <div>
                <ul className="flex flex-wrap gap-2">
                  {stack &&
                    stack.map((item, index) => (
                      <li key={index} className="text-lg text-accent">
                        {item.name}
                        {index !== stack.length - 1 && ","}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="flex items-center gap-4  p-3 rounded-lg">
                {/* <Image
                  src={project?.user?.image || "/default-user.png"} // Add fallback image
                  alt={project?.user?.name || "User"}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-accent shadow-lg h-14 w-14"
                /> */}
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-white">
                    Tafiyatul Jannat
                  </span>
                  <span className="text-sm text-gray-400">Project Author</span>
                </div>
              </div>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {liveLink && (
                  <Link href={liveLink}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center">
                          <ExternalLink className="text-accent text-3xl group-hover:text-white" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {githubClientLink && (
                  <Link href={githubClientLink}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center">
                          <BsGithub className="text-accent text-3xl group-hover:text-white" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Client Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {githubServerLink && (
                  <Link href={githubServerLink}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center">
                          <BsGithub className="text-accent text-3xl group-hover:text-white" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Server Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Desktop: Image Section */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <ScrollArea className="h-[600px]">
              {mainImg ? (
                <Image
                  src={mainImg}
                  alt={title}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 rounded-xl">
                  No Image Available
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      </div>

      <div className=" flex flex-wrap">
        <InnerHTML html={formattedDetails} />
      </div>
    </div>
  );
};

export default ProjectsDetails;
