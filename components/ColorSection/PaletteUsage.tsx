import { PaletteUsage as PaletteUsageType } from "@/app/type";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents } from "@/mdx-component";
import { Check, X } from "lucide-react";

const PaletteUsage = ({ usage }: { usage: PaletteUsageType }) => {
  const mdxComponents = useMDXComponents({});

  return (
    <div className="container mx-auto px-6 py-12 md:py-16">
      <h2 className="text-2xl font-bold mb-4">
        {typeof usage.title === "string" ? (
          usage.title
        ) : (
          <MDXRemote {...usage.title} components={mdxComponents} />
        )}
      </h2>

      <p className="mb-8 text-gray-600">
        {typeof usage.description === "string" ? (
          usage.description
        ) : (
          <MDXRemote {...usage.description} components={mdxComponents} />
        )}
      </p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Main Structure</h3>
        <ul className="list-disc pl-5">
          {usage.mainStructure.map((item) => (
            <li key={item.id} className="mb-2 text-sm">
              {item.name} (Background:
              <span
                style={{ backgroundColor: item.background }}
                className="px-[0.65rem] m-1 rounded border"
              />
              )
            </li>
          ))}
        </ul>
      </div>

      {/* Usage */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Correct Usage */}
          {usage.usageGuidelines.correct.map((item) => (
            <div
              key={`${item.id}-${item.background}`}
              className="relative rounded-lg shadow-md overflow-hidden h-40"
              style={{ backgroundColor: item.background }}
            >
              <div className="p-4 flex justify-between items-center">
                <p
                  className="absolute bottom-6 font-semibold"
                  style={{ color: item.text }}
                >
                  This combination is legible and correct
                </p>
                <div className="absolute right-3 top-5">
                  <div
                    className="flex gap-2 text-white text-sm font-bold items-center justify-center px-2 bg-green-600 rounded-3xl p-1"
                    aria-label="Correct usage"
                  >
                    Correct
                    <div className="rounded-full bg-green-400 p-1">
                      <Check color="white" size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Incorrect Usage */}
          {usage.usageGuidelines.incorrect.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg shadow-md overflow-hidden h-40"
              style={{ backgroundColor: item.background }}
            >
              <div className="p-4 flex justify-between items-center">
                <p
                  className="absolute bottom-6 font-semibold"
                  style={{ color: item.text }}
                >
                  This combination is illegible and incorrect.
                </p>
                <div className="absolute right-3 top-5">
                  <div
                    className="flex gap-2 text-white text-sm font-bold items-center justify-center px-2 bg-red-600 rounded-3xl p-1"
                    aria-label="Correct usage"
                  >
                    Incorrect
                    <div className="rounded-full bg-red-400 p-1">
                      <X color="white" size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaletteUsage;
