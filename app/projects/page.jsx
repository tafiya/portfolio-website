"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import WorkSliderBtns from '@/components/WorkSliderBtns';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const projects = [
    {
        num: "01",
        category: "FullStack",
        title: "ChatNook",
        description: "An online platform where people can hold conversations in the form of posted messages.Use dashboard layout for normal admin and use CRUD operations.Added payment method, user token member by payment",
        stack: [{ name: "React.Js" }, { name: "Tailwind" }, { name: "Node.Js" }, { name: "Express.Js" }, { name: "MongoDb" }],
        image: "/assets/projects/chatNook.png",
        live: "https://bistro-boss-client-ff83b.web.app/",
        github: "https://github.com/tafiya/chat-nook-client"
    },
    {
        num: "02",
        category: "MERN Stack",
        title: "MeetWave (Team Project)",
        description: "An online meeting platform with high-quality video and audio and collaborative tools. Create a dynamic meeting link and schedule meeting time. Video and audio recording, sharing screens, exchanging messages.",
        stack: [{ name: "React.Js" }, { name: "Tailwind" }, { name: "Node.Js" }, { name: "Express.Js" }, { name: "MongoDb" }],
        image: "/assets/projects/meetwave.png",
        live: "https://meet-wave.vercel.app/",
        github: "https://github.com/Ashik-Himel/meet-wave-client"
    },
    {
        num: "03",
        category: "MERN Stack",
        title: "GREENMIND",
        description: "A E-commerce Product Review Platform where user can review product and see products.Display products with search, categories, filters, and detailed views including images, prices, and ratings. Allow users to view and submit reviews and ratings",
        stack: [{ name: "ReactJs" }, { name: "Tailwind" }, { name: "Node Js" }, { name: "Express Js" },
        { name: "MongoDb" }],
        image: "/assets/projects/greenmind.png",
        live: "https://ecomerce-product-review.web.app/",
        github: "https://github.com/tafiya/ecomerce-product-review-client"
    },

]

const Projects = () => {
    const [project, setProject] = useState(projects[0])
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        console.log("current", currentIndex)
        setProject(projects[currentIndex])
    }
    console.log(project)
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="main-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className=" container mx-auto">
                <div className=" flex flex-col xl:flex-row xl:gap-[30px] ">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className=' flex flex-col gap-[30px] h-[50%]'>
                            {/* outline num */}
                            <div className=" text-8xl leading-none font font-extrabold text-transparent text-outline ">
                                {project?.num}
                            </div>
                            {/* project category */}
                            <h2 className='text-[28px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize'>
                                {project?.category} project
                            </h2>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {project?.title}
                            </h2>
                            {/* project description */}
                            <p className=' text-white/60'>
                                {project?.description}</p>
                            {/* stack */}
                            <ul className='grid grid-cols-3 xl:grid-cols-4 gap-2'>
                                {
                                    project?.stack.map((item, index) => {
                                        return (
                                            <li key={index} className='text-xl text-accent'>
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            {/* border */}
                            <div className=' border border-white/20'>
                            </div>
                            {/* buttons */}
                            <div className=' flex items-center gap-4'>
                                {/* live link */}
                                <Link href={project?.live}>
                                    <TooltipProvider delayDuration={80}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px]
                                            rounded-full bg-white/5 flex justify-center items-center group '>
                                                <BsArrowUpRight className=' text-white text-3xl group-hover:text-accent'></BsArrowUpRight>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider></Link>
                                {/* github */}
                                <Link href={project?.github}>
                                    <TooltipProvider delayDuration={80}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px]
                                            rounded-full bg-white/5 flex justify-center items-center group '>
                                                <BsGithub className=' text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider></Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30} slidesPerView={1}
                            className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className='w-full'>
                                    <div className=' h-[468px] relative group flex justify-center items-center bg-pink-50/20'>
                                        <div className=' absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                        <div className='relative w-full h-full'>
                                            <Image src={project?.image} fill className='object-cover' alt=''></Image>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            })
                            }
                            <WorkSliderBtns containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles=" bg-accent flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;