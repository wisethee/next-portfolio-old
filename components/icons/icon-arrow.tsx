import { motion } from "framer-motion";
import { transform } from "typescript";

const IconArrow = ({
  stroke,
  strokeOnHover,
  fill,
  fillOnHover,
}: {
  stroke: string;
  strokeOnHover: string;
  fill: string;
  fillOnHover: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    id="icon-arrow"
  >
    <motion.circle
      cx={16}
      cy={16}
      r={4}
      variants={{
        rest: { fill: fill, scale: 1, opacity: 1 },
        hover: {
          fill: fillOnHover,
          scale: 0,
          opacity: 0,
          transition: { duration: 0.3 },
        },
      }}
    />
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.333 16.667 16 22l-5.333-5.333M16 22V10"
      variants={{
        rest: { stroke: stroke, scale: 0.25, opacity: 0 },
        hover: {
          stroke: strokeOnHover,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.1,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      }}
    />
  </svg>
);

export default IconArrow;
