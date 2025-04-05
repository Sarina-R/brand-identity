// ToneOfVoiceSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Handshake, Home, Settings, User } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ToneOfVoice } from "@/app/type";
import { lighten } from "polished";
import { serialize } from "next-mdx-remote/serialize";
import "swiper/css/pagination";
import "swiper/css";

const ToneOfVoiceSection = ({
  section,
  primaryColor,
}: {
  section: ToneOfVoice;
  primaryColor: string;
}) => {
  const mdxComponents = useMDXComponents({});
  const mdxComponents1 = useMDXComponents1({});
  const sliderContent = section.items.sliderContent || [];
  const [isDesktop, setIsDesktop] = useState(false);
  const [serializedContent, setSerializedContent] = useState<any[]>([]);

  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (_: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const serializeSliderDescriptions = async () => {
      const updated = await Promise.all(
        sliderContent.map(async (item) => {
          if (typeof item.description === "string") {
            return {
              ...item,
              description: await serialize(item.description),
            };
          }
          return item;
        })
      );
      setSerializedContent(updated);
    };
    serializeSliderDescriptions();
  }, [sliderContent]);

  return (
    <div className="space-y-8">
      {section.items.MDXComponent && (
        <MDXRemote
          {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
          components={mdxComponents}
        />
      )}

      <div className="p-6 space-y-5 max-w-3xl">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          {section.items.title && (
            <MDXRemote
              {...(section.items.title as MDXRemoteSerializeResult)}
              components={mdxComponents1}
            />
          )}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          {section.items.desc && (
            <MDXRemote
              {...(section.items.desc as MDXRemoteSerializeResult)}
              components={mdxComponents1}
            />
          )}
        </p>
      </div>

      {serializedContent.length > 0 && (
        <div className="w-full relative px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={24}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="pb-16"
          >
            {serializedContent.map((item) => (
              <SwiperSlide key={item.id}>
                <SlideCard {...item} primaryColor={primaryColor} />
              </SwiperSlide>
            ))}

            {isDesktop && (
              <div
                className="hidden md:flex items-center gap-2 absolute bottom-6 right-6 z-10"
                slot="container-end"
              >
                <svg
                  viewBox="0 0 48 48"
                  ref={progressCircle}
                  className="w-8 h-8 text-orange-500"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="progress-ring"
                    style={{
                      strokeDasharray: 125.6,
                      strokeDashoffset: `calc(125.6 * var(--progress))`,
                      transition: "stroke-dashoffset 0.3s linear",
                    }}
                  />
                </svg>
                <span
                  ref={progressContent}
                  className="text-xs text-gray-600 dark:text-gray-300"
                />
              </div>
            )}
          </Swiper>
        </div>
      )}
    </div>
  );
};

function SlideCard({
  svg,
  title,
  description,
  primaryColor,
}: {
  svg?: string;
  title: string;
  description: string | MDXRemoteSerializeResult;
  primaryColor: string;
}) {
  const mdxComponents1 = useMDXComponents1({});
  const lighterColor = lighten(0.2, primaryColor);
  const icons = [Handshake, Home, User, Settings];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div className="w-full max-w-4xl mx-auto flex md:flex-row-reverse flex-col-reverse items-stretch bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm border">
      <div className="md:w-2/3 w-full p-6 space-y-2">
        <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
          {title}
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-300 leading-loose">
          {typeof description === "string" ? (
            description
          ) : (
            <MDXRemote
              {...(description as MDXRemoteSerializeResult)}
              components={mdxComponents1}
            />
          )}
        </div>
      </div>
      <div
        className="md:w-1/3 w-full flex items-center justify-center p-6"
        style={{ backgroundColor: primaryColor }}
      >
        {svg ? (
          <img src={svg} alt={title} className="max-h-24 object-contain" />
        ) : (
          React.createElement(randomIcon, {
            color: lighterColor,
            className: "w-16 h-16",
          })
        )}
      </div>
    </div>
  );
}

export default ToneOfVoiceSection;
