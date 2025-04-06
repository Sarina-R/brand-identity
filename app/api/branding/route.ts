import { NextResponse } from "next/server";

const item1 = `
    <div className="flex flex-col md:flex-row gap-6">
    <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-lg leading-relaxed">
          English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval England on the island of Great Britain.[4][5][6] The namesake of the language is the Angles, one of the Germanic peoples that migrated to Britain after its Roman occupiers left. English is the most spoken language in the world, primarily due to the global influences of the former British Empire (succeeded by the
        </p>
      </div>
      <div className="relative w-full md:w-1/2">
        <img
          src="https://cdn.alibaba.ir/cms/uploads/statement_1_bd405ef6af.jpg"
          alt="Scenic travel"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  `;

const item2 = `Alibaba's brand personality is defined based on the Magician archetype—the kind of magician that brings the future into the present and creates transformative experiences for its audience.
"Boldness for innovation," "the dynamic nature of travel," and "intelligence in understanding the present and future needs of both customers and the industry" are essential in crafting these experiences. These elements help solidify Alibaba's position as the leading brand in the travel industry, setting it apart from competitors while continuously creating value to meet diverse customer needs.
Innovation, shaping the future, being a pioneer, and adapting to modern audience behavior patterns are the key themes that have guided us in redefining Alibaba’s brand identity.`;

const item3 = `    <div className="w-full px-6 py-10 space-y-10">
      <h1 className="text-4xl font-bold">About Pokémon</h1>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        The pink Pokémon, however, appeared among some users due to unforeseen bugs such as the Dealer bug. 
        It was therefore perceived by the public as a secret character, fueling many myths and rumors. 
        This is why, and to the surprise of the development team, Satoshi Tajiri decided to expose Mew 
        in the Japanese magazine CoroCoro Comics in the spring of 1996 and to launch the 
        "Legendary Pokémon Offer" contest in April: twenty winners were to be selected to receive Mew.
      </p>
      <h2 className="text-2xl font-semibold">Mew's Myth and Reveal</h2>
      <div className="w-full overflow-x-auto">
        <img
          src="https://cdn.alibaba.ir/cms/uploads/dominate_tone_5ec412f50a.svg"
          alt="Mew reveal chart"
          className="min-w-[900px] max-w-none mx-auto"
        />
      </div>
    </div>`;

