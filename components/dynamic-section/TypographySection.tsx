// components/dynamic-section/TypographySection.tsx
"use client";

import { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Typography, FontStyles } from "@/app/type";

interface TypographySectionProps {
  section: Typography;
}

const TypographySection: React.FC<TypographySectionProps> = ({ section }) => {
  const { font, items, title, description } = section;
  const typographyStyles = items.styles;

  useEffect(() => {
    if (!font || !font.name) return;

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
  }, [font]);

  const fontFamily = font && font.name ? font.name : "sans-serif";

  // Define a type for allowed HTML tags
  type HtmlTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

  return (
    <section className="p-10 max-w-6xl mx-auto" style={{ fontFamily }}>
      <div className="mb-4">
        {typeof title === "string" ? (
          <h1 className="text-5xl font-bold">{title}</h1>
        ) : (
          <h1 className="text-5xl font-bold">
            <MDXRemote {...(title as MDXRemoteSerializeResult)} />
          </h1>
        )}
      </div>

      {description && (
        <div className="mb-8 text-lg text-gray-600">
          {typeof description === "string" ? (
            <p>{description}</p>
          ) : (
            <MDXRemote {...(description as MDXRemoteSerializeResult)} />
          )}
        </div>
      )}

      <div className="grid gap-8">
        {typographyStyles.map((style: FontStyles, index: number) => {
          // Cast the tag to a specific set of HTML tags
          const Tag = (style.tag as HtmlTag) || "p"; // Fallback to "p" if tag is invalid
          return (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg bg-gray-50"
            >
              <div className="text-xl font-semibold mb-2">{style.label}</div>
              <Tag
                className="mb-4"
                style={{
                  fontSize: style.fontSize,
                  fontWeight: style.fontWeight,
                  lineHeight: style.lineHeight,
                }}
              >
                {style.sampleText}
              </Tag>
              <div className="text-sm text-gray-500">
                <p>Font Size: {style.fontSize}</p>
                <p>Font Weight: {style.fontWeight}</p>
                <p>Line Height: {style.lineHeight}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TypographySection;
