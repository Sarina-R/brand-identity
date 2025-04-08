"use client";

import { Serialized, serializeTextFields } from "@/lib/serializeTextFields";
import { Color, ColorItems } from "@/app/type";
import PaletteUsage from "../ColorSection/PaletteUsage";
import Palette from "../ColorSection/Palette";
import FlexComponent from "../ColorSection/FlexComponent";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Header from "../ColorSection/Header";
import { useEffect, useState } from "react";

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
    <div>
      <Header
        serializedItems={serializedItems}
        section={section}
        primaryColor={primaryColor}
      />
      {/* {serializedItems.Harmony && (
        <FlexComponent data={serializedItems.Harmony} />
      )}
      {serializedItems.Gradient && (
        <FlexComponent data={serializedItems.Gradient} />
      )} */}
      {/* {serializedItems.palette && <Palette palette={serializedItems.palette} />}
      {serializedItems.paletteUsage && <PaletteUsage usage={serializedItems.paletteUsage} />} */}
    </div>
  );
};

export default ColorSection;
