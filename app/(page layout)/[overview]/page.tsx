"use client";

import { useData } from "@/hooks/DataProvider";
import OverviewSection from "@/components/dynamic-section/OverviewSection";
import { usePathname } from "next/navigation";
import StatementSection from "@/components/dynamic-section/StatementSection";
import BrandPrism from "@/components/dynamic-section/BrandPrism";

const Page = () => {
  const { data, loading } = useData();
  const pathname = usePathname();

  if (loading || !data)
    return <div className="text-center text-gray-500">Loading...</div>;

  const currentType = Object.values(data.menu)
    .flatMap((menu) => menu.items)
    .find((item) => pathname.includes(item.id))?.type;

  const section = data.sections.find((sec) => sec.type === currentType);

  const renderSection = () => {
    if (!section) return <div>No section</div>;

    switch (section.type) {
      case "overview":
        return <OverviewSection key={section.type} section={section} />;
      case "statement":
        return <StatementSection key={section.type} section={section} />;
      case "brand_prism":
        return <BrandPrism />;
      // case "tone_of_voice":
      //   return <div>Tone of Voice Section (To be implemented)</div>;
      // case "tagline":
      //   return <div>Tagline Section (To be implemented)</div>;
      // case "design_principles":
      //   return <div>Design Principles Section (To be implemented)</div>;
      // case "logo":
      //   return <div>Logo Section (To be implemented)</div>;
      // case "mascot":
      //   return <div>Mascot Section (To be implemented)</div>;
      // case "color":
      //   return <div>Color Section (To be implemented)</div>;
      // case "typography":
      //   return <div>Typography Section (To be implemented)</div>;
      // case "identity_in_use":
      //   return <div>Identity In Use Section (To be implemented)</div>;
      default:
        return <div>No type match</div>;
    }
  };

  return <div>{renderSection()}</div>;
};

export default Page;
