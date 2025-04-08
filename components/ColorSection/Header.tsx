"use client";

import { useState, useEffect } from "react";
import { Color, ColorItems } from "@/app/type";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Serialized } from "@/lib/serializeTextFields";
import { useMDXComponents } from "@/mdx-component";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({
  serializedItems,
  section,
  primaryColor,
}: {
  serializedItems: Serialized<ColorItems | undefined>;
  section: Color;
  primaryColor: string;
}) => {
  const mdxComponents = useMDXComponents({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === section.items.img.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [section.items.img.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:flex flex-col-reverse md:flex-row items-center gap-10 overflow-hidden space-y-8"
    >
      <div className="flex-1">
        <div className="text-3xl md:text-4xl font-bold mb-4">
          {serializedItems?.title && (
            <MDXRemote
              {...(serializedItems.title as MDXRemoteSerializeResult)}
              components={mdxComponents}
            />
          )}
        </div>
        <div className="">
          {serializedItems?.desc && (
            <MDXRemote
              {...(serializedItems.desc as MDXRemoteSerializeResult)}
              components={mdxComponents}
            />
          )}
        </div>
      </div>

      <div className="relative flex-1 h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg">
        <AnimatePresence>
          {section.items.img.map((imgSrc, index) =>
            index === currentImageIndex ? (
              <motion.img
                key={imgSrc}
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute w-full h-full object-cover object-center"
              />
            ) : undefined
          )}
        </AnimatePresence>

        <svg
          className="absolute left-[-5rem] bottom-[-6rem] z-10"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300 300C300 134.314 165.686 0 0 0V300H300Z"
            fill={primaryColor}
          />
          <path
            d="M300 300C300 134.314 165.686 0 0 0"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.8"
          />
          <path
            d="M280 280C280 149.668 150.332 20 0 20"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.6"
          />
          <path
            d="M260 260C260 165.022 134.978 40 0 40"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
        </svg>
        <svg
          className="absolute right-[-5rem] top-[-6rem] z-10 rotate-180"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300 300C300 134.314 165.686 0 0 0V300H300Z"
            fill={primaryColor}
          />
          <path
            d="M300 300C300 134.314 165.686 0 0 0"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.8"
          />
          <path
            d="M280 280C280 149.668 150.332 20 0 20"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.6"
          />
          <path
            d="M260 260C260 165.022 134.978 40 0 40"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
        </svg>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top right,${primaryColor} , transparent)`,
            zIndex: 3,
          }}
          className="opacity-30"
        />
      </div>
    </motion.div>
  );
};

export default Header;
