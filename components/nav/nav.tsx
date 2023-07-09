"use client";

import { motion } from "framer-motion";
import Logo from "@/components/icons/logo";
import ArrowRight from "@/components/icons/arrow-right";

const Nav = () => {
  return (
    <nav className="absolute flex items-center h-24 w-full px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="flex flex-grow basis-0 justify-start">
        <Logo />
      </div>

      <div className="flex flex-grow basis-0 justify-center">
        <ul className="flex gap-x-16">
          <li className="text-label-large uppercase">Skills</li>
          <li className="text-label-large uppercase">Works</li>
          <li className="text-label-large uppercase">Insights</li>
        </ul>
      </div>

      <div className="flex flex-grow basis-0 justify-end items-center">
        <motion.button className="inline-flex items-center gap-2">
          <span className="text-label-large uppercase">Let&apos;s talk</span>
          <ArrowRight />
        </motion.button>
      </div>
    </nav>
  );
};
export default Nav;
