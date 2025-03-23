"use client";
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const SkillPage = ({skillList}) => {

    return (
          <motion.div initial={{ opacity: 0 }}
                  animate={{
                      opacity: 1,
                      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                  }}
                  className=" min-h-[80vh] flex flex-col items-center my-24  pb-12 ">
      
                  <h2 className="text-xl mb-12 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                      My Skills
                  </h2>
                  <div className=" container mx-auto flex items-center justify-center">
                      <div className=' flex flex-wrap items-center max-w-2xl   gap-12 justify-center'>
      
                          {
                              skillList.data.map((skill, index) => <TooltipProvider delayDuration={80} key={skill.name}>
                                  <Tooltip>
                                      <TooltipTrigger className=''>
                                          <div className={`w-20 h-20 ${index === skillList.length - 1 ? "md:col-span-5 justify-self-center" : ""
                                              } `}>  <img src={skill.img} className='shadow-accent shadow-md hover:shadow-xl hover:shadow-accent '></img></div>
      
                                      </TooltipTrigger>
                                      <TooltipContent>
                                          {skill.name}
                                      </TooltipContent>
                                  </Tooltip>
                              </TooltipProvider>)
                          }
      
                      </div>
                  </div>
      
              </motion.div>
    );
};

export default SkillPage;