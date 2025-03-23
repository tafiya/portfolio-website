"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import React from "react";

const ServicePage = ({ services }) => {
  return (
    <section className="flex flex-col justify-center pb-12 my-24">
      <div className=" flex items-center justify-center">
        <h2 className="text-xl  mb-12 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          Explore Services
        </h2>
        <img src={"/assets/navIcon/service.gif"} width={70} height={70}></img>
      </div>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className=" grid grid-cols-1  md:grid-cols-2 gap-[60px]"
        >
          {services?.data?.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center  gap-3 group"
              >
                <div className=" w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href="#"
                    className=" w-12 h-12  rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className=" text-white/60 group-hover:text-white">
                  {service.description}
                </p>
                <div className="border-b border-white/20 w-full group-hover:bg-accent"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
