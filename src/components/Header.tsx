import { logo, menu } from "@/assets";
import Image from "next/image";
import React from "react";
import "../app/globals.scss";
import { motion } from "framer-motion";
import { HeaderElements } from "@/utils/Contants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Header = () => {
  return (
    <div className="bg-primary font-semibold h-16 flex  text-gray-800 text-2xl items-center p-4 justify-between fixed w-full z-[50]">
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image src={logo} alt="logo" className="h-16 w-16 cursor-pointer" />
      </motion.button>

      <motion.div className="flex-1 hidden justify-end md:flex">
        {HeaderElements.map((menu: string) => (
          <motion.button
            key={menu}
            className="font-normal text-lg mx-2"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            variants={item}
          >
            {menu}
          </motion.button>
        ))}
      </motion.div>
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="block md:hidden"
      >
        <Image
          src={menu}
          alt="menu"
          className="h-16 w-16 cursor-pointer hover:scale-105"
        />
      </motion.button>
    </div>
  );
};

export default Header;
