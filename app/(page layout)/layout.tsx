"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents1 } from "@/mdx-component";
import { useData } from "@/hooks/DataProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Font } from "@/app/type";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, loading } = useData();
  const pathname = usePathname();
  const mdxComponents = useMDXComponents1({});

  const font: Font | undefined = data?.brand?.font;
  const fontFamily = font && font.name ? font.name : "roboto";

  useEffect(() => {
    if (loading || !data || !font || !font.name) return;

    const { name, weights, subsets } = font;
    const formattedFontName = name.replace(/\s+/g, "+");
    const weightsQuery = weights ? `wght@${weights.join(";")}` : "wght@400;700";
    const subsetsQuery = subsets ? `&subset=${subsets.join(",")}` : "";
    const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFontName}:${weightsQuery}${subsetsQuery}&display=swap`;

    const existingLink = document.querySelector(`link[href="${fontUrl}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.href = fontUrl;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    return () => {
      const link = document.querySelector(`link[href="${fontUrl}"]`);
      if (link) {
        document.head.removeChild(link);
      }
    };
  }, [data, loading, font]);

  useEffect(() => {
    async function serializeSectionContent() {
      if (loading || !data) {
        return;
      }

      const currentType = Object.values(data.menu)
        .flatMap((menu) => menu.items)
        .find((item) => pathname.includes(item.id))?.type;
      const section = data.sections.find((sec) => sec.type === currentType);

      if (!section) {
        return;
      }
    }
    serializeSectionContent().catch((error) => {
      console.error("Error serializing content:", error);
    });
  }, [data, loading, pathname]);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  const { primaryColor } = data.brand;

  const currentType = Object.values(data.menu)
    .flatMap((menu) => menu.items)
    .find((item) => pathname.includes(item.id))?.type;
  const section = data.sections.find((sec) => sec.type === currentType);

  const menuItems = Object.values(data.menu).flatMap((menu) => menu.items);
  const currentIndex = menuItems.findIndex((item) => item.type === currentType);
  const nextItem = menuItems[currentIndex + 1];

  const renderSectionContent = () => {
    if (!currentType || !section) {
      return (
        <div
          className="relative min-h-[50vh] flex items-center justify-center rounded-xl px-10 py-5"
          style={{ backgroundColor: primaryColor, fontFamily }}
        >
          <h2 className="text-2xl font-bold text-black">No route match</h2>
        </div>
      );
    }

    const hasMedia = section?.video || section?.img;

    switch (currentType) {
      case "overview":
      case "statement":
      case "brand_prism":
      case "tone_of_voice":
      case "tagline":
      case "design_principles":
      case "logo":
      case "mascot":
      case "color":
      case "typography":
      case "identity_in_use":
        return (
          <div style={{ fontFamily }}>
            <div
              className={`relative min-h-[50vh] md:flex flex-row items-center justify-start rounded-xl gap-4 px-10 py-5 overflow-hidden ${
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
                    ? "bottom-1 lg:bottom-[-5rem] md:bottom-[-7rem]"
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
          </div>
        );

      default:
        return (
          <div
            className="relative min-h-[50vh] flex items-center justify-center rounded-xl px-10 py-5"
            style={{ backgroundColor: primaryColor, fontFamily }}
          >
            <h2 className="text-2xl font-bold text-black">No route match</h2>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8" style={{ fontFamily }}>
      {renderSectionContent()}
      {children}
      <footer className="bg-neutral-100 dark:bg-neutral-900 h-20 rounded-2xl font-bold px-4 items-center w-full flex">
        <h3 className="text-right w-full hover:cursor-pointer">
          {nextItem ? (
            <Link
              href={`/${nextItem.id}`}
              className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"
            >
              Next: {nextItem.title} {">"}
            </Link>
          ) : (
            "End of sections"
          )}
        </h3>
      </footer>
    </div>
  );
}
