"use client";

import { motion } from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents1 } from "@/mdx-component";
import { useData } from "@/hooks/DataProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, loading } = useData();
  const mdxComponents = useMDXComponents1({});

  if (loading || !data) return <div>Loading...</div>;

  const { primaryColor } = data.brand;
  const section = data.sections.find((sec) => sec.type === "overview");
  const hasMedia = section?.video || section?.img;

  return (
    <>
      {/* Main Container */}
      <div
        className={`relative min-h-[50vh] flex flex-row items-center justify-start rounded-xl gap-4 px-10 py-5 overflow-hidden ${
          hasMedia ? "block" : "md:flex"
        }`}
        style={{ backgroundColor: primaryColor }}
      >
        {/* Pattern */}
        {section?.pattern && (
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${section.pattern})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )}

        {/* Text Content */}
        <div
          className={`relative text-left text-black ${
            hasMedia
              ? "bottom-1 lg:bottom-[-20rem]"
              : "md:bottom-[-5rem] bottom-[-14rem]"
          }`}
        >
          <h1 className="font-bold md:font-black text-display-lg lg:text-4xl text-3xl m-0">
            {section?.title && (
              <MDXRemote
                {...(section.title as MDXRemoteSerializeResult)}
                components={mdxComponents}
              />
            )}
          </h1>
          <h5 className="text-display-sm md:text-display-md m-0 mt-2 lg:mt-4">
            {section?.description && (
              <MDXRemote
                {...(section.description as MDXRemoteSerializeResult)}
                components={mdxComponents}
              />
            )}
          </h5>
        </div>

        {/* Media */}
        {hasMedia && (
          <div className="relative flex right-0 w-full justify-end">
            {section?.video ? (
              <motion.video
                src={section.video}
                autoPlay
                loop
                muted
                className="max-w-full h-auto rounded-lg shadow-lg max-h-[50vh]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            ) : section?.img ? (
              <motion.img
                src={section.img}
                alt="Overview Image"
                className="max-w-full h-auto rounded-lg shadow-lg max-h-[50vh]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            ) : null}
          </div>
        )}
      </div>

      {children}
    </>
  );
}
