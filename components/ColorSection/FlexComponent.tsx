import { HarmonySection } from "@/app/type";
import React from "react";

const FlexComponent = ({ data }: { data: HarmonySection }) => {
  return <div>{data.img}</div>;
};

export default FlexComponent;
