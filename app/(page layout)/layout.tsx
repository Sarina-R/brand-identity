"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ApiResponse, Overview } from "../type";
import { motion } from "framer-motion";
import { API_URLS } from "../api/url";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useMDXComponents1 } from "@/mdx-component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState<ApiResponse>();
  const mdxComponents = useMDXComponents1({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API_URLS.BRANDING);
        const result: ApiResponse = response.data;

        const section = result.sections.find((sec) => sec.type === "overview");
        if (section) {
          const serializedSection = { ...section };
          if (section.title) {
            serializedSection.title = await serialize(section.title as string);
          }
          if (section.description) {
            serializedSection.description = await serialize(
              section.description as string
            );
          }
          setData({
            ...result,
            sections: result.sections.map((sec) =>
              sec.type === "overview" ? serializedSection : sec
            ),
          });
        } else {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  const { primaryColor } = data.brand;
  const section = data.sections.find((sec) => sec.type === "overview");
  const hasMedia = section?.video || section?.img;

  return (
    <>
      {/* Main Container */}
      <div
        className="relative min-h-[50vh] flex flex-row items-center justify-start rounded-xl gap-4 px-10 py-5 overflow-hidden"
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
        <div className="relative text-left bottom-[-5rem] text-black">
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
          <div className="relative flex justify-center items-center">
            {section?.video ? (
              <motion.video
                src={section.video}
                autoPlay
                loop
                muted
                className="max-w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            ) : section?.img ? (
              <motion.img
                src={section.img}
                alt="Overview Image"
                className="max-w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            ) : null}
          </div>
        )}

        {/* Scroll) */}
        {!hasMedia && (
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden lg:block">
            <svg
              width="20"
              height="36"
              viewBox="0 0 20 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mouse"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.92833 26.333V26.333C5.01833 26.333 1 22.3147 1 17.4047V10.2613C1 5.35134 5.01833 1.33301 9.92833 1.33301V1.33301C14.8383 1.33301 18.8567 5.35134 18.8567 10.2613V17.4047C18.8567 22.3147 14.8383 26.333 9.92833 26.333Z"
                stroke="#0A0B0C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.92822 31.333L9.92822 34.6663L14.9282 31.333"
                stroke="#0A0B0C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.92806 8.47656V12.0482"
                stroke="#0A0B0C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mouse-wheel"
              />
            </svg>
            <div className="text-body-lg text-center"> Scroll </div>
          </div>
        )}
      </div>

      {/* Page Content */}
      {children}
    </>
  );
}
