"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ExternalLink, ReceiptText } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsPage = ({ projects }) => {
  const [project, setProject] = useState(projects?.data[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects.data[currentIndex]);
  };

  return (
    <div className=" pb-24">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="main-h-[80vh] flex flex-col justify-center my-24 "
      >
        <div className=" container mx-auto">
          <div className=" flex flex-col xl:flex-row xl:gap-[30px] ">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className=" flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className=" text-8xl leading-none text-accent font font-extrabold text-transparent text-outline">
                  {project?.num}
                </div>
                {/* project category */}
                <h2 className="text-[28px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                  {project?.category}
                </h2>
                <h2 className="text-[42px] font-bold leading-none  text-[#a4d2df] group-hover:text-accent transition-all duration-500 capitalize">
                  {project?.title}
                </h2>
                {/* project description */}
                <p className=" text-white/60">{project?.shortDetails}</p>
                {/* stack */}
                <ul className="flex flex-wrap items-center justify-center gap-2">
                  {project?.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* border */}
                <div className=" border border-white/20"></div>
                {/* buttons */}
                <div className=" flex items-center gap-4">
                  {/* live link */}
                  <Link href={project?.githubClientLink}>
                    <TooltipProvider delayDuration={80}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px]
                                            rounded-full bg-white/5 flex justify-center items-center group "
                        >
                          <ExternalLink className=" text-accent text-3xl group-hover:text-white"></ExternalLink>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github */}
                  <Link href={project?.githubClientLink}>
                    <TooltipProvider delayDuration={80}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px]
                                            rounded-full bg-white/5 flex justify-center items-center group "
                        >
                          <BsGithub className=" text-accent text-3xl group-hover:text-white" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* Details  button */}
                  <Link href={`/projects/${project._id}`}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <ReceiptText className="text-accent text-3xl group-hover:text-white" />
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
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                {projects?.data.map((project) => {
                  return (
                    <SwiperSlide key={project.title} className="w-full">
                      <div className=" h-[468px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={project?.image1}
                            fill
                            className="object-cover"
                            alt=""
                          ></Image>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSliderBtns
                  containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles=" bg-accent flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="container mx-auto mt-10 md:mt-36 h-auto">
        <ProjectCard projects={{ projects }} />
      </div>
    </div>
  );
};

export default ProjectsPage;
