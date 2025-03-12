"use client";

import { useState, useEffect } from "react";
import { useData } from "@/hooks/DataProvider";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { motion } from "framer-motion";
import { useMDXComponents1 } from "@/mdx-component";

const Page = () => {
  const { data, loading } = useData();
  const mdxComponents = useMDXComponents1({});
  const [serializedDesc, setSerializedDesc] =
    useState<MDXRemoteSerializeResult | null>(null);

  if (loading || !data)
    return <div className="text-center text-gray-500">Loading...</div>;

  const section = data.sections.find((sec) => sec.type === "overview");

  // Serialize desc in the component
  useEffect(() => {
    async function serializeDesc() {
      if (section?.items?.desc) {
        const serialized = await serialize(section.items.desc as string);
        setSerializedDesc(serialized);
      }
    }
    serializeDesc();
  }, [section?.items?.desc]);

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
              <MDXRemote {...serializedDesc} components={mdxComponents} />
            </div>
          )}
        </motion.div>

        {/* Add extra content to make scrolling noticeable */}
        <div className="">
          {section?.items?.desc && (
            <MDXRemote
              {...(section.items.desc as MDXRemoteSerializeResult)}
              components={mdxComponents}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
