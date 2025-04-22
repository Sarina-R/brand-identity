"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents1 } from "@/mdx-component";
import { useData } from "@/hooks/DataProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Font } from "@/app/type";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, loading } = useData();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const localePrefix = pathSegments[0];
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

  if (loading || !data) {
    return (
      <div className="space-y-6 py-5">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-20 w-full rounded-2xl" />
      </div>
    );
  }
  const primaryColor = data.brand.primaryColor;

  const menuItems = Object.values(data.menu).flatMap((menu) => menu.items);
  const currentType = menuItems.find((item) =>
    pathname.includes(item.id)
  )?.type;
  const section = data.sections.find((sec) => sec.type === currentType);

  const currentIndex = menuItems.findIndex((item) => item.type === currentType);
  const nextItem = menuItems[currentIndex + 1];
  const prevItem = currentIndex > 0 ? menuItems[currentIndex - 1] : null;

  function getContrastYIQ(hexColor: string): "black" | "white" {
    let color = hexColor.replace("#", "");
    if (color.length === 3) {
      color = color
        .split("")
        .map((c) => c + c)
        .join("");
    }

    const r = parseInt(color.substr(0, 2), 16);
    const g = parseInt(color.substr(2, 2), 16);
    const b = parseInt(color.substr(4, 2), 16);

    const yiq = (r * 299 + g * 587 + b * 114) / 1000;

    return yiq >= 128 ? "black" : "white";
  }
  const textColor = getContrastYIQ(primaryColor);

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

    return (
      <div style={{ fontFamily }}>
        <div
          className={`relative min-h-[50vh] md:flex flex-row items-center justify-start rounded-xl gap-4 px-10 py-5 overflow-hidden ${
            hasMedia ? "block" : "md:flex"
          }`}
          style={{ backgroundColor: primaryColor, color: textColor }}
        >
          {section?.pattern && (
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{
                backgroundImage: `url(${section.pattern})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1 }}
            />
          )}

          <div
            className={`relative text-left text- ${
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
  };

  return (
    <div className="space-y-8" style={{ fontFamily }}>
      {renderSectionContent()}
      {children}
      <footer className="bg-neutral-100 dark:bg-neutral-900 h-20 rounded-2xl font-bold px-4 items-center w-full flex justify-between">
        {prevItem ? (
          <Link
            href={`/${localePrefix}/${prevItem.id}`}
            className="flex gap-2 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"
          >
            <div className="pt-2">
              <ChevronLeft size={32} />
            </div>
            <div className="">
              <p className="font-light text-neutral-500 text-sm">Prev</p>
              <p>{prevItem.title}</p>
            </div>
          </Link>
        ) : (
          <span></span>
        )}

        {nextItem ? (
          <Link
            href={`/${localePrefix}/${nextItem.id}`}
            className="flex gap-2 text-right text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"
          >
            <div>
              <p className="font-light text-neutral-500 text-sm">Next</p>
              <p>{nextItem.title}</p>
            </div>
            <div className="pt-2">
              <ChevronRight size={32} />
            </div>
          </Link>
        ) : (
          <span>End of sections</span>
        )}
      </footer>
    </div>
  );
}
