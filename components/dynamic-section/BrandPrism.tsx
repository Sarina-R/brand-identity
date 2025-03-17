import { useState } from "react";

const sections = [
  {
    title: "Physique",
    key: "physique",
    description:
      "Physique describes the physical characteristics of your brand—that is, everything your customers can visually perceive about you. Logo, style guide, iconography, color palette, and the presentation of the product itself all go into this category.",
  },
  {
    title: "Personality",
    key: "personality",
    description:
      "If physique is the face of your brand, personality is the voice. Your brand personality not only addresses what you say but how you say it, and it is not limited to verbal communication.",
  },
  {
    title: "Culture",
    key: "culture",
    description:
      "Culture is your brand’s origin story. Where was your brand born? Where does it live? What is the belief system and values it ascribes to and why?",
  },
  {
    title: "Relationship",
    key: "relationship",
    description:
      "Relationship is the engagement between a brand and consumers.This is about more than a monetary transaction: think about how your brand maintains a healthy relationship with its customers from the initial interaction to the after purchase period.",
  },
  {
    title: "Self-Image",
    key: "selfImage",
    description:
      "Self-image is how customers visualize their ideal selves. Understanding this allows brands to cater to their customers more effectively. Consider how their purchases and interactions with you improve their lives.",
  },
  {
    title: "Reflection",
    key: "relationship",
    description:
      "Reflection describes who you want your customer to be. Who would you ideally like to reach? Specificity is key here. For a company that is selling biodegradable cosmetics products, it could be working women in their 20s who live in cosmopolitan areas and adhere to a vegan diet.",
  },
];

const BrandManifesto = () => {
  const [activeSection, setActiveSection] = useState("relationship");

  return (
    <>
      <div className="flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-64 h-64">
          <g fill="none" stroke="black" strokeWidth="2" strokeLinejoin="round">
            {/* Outer Prism Shape */}
            <polygon points="50,30 150,30 180,100 150,170 50,170 20,100" />

            {/* Inner Blocks */}
            <rect
              x="85"
              y="22"
              width="30"
              height="20"
              rx="5"
              className="fill-black"
            />
            <rect
              x="22"
              y="55"
              width="30"
              height="20"
              rx="5"
              className="fill-black"
            />
            <rect
              x="150"
              y="55"
              width="30"
              height="20"
              rx="5"
              className="fill-black"
            />
            <rect
              x="22"
              y="125"
              width="30"
              height="20"
              rx="5"
              className="fill-black"
            />
            <rect
              x="150"
              y="125"
              width="30"
              height="20"
              rx="5"
              className="fill-black"
            />
            <rect
              x="85"
              y="160"
              width="30"
              height="20"
              rx="5"
              className="fill-black"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default BrandManifesto;
