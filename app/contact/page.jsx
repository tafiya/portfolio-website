"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_72mwp9m",
        "template_lbisfz6",
        form.current,
        "7vB9MUlUwmF8Xapqi"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          toast.success("Successfully sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=""
    >
      <div className="container mx-auto my-20 ">
        <div className=" flex items-center justify-center">
          <h2 className="text-xl  mb-12 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            Contact Me
          </h2>
          <img src={"/assets/navIcon/contact.gif"} width={70} height={70}></img>
        </div>
        {/* {/form */}
        <div className=" order-2 xl:order-none flex items-center justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 p-10 md:w-2/3 bg-[#27272c] rounded-xl"
          >
            <h3 className="text-4xl text-accent">Lets work together</h3>
            <p className="text-white/60">
              Feel free to reach out to us with your queries and suggestions.
            </p>
            {/* / Ιπουτ */}
            <div className="grid grid-cols-1  gap-6">
              <Input type="name" name="name" placeholder="FullName" />

              <Input type="email" name="email" placeholder="Email address" />
              <Input type="phone" name="phone" placeholder="Phone number" />
              <Textarea
                name="message"
                className="h-[100px]"
                placeholder="Type your message here.."
              ></Textarea>
              <div className=" flex items-center justify-center">
                <Button
                  size="md"
                  className="max-w-40 px-4 py-3 bg-accent text-md text-black hover:text-accent hover:border-accent"
                >
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </motion.section>
  );
};

export default Contact;
