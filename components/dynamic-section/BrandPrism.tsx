import { BrandPrism } from "@/app/type";
import { useMDXComponents } from "@/mdx-component";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";

interface BrandPrismProps {
  section: BrandPrism;
}

const BrandManifesto = ({ section }: BrandPrismProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const mdxComponents = useMDXComponents({});

  const brandPrismItems = section.items?.prismBrand || [];

  const positions = [
    { x: 105, y: 35 },
    { x: 2, y: 80 },
    { x: 200, y: 80 },
    { x: 2, y: 180 },
    { x: 200, y: 180 },
    { x: 105, y: 235 },
  ];

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 300 300" className="w-80 h-80">
        <g fill="none" stroke="black" strokeWidth="1" strokeLinejoin="round">
          {/* Hexagon Shape */}
          <polygon points="75,50 225,50 275,150 225,250 75,250 25,150" />

          {brandPrismItems.map((item, index) => {
            const position = positions[index] || { x: 125, y: 125 };

            return (
              <g
                key={index}
                onClick={() => setActiveSection(item.title)}
                className="cursor-pointer"
              >
                {/* Rectangle */}
                <rect
                  x={position.x}
                  y={position.y}
                  width="90"
                  height="25"
                  rx="5"
                  className="fill-white"
                />
                {/* Title text inside the rect */}
                <text
                  x={position.x + 45}
                  y={position.y + 16}
                  fontSize="14"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="black"
                  stroke="none"
                >
                  {item.title}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Display Active Section Description */}
      {activeSection && (
        <div className="mt-4 p-4 border border-gray-400 rounded-lg">
          <h3 className="text-lg font-bold">{activeSection}</h3>
          <p>
            {
              brandPrismItems.find((item) => item.title === activeSection)
                ?.description
            }
          </p>
        </div>
      )}

      {section.items.MDXComponent && (
        <MDXRemote
          {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
          components={mdxComponents}
        />
      )}
    </div>
  );
};

export default BrandManifesto;
