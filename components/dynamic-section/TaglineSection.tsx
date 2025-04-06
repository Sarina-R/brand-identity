import { Tagline } from "@/app/type";
import { useMDXComponents } from "@/mdx-component";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

const TaglineSection = ({ section }: { section: Tagline }) => {
  const mdxComponents = useMDXComponents({});

  return (
    <div className="sm:p-6 p-2">
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
