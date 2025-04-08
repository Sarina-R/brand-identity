import { serializeTextFields } from "@/lib/serializeTextFields";
import { Color } from "@/app/type";
import Header from "../ColorSection/Header";
import PaletteUsage from "../ColorSection/PaletteUsage";
import Palette from "../ColorSection/Palette";

const ColorSection = async ({ section }: { section: Color }) => {
  const serializedItems = await serializeTextFields(section.items);

  return (
    <div>
      <Header
        title={serializedItems.title}
        description={serializedItems.desc}
      />
      <Palette palette={serializedItems.palette} />
      <PaletteUsage usage={serializedItems.paletteUsage} />
    </div>
  );
};

export default ColorSection;
