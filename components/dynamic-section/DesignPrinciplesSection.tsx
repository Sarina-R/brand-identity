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
    <section className="py-16 space-y-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-video rounded-2xl shadow-xl">
          {media}
        </div>

        <div>
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

      <div>
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList
            className={clsx(
              "relative flex gap-4 px-4",
              "overflow-x-auto",
              "",
              "bg-transparent border-none shadow-none max-w-full"
            )}
          >
            {tabsContent.map((tab) => (
              <TabsTrigger
                key={tab.title}
                value={tab.title}
                className={clsx(
                  "relative px-4 py-2 text-sm font-medium capitalize transition-all duration-300",
                  "rounded-full border-none shadow-none bg-transparent outline-none",
                  "hover:bg-muted/40 hover:text-foreground",
                  selectedTab === tab.title
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {tab.title}

                {selectedTab === tab.title && (
                  <motion.span
                    layoutId="tab-underline"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="absolute inset-0 z-[-1] rounded-full"
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsContent.map((tab) => (
            <TabsContent
              key={tab.title}
              value={tab.title}
              className="flex flex-col md:flex-row-reverse items-center gap-6 mt-8"
            >
              <div
                style={{ backgroundColor: primaryColor }}
                className="w-full md:w-1/2 p-4 rounded-4xl"
              >
                {tab.svg ? (
                  <Image
                    src={tab.svg}
                    alt={tab.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain m-auto p-14"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {(() => {
                      const RandomIcon =
                        fallbackIcons[
                          Math.floor(Math.random() * fallbackIcons.length)
                        ];
                      return <RandomIcon size={80} className="" />;
                    })()}
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-2xl font-semibold mb-4">{tab.title}</h3>
                <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
                  {tab.serializedDescription}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

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
