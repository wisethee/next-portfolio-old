import { motion } from "framer-motion";

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
          scale: 4,
          opacity: [null, 0.12, 0],
          transition: {
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          },
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
          scale: [null, 1.2, 1],
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      }}
    />
  </svg>
);

export default IconArrow;
