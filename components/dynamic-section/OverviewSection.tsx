"use client";

import { motion } from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";
import { Overview } from "@/app/type";

interface OverviewProps {
  section: Overview;
  serializedDesc: MDXRemoteSerializeResult | string;
}

const OverviewSection: React.FC<OverviewProps> = ({
  section,
  serializedDesc,
}) => {
  const mdxComponents = useMDXComponents({});
  const mdxComponents1 = useMDXComponents1({});

  return (
    <section className="flex flex-col md:flex-row gap-4 lg:px-24 md:px-12 px-6 py-12">
      <motion.div
        className="flex-1 max-w-md sticky top-0 z-20 self-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">
          {section?.items?.group}
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {section?.items?.title}
        </h3>
      </motion.div>

      <div className="flex-1 flex flex-col">
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {serializedDesc && (
            <div className="prose prose-lg text-gray-700">
              <MDXRemote
                {...(serializedDesc as MDXRemoteSerializeResult)}
                components={mdxComponents1}
              />
            </div>
          )}
        </motion.div>
      </div>
      <MDXRemote
        {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
        components={mdxComponents}
      />
    </section>
  );
};

export default OverviewSection;
