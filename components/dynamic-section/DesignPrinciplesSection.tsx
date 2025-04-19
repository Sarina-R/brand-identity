"use client";

import { useState } from "react";
import { DesignPrinciples } from "@/app/type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";
import { PlayCircle, Cable, CircleUser, ShieldCheck, Rss } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { CustomTabs } from "../CustomTabs";

const fallbackIcons = [Cable, CircleUser, ShieldCheck, Rss];

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
          className="transition-all duration-300 group-hover:scale-105"
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
    <section className="py-16 space-y-24 h-full">
      <div className="mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative aspect-video rounded-2xl shadow-xl overflow-hidden">
          {media}
        </div>

        <div className="sticky top-0 h-fit">
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
        </div>
      </div>

      <CustomTabs
        tabs={tabsContent}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        primaryColor={primaryColor}
      />

      {section.items.MDXComponent && (
        <div className="mt-10">
          <MDXRemote
            {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
            components={mdxComponents}
          />
        </div>
      )}
    </section>
  );
};

export default DesignPrinciplesSection;
