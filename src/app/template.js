"use client";

import { motion } from "framer-motion";

const templateVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "linear",
      delay: 0.2,
      duration: 0.4,
    },
  },
};

export default function Template({ children }) {
  return (
    <motion.main
      className="min-h-[calc(100vh-100px)] sm:mt-[185px]"
      variants={templateVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.main>
  );
}
