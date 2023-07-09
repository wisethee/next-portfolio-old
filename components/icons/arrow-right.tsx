import { motion } from "framer-motion";

const ArrowRight = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.5 6h9M6.5 2l4 4-4 4"
    />
  </motion.svg>
);
export default ArrowRight;
