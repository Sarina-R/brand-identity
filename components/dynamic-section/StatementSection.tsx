import { Statement } from "@/app/type";
import { useMDXComponents } from "@/mdx-component";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface StatementProps {
  section: Statement;
}

const StatementSection = ({ section }: StatementProps) => {
  const mdxComponents = useMDXComponents({});

  return (
    <div>
      <MDXRemote
        {...(section.items.MDXComponent as MDXRemoteSerializeResult)}
        components={mdxComponents}
      />
    </div>
  );
};

export default StatementSection;
