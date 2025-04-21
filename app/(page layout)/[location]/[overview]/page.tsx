"use client";

import { useData } from "@/hooks/DataProvider";
import OverviewSection from "@/components/dynamic-section/OverviewSection";
import { usePathname } from "next/navigation";
import StatementSection from "@/components/dynamic-section/StatementSection";
import BrandPrism from "@/components/dynamic-section/BrandPrism";
import ToneOfVoiceSection from "@/components/dynamic-section/ToneOfVoiceSection";
import TaglineSection from "@/components/dynamic-section/TaglineSection";
import DesignPrinciplesSection from "@/components/dynamic-section/DesignPrinciplesSection";
import LogoSection from "@/components/dynamic-section/LogoSection";
import ColorSection from "@/components/dynamic-section/ColorSection";
import TypographySection from "@/components/dynamic-section/TypographySection";

const Page = () => {
  const { data, loading } = useData();
  const pathname = usePathname();

  if (loading || !data)
    return <div className="text-center text-gray-500">Loading...</div>;

  const parts = pathname.split("/").filter(Boolean);
  const location = parts[0];
  const itemId = parts[1];

  const currentType = Object.values(data.menu)
    .flatMap((menu) => menu.items)
    .find((item) => item.id === itemId)?.type;

  const section = data.sections.find((sec) => sec.type === currentType);

  const renderSection = () => {
    if (!section) return <div>No section</div>;

    switch (section.type) {
      case "overview":
        return <OverviewSection key={section.type} section={section} />;
      case "statement":
        return <StatementSection key={section.type} section={section} />;
      case "brand_prism":
        return (
          <BrandPrism
            key={section.type}
            section={section}
            primaryColor={data.brand.primaryColor || "black"}
          />
        );
      case "tone_of_voice":
        return (
          <ToneOfVoiceSection
            key={section.type}
            section={section}
            primaryColor={data.brand.primaryColor}
          />
        );
      case "tagline":
        return <TaglineSection key={section.type} section={section} />;
      case "design_principles":
        return (
          <DesignPrinciplesSection
            key={section.type}
            section={section}
            primaryColor={data.brand.primaryColor}
          />
        );
      case "logo":
        return (
          <LogoSection
            key={section.type}
            section={section}
            logo={data.brand.logo}
            darkLogo={data.brand.darkLogo}
          />
        );
      case "mascot":
        return <TaglineSection key={section.type} section={section} />;
      case "color":
        return (
          <ColorSection
            key={section.type}
            section={section}
            primaryColor={data.brand.primaryColor}
          />
        );
      case "typography":
        return <TypographySection key={section.type} section={section} />;
      case "identity_in_use":
        return <TaglineSection key={section.type} section={section} />;

      default:
        return <div>No type match</div>;
    }
  };

  return <div>{renderSection()}</div>;
};

export default Page;
