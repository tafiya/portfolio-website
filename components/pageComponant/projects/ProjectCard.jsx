"use client";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import { ExternalLink, ReceiptText } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const ProjectCard = ({ projects }) => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects?.projects?.data?.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });
  return (
    <div className="mt-10  mx-auto">
      <div className=" flex  mb-12  items-center justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          Explore My Projects
        </h2>
        <img src={"/assets/navIcon/project.gif"} width={70} height={70}></img>
      </div>
      {/* Tabs */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex  gap-4 mb-6">
          {["All", "Frontend", "Full-Stack"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects?.map((project) => (
          <div key={project._id}>
            <div className="w-full shadow-md overflow-hidden border-2 border-white/20 rounded-xl">
              <figure>
                <Image
                  src={project.image1 || "/placeholder.jpg"}
                  width={600}
                  height={100}
                  alt="project image"
                  className="rounded-t-lg h-64 w-full object-cover  transition-transform duration-300 hover:scale-105"
                />
              </figure>
              <div className="p-6">
                <div className="flex justify-between">
                  {/* <p className="flex items-center text-accent underline rounded-full py-1 text-sm">
                  <FaCalendar className="mr-2" />
                  {dayjs(project.createdAt).format("MM/DD/YYYY")}
                </p> */}
                  <p className="text-accent font-semibold">
                    {project.category}
                  </p>
                </div>
                <h2 className="text-2xl font-bold mt-2">
                  {project.title.length > 20
                    ? project.title.slice(0, 30) + "..."
                    : project.title}
                </h2>

                {/* Show User Name */}

                <p className="text-sm font-medium text-gray-500 mt-2">
                  By:{" "}
                  <span className="font-semibold text-accent hover:underline cursor-pointer">
                    Tafiyatul Jannat
                  </span>
                </p>

                <div className="flex items-center justify-between mt-5">
                  <div className=" flex items-center gap-4  ">
                    {project.liveLink && (
                      <Link href={project.liveLink} target="_blank">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center hover:bg-gray-700">
                              <ExternalLink className="text-accent text-xl" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                    {project.githubClientLink && (
                      <Link href={project.githubClientLink} target="_blank">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center hover:bg-gray-700">
                              <BsGithub className="text-accent text-xl" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>GitHub Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                  <Link href={`/projects/${project._id}`}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center hover:bg-gray-700">
                          {/* <Forward className="text-white text-xl" /> */}
                          <ReceiptText className="text-accent text-xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Details</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
