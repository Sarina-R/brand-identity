"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Button } from "@/components/ui/button";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";
import { Logo } from "@/app/type";
import LogoSlider from "../LogoSlider";
import LogoBackground from "../LogoBG";
import CoBrandingLogoSection from "../CoBrandingLogoSection";

const LogoSection = ({ section, logo }: { section: Logo; logo: string }) => {
  const mdxComponents1 = useMDXComponents1({});
  const mdxComponents = useMDXComponents({});
  const [mdxSource, setMdxSource] = useState<
    string | MDXRemoteSerializeResult
  >();

  useEffect(() => {
    const serializedFunction = async () => {
      const mdxSource = await serialize(section.items.MDXComponentForLogo);
      setMdxSource(mdxSource);
    };

    serializedFunction();
  }, [section.items]);

  const download = section.items.download ?? "#";
  const downloadBtnText = section.items.downloadBtnText ?? "Download the logo";

  return (
    <div className="md:p-8 p-4 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border w-full">
          <div className="w-full max-w-md flex justify-center">
            <Image
              src={logo || ""}
              alt="logo"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            {section.items.title && (
              <div className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                <MDXRemote
                  {...(section.items.title as MDXRemoteSerializeResult)}
                  components={mdxComponents1}
                />
              </div>
            )}

            {section.items.desc && (
              <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                <MDXRemote
                  {...(section.items.desc as MDXRemoteSerializeResult)}
                  components={mdxComponents1}
                />
              </div>
            )}
          </div>

          <div>
            <a href={download} download>
              <Button variant="outline">{downloadBtnText}</Button>
            </a>
          </div>
        </div>
      </div>

      {mdxSource && (
        <MDXRemote
          {...(mdxSource as MDXRemoteSerializeResult)}
          components={mdxComponents}
        />
      )}

      <LogoSlider versions={section.items.logoVersion} />
      <LogoBackground data={section.items.inBackgroundSection} />
      <CoBrandingLogoSection data={section.items.alongWithOthers} />

      {section.items.MDXComponent && (
        <MDXRemote
          {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
          components={mdxComponents}
        />
      )}
    </div>
  );
};

export default LogoSection;
