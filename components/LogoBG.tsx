import Image from "next/image";
import { InBackgroundSection } from "@/app/type";

interface Props {
  data: InBackgroundSection;
}

const LogoBackground = ({ data }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 py-8">
      <div className="md:sticky md:top-20 self-start space-y-4">
        <h2 className="text-2xl font-bold">In Background</h2>
        <ul className="list-disc pr-5 space-y-2 text-sm text-neutral-700 leading-relaxed">
          {data.listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      <div className="overflow-auto">
        <Image
          src={data.image}
          alt="logo background usages"
          width={1000}
          height={1000}
          className="w-full h-auto rounded-xl"
        />
      </div>
    </section>
  );
};

export default LogoBackground;
