"use client";

import { useEffect, useState } from "react";
import { Color, ColorItems } from "@/app/type";
import { Serialized, serializeTextFields } from "@/lib/serializeTextFields";
import PaletteUsage from "../ColorSection/PaletteUsage";
import FlexComponent from "../ColorSection/FlexComponent";
import Header from "../ColorSection/Header";
import PaletteComponent from "../ColorSection/Palette";

const ColorSection = ({
  section,
  primaryColor,
}: {
  section: Color;
  primaryColor: string;
}) => {
  const [serializedItems, setSerializedItems] =
    useState<Serialized<ColorItems | undefined>>();

  useEffect(() => {
    const serializeFunction = async () => {
      const serializedItems = await serializeTextFields(section.items);
      setSerializedItems(serializedItems);
    };

    serializeFunction();
  }, [section]);

  return (
    <div className="px-2 md:px-6 lg:px-14 py-16 space-y-24 md:space-y-32">
      <Header
        serializedItems={serializedItems}
        section={section}
        primaryColor={primaryColor}
      />

      {serializedItems?.palette && (
        <PaletteComponent palette={serializedItems.palette} />
      )}

      {serializedItems?.Harmony && (
        <FlexComponent data={serializedItems.Harmony} />
      )}
      {serializedItems?.Gradient && (
        <FlexComponent data={serializedItems.Gradient} />
      )}
      {serializedItems?.paletteUsage && (
        <PaletteUsage usage={serializedItems.paletteUsage} />
      )}
    </div>
  );
};

export default ColorSection;
