import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { JSX } from "react";
import { Handshake, ShieldCheck, HandCoins, Blocks, Cog } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const fallbackIcons = [
  <Handshake className="w-24 h-24 text-white" />,
  <ShieldCheck className="w-24 h-24 text-white" />,
  <HandCoins className="w-24 h-24 text-white" />,
  <Blocks className="w-24 h-24 text-white" />,
  <Cog className="w-24 h-24 text-white" />,
];

export const CustomTabs = ({
  tabs,
  selectedTab,
  setSelectedTab,
  primaryColor,
}: {
  tabs: {
    title: string;
    svg?: string;
    serializedDescription: React.ReactNode;
  }[];
  selectedTab: string;
  setSelectedTab: (val: string) => void;
  primaryColor: string;
}) => {
  const svgLessTabs = tabs.filter((tab) => !tab.svg);

  const iconMap = new Map<string, JSX.Element>();
  svgLessTabs.forEach((tab, index) => {
    iconMap.set(tab.title, fallbackIcons[index % fallbackIcons.length]);
  });

  return (
    <div className="max-w-3xl">
      <ScrollArea>
        <div className="flex gap-6 border-b border-muted pb-2 mb-4 relative">
          {tabs.map((tab, index) => (
            <button
              key={`${tab.title}+${index}`}
              onClick={() => setSelectedTab(tab.title)}
              className={clsx(
                "relative px-2 pb-2 md:text-base text-sm font-medium whitespace-nowrap",
                "transition-colors duration-300",
                selectedTab === tab.title
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.title}
              {selectedTab === tab.title && (
                <motion.div
                  layoutId="custom-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                  style={{ backgroundColor: primaryColor }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {tabs.map((tab) =>
        tab.title === selectedTab ? (
          <motion.div
            key={tab.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row-reverse items-center gap-6 mt-4"
          >
            <div
              style={{ backgroundColor: primaryColor }}
              className="w-full min-h-72 lg:w-1/2 p-4 rounded-4xl flex items-center justify-center"
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
                iconMap.get(tab.title)
              )}
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-4">{tab.title}</h3>
              <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                {tab.serializedDescription}
              </div>
            </div>
          </motion.div>
        ) : null
      )}
    </div>
  );
};
