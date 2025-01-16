"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const skillList = [
    {
        name: "HTML5",
        image: "/assets/skill/html-5.png"

    },
    {
        name: "CSS",
        image: "/assets/skill/css-3.png"

    },
    {
        name: "Javascript",
        image: "/assets/skill/js.png"

    }
    ,
    {
        name: "Typescript",
        image: "/assets/skill/typescript.png"

    },
    {
        name: "Tailwind CSS",
        image: "/assets/skill/tailwind.png"

    },
    {
        name: "React Js",
        image: "/assets/skill/react.png"

    }
    ,
    {
        name: "Next Js",
        image: "/assets/skill/next.png"

    },
    {
        name: "Redux",
        image: "/assets/skill/redux.png"

    },
    {
        name: "Material UI",
        image: "/assets/skill/materialui.png"
    },
    {
        name: "Node Js",
        image: "/assets/skill/node.png"
    },
    {
        name: "Express Js",
        image: "/assets/skill/express.png"
    },
    {
        name: "MongoDB",
        image: "/assets/skill/mongodb.png"
    }
    ,
    {
        name: "MySQL",
        image: "/assets/skill/mysql.png"
    },
    {
        name: "C",
        image: "/assets/skill/c.png"
    },
    {
        name: "C++",
        image: "/assets/skill/c++.png"
    },
    {
        name: "Shadcn UI",
        image: "/assets/skill/shadcn.png"
    }
]
const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className=" min-h-[80vh] flex flex-col items-center mt-24  py-12 xl:py-0 ">

            <h2 className="text-xl mb-12 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                My Skills
            </h2>
            <div className=" container mx-auto flex items-center justify-center">
                <div className=' grid items-center  w-2/3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>

                    {
                        skillList.map((skill, index) => <TooltipProvider delayDuration={80} key={skill.name}>
                            <Tooltip>
                                <TooltipTrigger className=''>
                                    <div className={`w-20 h-20 ${index === skillList.length - 1 ? "md:col-span-5 justify-self-center" : ""
                                        } `}>  <img src={skill.image} className='shadow-accent shadow-md hover:shadow-xl hover:shadow-accent '></img></div>

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

export default Skills;