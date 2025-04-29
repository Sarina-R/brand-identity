"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20">
      <motion.div
        className="text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-6"
          variants={fadeInUp}
        >
          Brand Book
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-neutral-800 dark:text-neutral-300 max-w-md mx-auto mb-10"
          variants={fadeInUp}
        >
          A sleek and modern guide to our brand identity, crafted with precision
          and elegance.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Link
            href="/ir"
            className="inline-block px-8 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-neutral-800 dark:text-neutral-300 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Fira Iran
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#000_0%,_transparent_70%)]" />
      </motion.div>

      <motion.footer
        className="absolute bottom-8 text-sm text-neutral-600 dark:text-neutral-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        © {new Date().getFullYear()} FIRA. All rights reserved.
      </motion.footer>
    </div>
  );
}
