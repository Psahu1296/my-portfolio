import { url } from "inspector";
import React from "react";
import Bg from "../assets/hero-bg.svg";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/Motion";
import Image from "next/image";
import { handIcon, hero } from "@/assets";
const Hero = () => {
  return (
    <motion.div
      className="main px-8 py-8 md:py-16 md:pt-16 md:h-screen  flex flex-col md:flex-row justify-around"
      layout
      style={{
        backgroundImage: `linear-gradient(
        to right bottom,
     rgba(5, 8, 16, 0.6),
        rgba(5, 8, 16, 0.6)
       ),url(${Bg.src})`,
      }}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col md:w-1/2  mt-24"
        initial="hidden"
        animate="show"
      >
        <div className="pe-4 ps-2 py-2 md:mb-8 bg-green-deem text-primary flex justify-between items-center  rounded-xl w-fit">
          <motion.p
            className="mb-2 me-2"
            animate={{ rotate: 45 , x:7}}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <Image src={handIcon} alt="hi" className="h-8 w-8"/>
          </motion.p>
          <p>Hi There! I'm Pushpendra</p>
        </div>
        <h1 className="text-3xl sm:text-[2.3rem] md:text-5xl mt-4">A <span className="text-primary">Frontend Engineer</span>. I help startups <span className="text-primary">launch</span> and <span className="text-primary">grow</span> their products</h1>
        <p className="opacity-80 lowercase tracking-wider mt-4 leading-8">I am a software engineer with more than four years of experience. Recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget.</p>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-col "
        initial="hidden"
        animate="show"
      >
        <Image src={hero} alt="hero-img" className=" h-96 md:h-[366px] w-auto" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