const data = {
  brand: {
    name: "Fira Cup 2025 Tehran",
    primaryColor: "#fdb713",
    logo: "https://canada.firaworldcup.org/wp-content/uploads/2020/11/logo.png",
  },
  menu: {
    Introduction: {
      items: [
        { id: "overview", title: "Overview", type: "overview" },
        { id: "statement", title: "Statement", type: "statement" },
      ],
    },
    "Conceptual identity": {
      items: [{ id: "brand-prism", title: "Brand Prism", type: "brand_prism" }],
    },
    "Verbal identity": {
      items: [
        { id: "tone-of-voice", title: "Tone Of Voice", type: "tone_of_voice" },
        { id: "tagline", title: "Tagline", type: "tagline" },
      ],
    },
    "Visual identity": {
      items: [
        {
          id: "design-principles",
          title: "Design Principles",
          type: "design_principles",
        },
        { id: "logo", title: "Logo", type: "logo" },
        { id: "mascot", title: "Mascot", type: "mascot" },
        { id: "color", title: "Color", type: "color" },
        { id: "typography", title: "Typography", type: "typography" },
        {
          id: "identity-in-use",
          title: "Identity In Use",
          type: "identity_in_use",
        },
      ],
    },
  },
  sections: [
    {
      type: "overview",
      title: "Brand Introduction",
      description: "FIRA CUP 2025 - **IRAN, TEHRAN**",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
      video: "",
      items: {
        group: "introduction",
        title: "overview",
        desc: "Welcome to the **FIRA CUP 2025**, where innovation meets excellence in robotics and artificial intelligence. This prestigious competition will take place at the Tehran International Exhibition Center, a venue that embodies Iran’s commitment to hosting world-class events and fostering technological progress.",
        img: "",
      },

      style: 1,
    },
    {
      type: "statement",
      title: "Statement Section",
      description: "FIRA CUP 2025 - IRAN, TEHRAN",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      video: "",
      items: {
        MDXComponent: item1,
        title: "What **leads** us to the idea of dynamic identity:",
        items: ["item1", "item2", "item3", "item4"],
        desc: `Today, on what is always a "first day," we have embarked on a new path to expand the journey from the trilogy of "going, staying, and returning" to a broader concept, as vast as our worlds full of differences. As always, we want to be companions on a journey that extends from the realm of imagination to the review of sweet memories.`,
      },

      style: 1,
    },
    {
      type: "brand_prism",
      title: "Brand Prism Section",
      description: "",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      // video: "https://files-us-east-1.t-cdn.net/files/1GG2rmxcOLAUjnt5zTqoY",
      items: {
        MDXComponent: item2,
        title: "What **leads** us to the idea of dynamic identity:",
        desc: `Today, on what is always a "first day," we have embarked on a new path to expand the journey from the trilogy of "going, staying, and returning" to a broader concept, as vast as our worlds full of differences. As always, we want to be companions on a journey that extends from the realm of imagination to the review of sweet memories.`,
        prismBrand: [
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
        ],
      },

      style: 1,
    },
    {
      type: "tone_of_voice",
      title: "Tone Of Voice",
      description: "",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      items: {
        MDXComponent: item3,
        title: "What **leads** us to the idea of dynamic identity:",
        desc: `Today, on what is always a "first day," we have embarked on a new path to expand the journey from the trilogy of "going, staying, and returning" to a broader concept, as vast as our worlds full of differences. As always, we want to be companions on a journey that extends from the realm of imagination to the review of sweet memories.`,
        sliderContent: [
          {
            id: "1001",
            // svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/polite-words-cfd9f81d.svg",
            title: "Friendly Vibe",
            description:
              '**Today**, on what is always a "first day," <br/> we have embarked on a new path to expand the journey from the trilogy of "going, staying, and returning" to a broader concept, as vast as our worlds full of differences. As always, we want to be companions on a journey that extends from the realm of imagination to the review of sweet memories.',
          },
          {
            id: "1002",
            svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/polite-words-cfd9f81d.svg",
            title: "Mew Vibe",
            description:
              '**Mew**, on what is always a "first day," <br/> we have embarked on a new path to expand the journey from the trilogy of "going, staying, and returning" to a broader concept, as vast as our worlds full of differences. As always, we want to be companions on a journey that extends from the realm of imagination to the review of sweet memories.',
          },
          {
            id: "1003",
            svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/polite-words-cfd9f81d.svg",
            title: "Mew Mew Vibe",
            description:
              '**Mew Mew**, on what is always a "first day," <br/> we have embarked on a new path to expand the journey from the trilogy of "going, staying, and returning" to a broader concept, as vast as our worlds full of differences. As always, we want to be companions on a journey that extends from the realm of imagination to the review of sweet memories.',
          },
        ],

        style: 1,
      },
    },
    {
      type: "tagline",
      title: "Tagline",
      description: "",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      items: {
        MDXComponent: item1,
        title: "**TITLE** If there is",
        desc: "some desc :)",
      },
    },
    {
      type: "design_principles",
      title: "Design Principles",
      description: "",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      items: {
        MDXComponent: "",
        title: "What and Why",
        desc: ` # 🌟 Alibaba Design Principles <br/>
          Alibaba Design Principles is a **framework** rooted in the brand’s conceptual identity —
          strategically shaping and unifying all design outputs to ensure a **coherent and consistent experience** for the audience interacting with the Alibaba brand.
          To clarify the difference between <strong>Design Principles</strong> and <strong>Visual Identity Guidelines</strong>:
          <br />
          <strong>Design Principles</strong> focus on <em>overall strategies</em> and take a <em>big picture</em> view of the brand design landscape.
        `,
        video: "https://files-us-east-1.t-cdn.net/files/1GG2rmxcOLAUjnt5zTqoY",
        videoCover:
          "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
        tabsContent: [
          {
            title: "Design Strategics",
            description: `**AliBaba’s strategic design** is a comprehensive travel solution. It always aims to optimize the journey and offer a seamless experience across all stages.
                          This mental model in strategic design helps the brand to evolve and emerge continuously.
                          Strategic design in AliBaba is in service of communication and business growth.
                          The foundation of strategic design stems from upstream strategies and loops through feedback and iteration to complete and refine one another.
              `,
            svg: "https://cdn.alibaba.ir/cms/uploads/design_principles_2_cd79d2f6e8.svg",
          },
          {
            title: "Creative Design",
            description: `Creative design pushes innovation boundaries and aligns aesthetic vision with user needs...`,
            svg: "https://cdn.alibaba.ir/cms/uploads/design_principles_2_cd79d2f6e8.svg",
          },
          {
            title: "User-Centric Design",
            description: `Centered around users, this approach puts empathy, accessibility, and usability first...`,
            svg: "",
          },
        ],
      },
    },
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
