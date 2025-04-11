"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Typography } from "@/app/type";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";

interface TypographySectionProps {
  section: Typography;
}

const TypographySection: React.FC<TypographySectionProps> = ({ section }) => {
  const mdxComponent1 = useMDXComponents1({});
  const mdxComponent = useMDXComponents({});

  const [lastKey, setLastKey] = useState<string>("A");
  const [serializedItems, setSerializedItems] = useState<
    { mdx: MDXRemoteSerializeResult; bg: string; color: string }[]
  >([]);
  const [fontFeatureTitle, setFontFeatureTitle] =
    useState<MDXRemoteSerializeResult | null>(null);
  const [fontFeatureDesc, setFontFeatureDesc] =
    useState<MDXRemoteSerializeResult | null>(null);
  const [principlesMDX, setPrinciplesMDX] =
    useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const isLatin = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]$/.test(
        event.key
      );
      if (event.key === "Enter") setLastKey("Enter");
      else if (event.key === " ") setLastKey("Space");
      else if (
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        isLatin
      )
        setLastKey(event.key);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    const serializeMDX = async (input: string | MDXRemoteSerializeResult) => {
      if (typeof input === "string") {
        return await serialize(input);
      }
      return input;
    };

    const serializeFeatures = async () => {
      const items = section.items.fontFeatureComponent.componentItems || [];

      const serializedItems = await Promise.all(
        items.map(async (item) => {
          const mdx = await serializeMDX(item.text);
          return {
            mdx,
            bg: item.bg || "#ffffff",
            color: item.color || "#000000",
          };
        })
      );

      const serializedTitle = await serializeMDX(
        section.items.fontFeatureComponent.title
      );
      const serializedDesc = await serializeMDX(
        section.items.fontFeatureComponent.desc
      );
      const serializedPrinciplesMDX = await serializeMDX(
        section.items.principlesMDX
      );

      setSerializedItems(serializedItems);
      setFontFeatureTitle(serializedTitle);
      setFontFeatureDesc(serializedDesc);
      setPrinciplesMDX(serializedPrinciplesMDX);
    };

    serializeFeatures();
  }, [section]);

  return (
    <section className="p-6 md:p-10 max-w-6xl mx-auto space-y-28 mt-12">
      <div className="lg:flex md:space-x-8 space-y-6 md:space-y-0 gap-32">
        <div className="flex-1 space-y-4">
          {section.items.title && (
            <div className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              <MDXRemote
                {...(section.items.title as MDXRemoteSerializeResult)}
                components={mdxComponent1}
              />
            </div>
          )}
          {section.items.desc && (
            <div className="text-neutral-700 dark:text-neutral-300">
              <MDXRemote
                {...(section.items.desc as MDXRemoteSerializeResult)}
                components={mdxComponent1}
              />
            </div>
          )}
        </div>

        <div className="flex-1 bg-black dark:bg-white dark:text-black text-white rounded-2xl flex flex-col items-center justify-center p-6">
          <p className="text-9xl font-bold">{lastKey}</p>
          <p className="text-sm font-bold">only support EN</p>
        </div>
      </div>
      <div className="lg:flex justify-between gap-32">
        {fontFeatureTitle && (
          <div className="text-xl font-bold">
            <MDXRemote {...fontFeatureTitle} components={mdxComponent1} />
          </div>
        )}
        {fontFeatureDesc && (
          <div>
            <MDXRemote {...fontFeatureDesc} components={mdxComponent1} />
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {serializedItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl text-xl p-6 text-center border min-h-40 h-full flex flex-col items-center justify-center"
            style={{ backgroundColor: item.bg, color: item.color }}
          >
            <MDXRemote {...item.mdx} components={mdxComponent1} />
          </div>
        ))}
      </div>
      {principlesMDX && (
        <div className="space-y-6">
          <MDXRemote {...principlesMDX} components={mdxComponent} />
        </div>
      )}

      {section.items.MDXComponent &&
        typeof section.items.MDXComponent !== "string" && (
          <MDXRemote
            {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
            components={mdxComponent}
          />
        )}
    </section>
  );
};

export default TypographySection;
