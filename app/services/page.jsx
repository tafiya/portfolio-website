"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const services = [
    {
        num: "01",
        title: "Frontend Development",
        Description: "I create responsive, user-friendly interfaces using HTML, CSS, JavaScript, React.js, and Next.js. From custom UI/UX design to SPAs and TypeScript integration, I build frontends that enhance user experience across all devices.",
        href: ""
    },
    {
        num: "02",
        title: "Backend Development",
        Description: "I develop secure and scalable backend solutions with Node.js, Express.js, MongoDB, and MySQL. My services include RESTful API development, database management, and performance optimization to ensure a robust backend for your application.",
        href: ""
    },
    {
        num: "03",
        title: "Full Stack Development",
        Description: "As a full-stack developer, I offer end-to-end web development, integrating frontend and backend seamlessly for a complete, optimized solution. I handle everything from development to deployment and ongoing maintenance.",
        href: ""
    },
    {
        num: "04",
        title: "Problem Solving and Optimization",
        Description: "With a focus on efficiency, I solve complex coding issues, debug, and optimize code for better performance. I offer consultation on algorithms and data structures to enhance your application’s quality and reliability.",
        href: ""
    }

]
const page = () => {
    return (
        <section className="flex flex-col justify-center py-12 mt-20 xl:py-0">
            <div className=" container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className=" grid grid-cols-1  md:grid-cols-2 gap-[60px]">
                    {services.map((service, index) => {
                        return (<div key={index} className="flex flex-1 flex-col justify-center  gap-3 group" >
                            <div className=" w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link href={service.href}
                                    className=" w-12 h-12  rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-3xl" /></Link>
                            </div>
                            <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            <p className=" text-white/60 group-hover:text-white">{service.Description}</p>
                            <div className="border-b border-white/20 w-full group-hover:bg-accent"></div>
                        </div>)
                    })}
                </motion.div>

            </div>

        </section>
    );
};

export default page;