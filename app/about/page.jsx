"use client";
const about = {
    title: "About Me",
    description: "Hello! I’m Tafiyatul Jannat. As a MERN stack developer, I specialize in MongoDB for efficient data management, Express.js for building robust APIs, React for dynamic and interactive user interfaces, and Node.js for seamless integration between frontend and backend components. With expertise in both frontend and backend development, I design scalable solutions, implement RESTful APIs, and contribute to creating engaging single-page applications. Proficient in version control and adaptable to Agile methodologies, I stay updated on the latest advancements in the MERN stack to enhance project efficiency.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Tafiyatul Jannat"
        },
        {
            fieldName: "Birthday",
            fieldValue: "June 30th"
        },
        {
            fieldName: "Address",
            fieldValue: "Tangail,Dhaka,Bangladesh"
        },
        {
            fieldName: "Email",
            fieldValue: "tafiapinkey@gmail.com"
        },
    ]
}
const experience = {
    title: "About Me",
    description: "Hello! I’m Tafiyatul Jannat. As a MERN stack developer, I specialize in MongoDB for efficient data management, Express.js for building robust APIs, React for dynamic and interactive user interfaces, and Node.js for seamless integration between frontend and backend components. ",
    items: [
        {
            company: "tech solution",
            position: "frontend developer",
            duration: "2024-2024"
        },
        {
            company: "tech solution",
            position: "frontend developer",
            duration: "2024-2024"
        },
        {
            company: "tech solution",
            position: "frontend developer",
            duration: "2024-2024"
        },
        {
            company: "tech solution",
            position: "frontend developer",
            duration: "2024-2024"
        },
    ]

}


const education = {
    title: "My Education",
    description: "I am a Computer Science and Engineering graduate with a strong passion Web Development. HTML, CSS, Tailwind CSS, JavaScript,Typescript, React JS,Next JS, Redux,Node Js,Express Js.  I have built several projects.",
    items: [
        {
            institution: "Mawlana Bhashani Science and Technology university",
            subject: "Computer Science and Engineering",
            degree: "M.Sc",
            duration: "2024-prsent"
        },
        {
            institution: "Mawlana Bhashani Science and Technology university",
            subject: "Computer Science and Engineering",
            degree: "B.Sc",
            duration: "2019-2023"
        },
        {
            institution: "Shahid Syed Nazrul Islam College",
            subject: "Science",
            degree: "H.S.C",
            duration: "2015 -2017"
        },
        {
            institution: "Govt. Suti V M Pilot Model High School",
            subject: "Science",
            degree: "S.S.C",
            duration: "2010 - 2015"
        },



    ]
}
import Photo from "@/components/Photo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className=" min-h-[80vh] flex items-center mt-24 justify-center py-12 xl:py-0">
            <div className=" container mx-auto">
                <Tabs
                    defaultValue="about"
                    className=" flex flex-col xl:flex-row gap-[60px]">
                    <div className=" flex flex-col items-center">
                        <div className="  order-1 xl:order-none mb-8 xl:mb-8">
                            <Photo></Photo>
                        </div>

                        {/* <div>
                            <h3 className=" text-4xl font-bold"> {education.title}</h3>
                            <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                        </div> */}
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 order-2 xl:order-none ">
                            <TabsTrigger value="about"> About Me</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>

                        </TabsList>
                    </div>

                    <div className=" min-h-[100vh] w-full">
                        {/* <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className=" text-4xl font-bold"> {experience.title}</h3>
                                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className=" h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            experience.items.map((item, index) => {
                                                return (
                                                    <li key={index}
                                                        className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent"> {item.duration}</span>
                                                        <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className=" flex items-center gap-3">
                                                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className=" text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent> */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className=" text-4xl font-bold"> {education.title}</h3>
                                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className=" h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            education.items.map((item, index) => {
                                                return (
                                                    <li key={index}
                                                        className=" bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent"> {item.duration}</span>
                                                        <h3 className=" text-xl max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                                                        <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.subject}</h3>
                                                        <div className=" flex items-center gap-3">
                                                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className=" text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]  ">
                                <h3 className=" text-4xl font-bold"> {about.title}</h3>
                                <p className=" ] text-white/60 mx-auto xl:mx-0  ">{about.description}</p>
                                <ul className=" grid grid-cols-1  gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {
                                        about.info.map((item, index) => {
                                            return (
                                                <li key={index} className=" flex items-center justify-center xl:justify-start gap-4">
                                                    <span className=" text-white/60">{item.fieldName}:</span>
                                                    <span className=" text-xl">{item.fieldValue}</span>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>

                            </div>
                        </TabsContent>
                    </div>

                </Tabs>

            </div>
        </motion.div>
    );
};

export default About;