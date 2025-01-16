import { motion } from 'framer-motion';
import Image from 'next/image';


const Photo = () => {
    return (
        <div className='relative flex justify-center'>
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}> */}
            {/* image */}
            <motion.div initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                }} className='w-[298px] h-[298px] xl:w-[350px] xl:h-[350px] mix-blend-lighten  absolute'>
                <Image src="/assets/profileImage/about.png"
                    priority
                    quality={100}
                    fill alt=''
                    className='object-contain rounded-full '></Image>

            </motion.div>
            {/* circle */}
            <motion.svg className=" -mt-4 w-[350px] xl:w-[420px] xl:h-[400px]
                " fill=" transparent"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg">
                <motion.circle
                    cx="250"
                    cy="250"
                    r="230"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}></motion.circle>

            </motion.svg>
            {/* </motion.div> */}

        </div>
    );
};

export default Photo;