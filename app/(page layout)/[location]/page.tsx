"use client";

import OverviewSection from "@/components/dynamic-section/OverviewSection";
import { useData } from "@/hooks/DataProvider";
import { Section, Overview } from "@/app/type";

const Page = () => {
  const { data, loading } = useData();

  if (loading || !data) {
    return <div className="text-center text-neutral-500">Loading...</div>;
  }

  const overviewSection = data.sections.find(
    (section: Section) => section.type === "overview"
  ) as Overview | undefined;

  if (!overviewSection) {
    return (
      <div className="text-red-500 text-center mt-10">
        Overview section not found.
      </div>
    );
  }

  return (
    <OverviewSection key={overviewSection.type} section={overviewSection} />
  );
};

export default Page;
