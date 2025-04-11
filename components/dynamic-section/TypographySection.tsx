"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Typography } from "@/app/type";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";

interface TypographySectionProps {
  section: Typography;
}

const weightMap: Record<number, string> = {
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
};

const sampleText = "Some Sample Text";

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
  const [weightsTitle, setWeightsTitle] =
    useState<MDXRemoteSerializeResult | null>(null);
  const [weightsDesc, setWeightsDesc] =
    useState<MDXRemoteSerializeResult | null>(null);
  const [mainTitle, setMainTitle] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [mainDesc, setMainDesc] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [customMDXComponent, setCustomMDXComponent] =
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
      ) {
        setLastKey(event.key);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    const serializeMDX = async (input: string | MDXRemoteSerializeResult) => {
      return typeof input === "string" ? await serialize(input) : input;
    };

    const serializeAll = async () => {
      const { items } = section;
      const serializedFontFeatures = await Promise.all(
        items.fontFeatureComponent.componentItems.map(async (item) => ({
          mdx: await serializeMDX(item.text),
          bg: item.bg || "#fff",
          color: item.color || "#000",
        }))
      );

      setSerializedItems(serializedFontFeatures);
      setFontFeatureTitle(await serializeMDX(items.fontFeatureComponent.title));
      setFontFeatureDesc(await serializeMDX(items.fontFeatureComponent.desc));
      setPrinciplesMDX(await serializeMDX(items.principlesMDX));
      setWeightsTitle(await serializeMDX(items.wights.title));
      setWeightsDesc(await serializeMDX(items.wights.desc));
      setMainTitle(await serializeMDX(items.title));
      setMainDesc(await serializeMDX(items.desc));
      if (typeof items.MDXComponent !== "string") {
        setCustomMDXComponent(await serializeMDX(items.MDXComponent));
      }
    };

    serializeAll();
  }, [section]);

  return (
    <section className="p-6 md:p-10 max-w-6xl mx-auto space-y-28 mt-12">
      <div className="lg:flex md:space-x-8 space-y-6 md:space-y-0 gap-32">
        <div className="flex-1 space-y-4">
          {mainTitle && (
            <div className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              <MDXRemote {...mainTitle} components={mdxComponent1} />
            </div>
          )}
          {mainDesc && (
            <div className="text-neutral-700 dark:text-neutral-300">
              <MDXRemote {...mainDesc} components={mdxComponent1} />
            </div>
          )}
        </div>
        <div className="flex-1 bg-black dark:bg-white dark:text-black text-white rounded-2xl flex flex-col items-center justify-center p-6">
          <p className="text-9xl font-bold">{lastKey}</p>
          <p className="text-sm font-bold">only support EN</p>
        </div>
      </div>

      <div className="space-y-12">
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
      </div>

      <div className="flex flex-col lg:flex-row gap-12 p-6 rounded-2xl">
        <div className="space-y-4 flex-1 border p-10 px-8 m-auto rounded-2xl">
          {section.font.weights.map((weight) => (
            <div key={weight} className="flex items-center gap-6">
              <p className="w-24 text-lg" style={{ fontWeight: weight }}>
                {weightMap[weight] || weight}
              </p>
              <p className="text-2xl" style={{ fontWeight: weight }}>
                {sampleText}
              </p>
            </div>
          ))}
        </div>
        <div className="flex-1 text-sm leading-relaxed">
          {weightsTitle && (
            <h2 className="text-xl font-bold mb-4">
              <MDXRemote {...weightsTitle} components={mdxComponent1} />
            </h2>
          )}
          {weightsDesc && (
            <MDXRemote {...weightsDesc} components={mdxComponent1} />
          )}
        </div>
      </div>

      {principlesMDX && (
        <div className="space-y-6">
          <MDXRemote {...principlesMDX} components={mdxComponent} />
        </div>
      )}

      {customMDXComponent && (
        <MDXRemote {...customMDXComponent} components={mdxComponent} />
      )}
    </section>
  );
};

export default TypographySection;
