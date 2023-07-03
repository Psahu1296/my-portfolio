import React from "react";
import { motion } from "framer-motion";
import { spinIn } from "@/utils/Motion";
import { TECHNOLOGIES } from "@/utils/Contants";
import { ITechnologies } from "@/utils/Types";
import Image from "next/image";

const Tooling = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.div
        className="bg-[#12141d] rounded-xl text-primary shadow-[0_0_4px_1px_#14e956] border-[2px] border-[#14e956] px-6 py-2 mt-8"
        variants={spinIn("anti-clock", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-2xl uppercase">Technologies</h2>
      </motion.div>

      <motion.div className="bg-primary flex w-[70%] flex-wrap rounded-2xl justify-center mt-12"
      variants={spinIn("clock", "tween", 0.2, 3)}
      initial="hidden"
      animate="show"
      >
        {TECHNOLOGIES.map(({ tech, icon }: ITechnologies) => (
          <div className="m-[1%] bg-[#021709] text-white flex h-[50px] md:h-[60px] items-center rounded-lg flex-[0_1_18%] p-2 min-w-[150px]">
            <Image src={icon} alt={tech} className="h-6 w-6 mr-4" />
            <p className="text-[16px]">{tech}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tooling;
