"use client";

import { useState } from "react";
import { DesignPrinciples } from "@/app/type";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";
import { PlayCircle, Cable, CircleUser, ShieldCheck, Rss } from "lucide-react";
import Image from "next/image";
import { CustomTabs } from "../CustomTabs";
import { motion } from "framer-motion";

const fallbackIcons = [Cable, CircleUser, ShieldCheck, Rss];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DesignPrinciplesSection = ({
  section,
  primaryColor,
}: {
  section: DesignPrinciples;
  primaryColor: string;
}) => {
  const mdxComponents = useMDXComponents({});
  const mdxComponents1 = useMDXComponents1({});
  const tabsContent = section.items.tabsContent.map((tab) => ({
    ...tab,
    serializedDescription:
      typeof tab.description === "string" ? (
        tab.description
      ) : (
        <MDXRemote {...tab.description} components={mdxComponents1} />
      ),
  }));
  const [selectedTab, setSelectedTab] = useState(tabsContent[0].title);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const hasVideo = !!section.items.video;
  const hasVideoCover = !!section.items.videoCover;
  const hasImage = !!section.items.image;

  let media;

  if (hasVideo && hasVideoCover) {
    media = !isVideoPlaying ? (
      <div
        className="relative w-full h-full cursor-pointer group"
        onClick={() => setIsVideoPlaying(true)}
      >
        <Image
          src={section.items.videoCover || ""}
          alt="Video Cover"
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 group-"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <PlayCircle
            size={80}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </div>
      </div>
    ) : (
      <video
        src={section.items.video}
        autoPlay
        controls
        className="w-full h-full object-cover"
      />
    );
  } else if (hasVideo && !hasVideoCover) {
    media = (
      <video
        src={section.items.video}
        autoPlay
        controls
        className="w-full h-full object-cover"
      />
    );
  } else if (hasImage) {
    media = (
      <Image
        src={section.items.image || ""}
        alt="Image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
    );
  } else {
    const RandomIcon =
      fallbackIcons[Math.floor(Math.random() * fallbackIcons.length)];
    media = (
      <div className="w-full h-full flex items-center justify-center bg-neutral-200">
        <RandomIcon size={80} className="text-neutral-500" />
      </div>
    );
  }

  return (
    <section className="py-10 md:px-4 space-y-24 h-full capitalize">
      <motion.div
        className="mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.div
          className="relative aspect-video rounded-2xl shadow-xl overflow-hidden"
          variants={fadeInUp}
        >
          {media}
        </motion.div>

        <motion.div className="sticky top-15 h-fit" variants={fadeInUp}>
          {section.items.title && (
            <h2 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              {typeof section.items.title === "string" ? (
                section.items.title
              ) : (
                <MDXRemote {...section.items.title} />
              )}
            </h2>
          )}
          {section.items.desc && (
            <div className="text-neutral-700 dark:text-neutral-400 leading-relaxed">
              {typeof section.items.desc === "string" ? (
                <p>{section.items.desc}</p>
              ) : (
                <MDXRemote
                  {...section.items.desc}
                  components={mdxComponents1}
                />
              )}
            </div>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="m-auto sm:px-6"
      >
        <CustomTabs
          tabs={tabsContent}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          primaryColor={primaryColor}
        />
      </motion.div>

      {section.items.MDXComponent && (
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <MDXRemote
            {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
            components={mdxComponents}
          />
        </motion.div>
      )}
    </section>
  );
};

export default DesignPrinciplesSection;
