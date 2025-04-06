import { Tagline } from "@/app/type";
import { useMDXComponents, useMDXComponents1 } from "@/mdx-component";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

const TaglineSection = ({ section }: { section: Tagline }) => {
  const mdxComponents = useMDXComponents({});
  const mdxComponents1 = useMDXComponents1({});

  return (
    <div className="sm:p-6 p-2 space-y-8">
      <div className="space-y-4 p-4 bg-neutral-100 dark:bg-neutral-900 rounded-2xl">
        <div className="text-2xl text-neutral-800 dark:text-neutral-200 font-bold">
          {section.items.title && (
            <MDXRemote
              {...(section.items.title as MDXRemoteSerializeResult)}
              components={mdxComponents1}
            />
          )}
        </div>
        <div className="text-neutral-600 dark:text-neutral-400">
          {section.items.desc && (
            <MDXRemote
              {...(section.items.desc as MDXRemoteSerializeResult)}
              components={mdxComponents1}
            />
          )}
        </div>
      </div>
      {section.items.MDXComponent && (
        <MDXRemote
          {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
          components={mdxComponents}
        />
      )}
    </div>
  );
};

export default TaglineSection;
