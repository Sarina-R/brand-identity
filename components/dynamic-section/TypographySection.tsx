"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Typography } from "@/app/type";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";

interface TypographySectionProps {
  section: Typography;
}

const TypographySection: React.FC<TypographySectionProps> = ({ section }) => {
  //   const { font } = section;
  const mdxComponent = useMDXComponents({});
  const mdxComponent1 = useMDXComponents1({});

  const [lastKey, setLastKey] = useState<string>("A");

  //   useEffect(() => {
  //     if (!font || !font.name) return;

  //     const { name, weights, subsets } = font;
  //     const formattedFontName = name.replace(/\s+/g, "+");
  //     const weightsQuery = weights ? `wght@${weights.join(";")}` : "wght@400;700";
  //     const subsetsQuery = subsets ? `&subset=${subsets.join(",")}` : "";
  //     const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFontName}:${weightsQuery}${subsetsQuery}&display=swap`;

  //     const existingLink = document.querySelector(`link[href="${fontUrl}"]`);
  //     if (!existingLink) {
  //       const link = document.createElement("link");
  //       link.href = fontUrl;
  //       link.rel = "stylesheet";
  //       document.head.appendChild(link);
  //     }

  //     return () => {
  //       const link = document.querySelector(`link[href="${fontUrl}"]`);
  //       if (link) {
  //         document.head.removeChild(link);
  //       }
  //     };
  //   }, [font]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const isLatin = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]$/.test(
        event.key
      );

      if (event.key === "Enter") {
        setLastKey("Enter");
      } else if (event.key === " ") {
        setLastKey("Space");
      } else if (
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        isLatin
      ) {
        setLastKey(event.key);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  //   const fontFamily = font && font.name ? font.name : "sans-serif";

  return (
    <section
      className="p-10 max-w-6xl mx-auto space-y-8"
      //   style={{ fontFamily }}
    >
      <div className="mb-4 space-y-4 z-10 md:flex">
        <div className="sticky top-0 h-full flex-1 gap-6 py-6">
          <div className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            {section.items.title && (
              <MDXRemote
                {...(section.items.title as MDXRemoteSerializeResult)}
                components={mdxComponent1}
              />
            )}
          </div>
          <div className="text-neutral-700 dark:text-neutral-300">
            {section.items.desc && (
              <MDXRemote
                {...(section.items.desc as MDXRemoteSerializeResult)}
                components={mdxComponent1}
              />
            )}
          </div>
        </div>

        <div className="flex-1 h-70 bg-black dark:bg-white dark:text-black text-white justify-center rounded-2xl flex flex-col items-center space-y-2">
          <p className="text-9xl font-bold">{lastKey}</p>
          <p className="text-sm font-bold">only support EN</p>
        </div>
      </div>

      {section.items.MDXComponent && (
        <MDXRemote
          {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
          components={mdxComponent}
        />
      )}
    </section>
  );
};

export default TypographySection;
