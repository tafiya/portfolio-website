"use client"
import ParticleContainer from "@/components/ParticleContainer";
import Social from "@/components/Social";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <main className="relative w-full h-screen">
      {/* Particles background */}
      <ParticleContainer />

      {/* Text container */}
      <div className="relative z-10 flex -mt-6 items-center justify-center h-full text-center p-4">
        <div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Tafiyatul Jannat
            </h2>
            {/* position */}
            <h2 className="text-xl mt-5 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "MERN Stack Developer",
                  "Full Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>
          <div className=" mt-8 flex items-center justify-center">
            <Social containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"></Social>
          </div>

          <div className=" my-5">
            <a href="/assets/resume/Tafiyatul_Jannat-Resume(Full Stack developer).pdf"> <button className="text-xl box-border border-4 uppercase border-accent w-48 h-14 rounded-full  text-white relative group"><span className="pr-8">Resume</span><span className="bg-accent  absolute right-0 top-0  h-full flex items-center justify-center rounded-full px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300"><FiDownload color="black" /></span></button></a>

          </div>
        </div>



      </div>
    </main>
  );
}
