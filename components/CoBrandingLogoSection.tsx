import { useEffect, useState } from "react";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useMDXComponents1 } from "@/mdx-component";
import { AlongWithOthers } from "@/app/type";

interface CoBrandingProps {
  data: AlongWithOthers;
}

export default function CoBrandingLogoSection({ data }: CoBrandingProps) {
  const mdxComponents1 = useMDXComponents1;
  const [mdxTitle, setMdxTitle] = useState<MDXRemoteSerializeResult>();
  const [mdxDesc, setMdxDesc] = useState<MDXRemoteSerializeResult>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const serializeContent = async () => {
      const serializedDesc = await serialize(data.desc);
      const serializedTitle = await serialize(data.title);
      setMdxDesc(serializedDesc);
      setMdxTitle(serializedTitle);
    };
    serializeContent();
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.svg.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [data.svg.length]);

  return (
    <section className="flex flex-col md:flex-row gap-8 p-6 rounded-2xl overflow-hidden">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          {mdxTitle && <MDXRemote {...mdxTitle} components={mdxComponents1} />}
        </h2>
        <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
          {mdxDesc && <MDXRemote {...mdxDesc} components={mdxComponents1} />}
        </div>
      </div>
      <div className="flex-1 relative flex items-center justify-center min-h-[120px]">
        {data.svg.map((url, idx) => (
          <div
            key={idx}
            className={`absolute transition-opacity duration-1000 ease-in-out w-full max-w-sm p-6 rounded-xl flex items-center justify-center ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={url}
              alt={`co-brand-logo-${idx}`}
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
