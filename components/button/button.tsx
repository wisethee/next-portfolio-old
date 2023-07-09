"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type LabelOrder = "first" | "last";

import IconArrow from "../icons/icon-arrow";

const buttonVariants = {
  rest: {
    // border: "2px solid #000000",
    // backgroundColor: "#000000",
    // color: "#ffffff",
  },
  hover: {
    // backgroundColor: "#ffffff",
    // border: "2px solid #000000",
    // color: "#000000",
    // transition: {
    //   duration: 0.3,
    //   ease: [0, 0.71, 0.2, 1.01],
    // },
  },
};

const Button = ({
  children,
  labelOrder,
}: {
  children: React.ReactNode;
  labelOrder: LabelOrder;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonPadding = labelOrder === "last" ? "pl-4 pr-8" : "pl-8 pr-4";
  const buttonLabelOrder = `order-${labelOrder}`;

  return (
    <motion.button
      className={`inline-flex items-center gap-2 text-label-large uppercase rounded-full bg-black text-white h-14 overflow-hidden ${buttonPadding}`}
      variants={buttonVariants}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <IconArrow
        stroke="#000000"
        strokeOnHover="#ffffff"
        fill="#ffffff"
        fillOnHover="#ffffff"
      />
      <span className={buttonLabelOrder}>{children}</span>
    </motion.button>
  );
};

export default Button;
