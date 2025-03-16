"use client";

import { motion } from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useMDXComponents1 } from "@/mdx-component";
import { useData } from "@/hooks/DataProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, loading } = useData();
  const pathname = usePathname();
  const mdxComponents = useMDXComponents1({});
  const [serializedContent, setSerializedContent] = useState<{
    title: MDXRemoteSerializeResult | null;
    description: MDXRemoteSerializeResult | null;
  }>({ title: null, description: null });

  useEffect(() => {
    async function serializeSectionContent() {
      if (loading || !data) {
        setSerializedContent({ title: null, description: null });
        return;
      }

      const currentType = Object.values(data.menu)
        .flatMap((menu) => menu.items)
        .find((item) => pathname.includes(item.id))?.type;
      const section = data.sections.find((sec) => sec.type === currentType);

      if (!section) {
        setSerializedContent({ title: null, description: null });
        return;
      }

      const titleSerialized =
        section?.title && typeof section.title === "string"
          ? await serialize(section.title)
          : section?.items?.title && typeof section.items.title === "string"
          ? await serialize(section.items.title)
          : null;

      const descSerialized =
        section?.description && typeof section.description === "string"
          ? await serialize(section.description)
          : section?.items?.desc && typeof section.items.desc === "string"
          ? await serialize(section.items.desc)
          : null;

      setSerializedContent({
        title: titleSerialized,
        description: descSerialized,
      });
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
          style={{ backgroundColor: primaryColor }}
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
        );

      default:
        return (
          <div
            className="relative min-h-[50vh] flex items-center justify-center rounded-xl px-10 py-5"
            style={{ backgroundColor: primaryColor }}
          >
            <h2 className="text-2xl font-bold text-black">No route match</h2>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8">
      {renderSectionContent()}
      {children}
      <footer className="bg-neutral-100 h-20 rounded-2xl font-bold px-4 items-center w-full flex">
        <h3 className="text-right w-full hover:cursor-pointer">
          {nextItem ? (
            <Link
              href={`/${nextItem.id}`}
              className="text-gray-800 hover:text-gray-600"
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
