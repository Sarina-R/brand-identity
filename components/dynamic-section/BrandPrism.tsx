import { BrandPrism } from "@/app/type";
import { useMDXComponents } from "@/mdx-component";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";
import { motion } from "framer-motion";

interface BrandPrismProps {
  section: BrandPrism;
  primaryColor: string;
}

const BrandManifesto = ({ section, primaryColor }: BrandPrismProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const mdxComponents = useMDXComponents({});
  const brandPrismItems = section.items?.prismBrand || [];

  const positions = [
    { x: 105, y: 12 },
    { x: 0, y: 60 },
    { x: 210, y: 60 },
    { x: 0, y: 210 },
    { x: 210, y: 210 },
    { x: 105, y: 260 },
  ];

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 300 300"
        className="w-100 h-80"
        style={
          {
            "--hexagon-bg": "rgba(255, 255, 255, 0.6)",
            "--hexagon-stroke": "rgba(0, 0, 0, 0.3)",
          } as React.CSSProperties
        }
        data-theme="light dark"
      >
        {/* hexagon */}
        <g transform="rotate(90 150 150)">
          <motion.path
            d="M 95 25 L 205 25 Q 225 25 237.024 47.5 L 285.024 127.5 Q 300 150 285.024 172.5 L 237.024 252.5 Q 225 275 205 275 L 95 275 Q 75 275 62.976 252.5 L 14.976 172.5 Q 0 150 14.976 127.5 L 62.976 47.5 Q 75 25 95 25 Z"
            fill="var(--hexagon-bg)"
            stroke="var(--hexagon-stroke)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </g>

        {/* Rectangles */}
        {brandPrismItems.map((item, index) => {
          const position = positions[index] || { x: 125, y: 125 };
          const centerX = position.x + 45;
          const centerY = position.y + 15;
          const rotatedCenterX = centerY;
          const rotatedCenterY = 300 - centerX;
          const rectX = rotatedCenterX - 45;
          const rectY = rotatedCenterY - 15;

          return (
            <motion.g
              key={index}
              onClick={() => setActiveSection(item.title)}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.rect
                x={rectX}
                y={rectY}
                width="90"
                height="30"
                rx="10"
                fill={activeSection === item.title ? primaryColor : "white"}
                stroke={
                  activeSection === item.title
                    ? "none"
                    : "var(--hexagon-stroke)"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.text
                x={rectX + 45}
                y={rectY + 20}
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                fill="black"
                stroke="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.title}
              </motion.text>
            </motion.g>
          );
        })}
      </svg>

      {activeSection && (
        <motion.div
          className="mt-4 p-4 border border-gray-400 rounded-lg shadow-lg bg-white dark:bg-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-bold text-black dark:text-white">
            {activeSection}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {
              brandPrismItems.find((item) => item.title === activeSection)
                ?.description
            }
          </p>
        </motion.div>
      )}

      {section.items.MDXComponent && (
        <MDXRemote
          {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
          components={mdxComponents}
        />
      )}
    </div>
  );
};

export default BrandManifesto;
