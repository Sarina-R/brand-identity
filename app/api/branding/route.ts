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

const item3 = `    <div className="w-full px-6 py-10 space-y-16">
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

const item4 = `<div className="w-full md:px-8 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
          <h2 className="text-3xl font-bold">Monogram design</h2>
          <p className="text-base leading-relaxed">
            In designing the Alibaba monogram, we have designed a firm and decisive form, considering the brand identity and strategy, which, while being solid, is distanced from stillness and staticity by the movement of the curve in the middle of the letter A and is in harmony with the vibrant atmosphere of travel.
          </p>
          <p className="text-base leading-relaxed">
            We have designed this monogram dynamically; meaning that it has a fixed DNA and anatomy; But its appearance is variable and changes in brand communications depending on what message is to be conveyed to which audience through which medium. This approach is a bold strategy in design and allows the brand to respond intelligently to social situations and audience needs, and at the communication level, always be one step ahead of customer expectations.
          </p>
        </div>
        <div className="w-full bg-black rounded-2xl relative">
          <img
            src="https://cdn.alibaba.ir/cms/uploads/monogram_anim_2c775cc880.gif"
            alt="Monogram Animation"
            className="object-contain rounded-xl shadow-lg m-auto"
          />
        </div>
      </div>

      <div className="items-center space-y-10">
      <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
          <h2 className="text-3xl font-bold">Logotype design</h2>
          <p className="text-base leading-relaxed">
            We designed the Alibaba logo based on the previous logo. The new logo is actually an updated version of the previous logo, with more dynamic and fluid forms and less unnecessary details.
          </p>
        </div>
        <div className="w-full relative">
          <img
            src="https://cdn.alibaba.ir/cms/uploads/logo_type_365b658ee9.svg"
            alt="Logotype"
            className="object-contain rounded-xl shadow-lg m-auto"
          />
        </div>
      </div>
    </div>`;

const item5 = `<div className="mx-auto">
      <p className=" text-lg leading-relaxed mb-4">
        Yellow is one of the most recognizable brand assets and the main color of the brand. Due to its consistent use in brand communications over the years, the audience easily identifies this color with Alibaba. Therefore, it was decided to use this color in this project as well to benefit from this capacity. Additionally, yellow, as the main color of the brand, should be used in all brand communications to have the greatest visual impact. This color generally has two main uses:
      </p>
      <ul className="list-disc px-3">
        <li>
          First, as a background color in the <strong>design</strong>, covering the entire surface;
        </li>
        <li>Second, as an accent color on a white background.</li>
      </ul>
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
        image:
          "https://canada.firaworldcup.org/wp-content/uploads/2020/11/logo.png",
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
    {
      type: "logo",
      title: "Logo",
      description: "",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      items: {
        MDXComponent: "",
        MDXComponentForLogo: item4,
        title: "**Brand** Identity",
        desc: "To inspire and empower the global robotics community by **creating a dynamic platform** for innovation, collaboration, and excellence. FIRA CUP 2025 is committed to advancing technology, nurturing young talent, and pushing the boundaries of what robotics",
        download: "",
        downloadBtnText: "Download Fira Cup 2025 Tehran Logo",
        logoVersion: [
          {
            id: 1,
            name: "Vertical logo",
            text: "Priority is given to use the vertical version of the logo.",
            svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/logo-vertical-02e1c68f.svg",
          },
          {
            id: 2,
            name: "Horizontal logo",
            text: "We use the horizontal logo in situations where there is not enough space to use the vertical version or in media where the size ratio is horizontal.",
            svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/logo-horizontal-48770b9c.svg",
          },
          {
            id: 3,
            name: "Mono",
            text: "We use the monogram version in Alibaba media, such as the brand's social media, website and app icons, and video watermarks. We can also use this version in other brand communications where the brand name does not need to be mentioned due to familiarity with the audience.",
            svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/monogram-680c163d.svg",
          },
        ],
        inBackgroundSection: {
          listItems: [
            "We use the Alibaba logo on a white background, only in the primary color.",
            "We use the Alibaba logo on a black background, only in the primary color.",
            "We use the Alibaba logo on a yellow background, only in solid black.",
            "We use the Alibaba logo on gray backgrounds (permitted codes in the color palette), only in solid black or white.",
            "The use of the Alibaba logo on other colored backgrounds is not permitted.",
          ],
          image: "https://cdn.alibaba.ir/cms/uploads/logo_types_b5f0565503.svg",
        },
        alongWithOthers: {
          title: "Use it alongside other brand logos",
          desc: "When using the Alibaba logo next to other brand logos, here’s the deal: if the second logo is vertical, go with the vertical version of the Alibaba logo; if it’s horizontal, stick with the horizontal Alibaba one. To keep things balanced, make sure the height of Alibaba’s monogram matches the graphic part of the second logo in both cases. Now, if the second logo is just a logotype (no fancy graphics), use the horizontal Alibaba logo. In that case, the height of both logotypes should be the same.<br/>Always slap the Alibaba logo on the right and above the second logo. Putting it on the left or below other logos? Nope, not allowed.",
          svg: [
            "https://cdn.alibaba.ir/cms/uploads/co_logo_2_dadfc63297.svg",
            "https://cdn.alibaba.ir/cms/uploads/co_logo_3_ed6df93726.svg",
          ],
        },
      },
      style: 1,
    },
    {
      type: "mascot",
      title: "Mascot",
      description: "",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      items: {
        MDXComponent: item3,
        title: "Mascot",
        desc: "MascotMascotMascotMascotMascot",
      },
    },
    {
      type: "color",
      title: "Color",
      description: "",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      items: {
        MDXComponent: "",
        title: "Color of Our Brand",
        desc: item5,
        img: [
          "https://cdn.pixabay.com/photo/2025/03/31/15/18/mountains-9504950_640.jpg",
          "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg",
          "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        ],
        palette: {
          title: "The Main Palette",
          description:
            "Alibaba’s main palette consists of yellow, orange, black, white, and blue. In this palette, yellow is the central color. We use black and white as complementary colors alongside yellow. We also use blue in the call to action buttons.",
          colors: {
            primary: {
              id: 1001,
              hex: "#FDB813",
              hexColor: "#000000",
              name: "Main Yellow",
              shades: [
                { id: 102, hex: "#FDC107", name: "Light Yellow" },
                { id: 103, hex: "#FD9F06", name: "Medium Yellow" },
                { id: 104, hex: "#FD8C05", name: "Dark Yellow" },
              ],
            },
            secondary: {
              id: 2002,
              hex: "#F7941D",
              hexColor: "#000000",
              name: "Main Orange",
              shades: [
                { id: 202, hex: "#F9A13A", name: "Light Orange" },
                { id: 203, hex: "#F7870F", name: "Medium Orange" },
                { id: 204, hex: "#D97718", name: "Dark Orange" },
              ],
            },
            action: {
              id: 3003,
              hex: "#0077DB",
              hexColor: "#FFFFFF",
              name: "Action Blue",
              shades: [
                { id: 302, hex: "#3391E5", name: "Light Blue" },
                { id: 303, hex: "#0066B8", name: "Medium Blue" },
                { id: 304, hex: "#005A9E", name: "Dark Blue" },
              ],
            },
            complementary: {
              id: 4004,
              hex: "#000000",
              hexColor: "#FFFFFF",
              name: "Black",
              shades: [
                { id: 402, hex: "#525252", name: "Gray" },
                { id: 403, hex: "#8c8c8c", name: "Medium Gray" },
                { id: 404, hex: "#bdbdbd", name: "Light Gray" },
              ],
            },
          },
        },
        Harmony: {
          title: "Harmony",
          description: `There are three general combinations in using these colors:

                - **Combination 1:** Yellow is the dominant color in the design, and we use white and black as complementary colors.  
                - **Combination 2:** White is the dominant color, and we use yellow and black as complementary colors.  
                - **Combination 3:** Black is the dominant color, and we use yellow and white as complementary colors.  

                > **Note:** In brand communications, priority is given to using Combinations 1 and 2. Combination 3 is used sparingly and only in specific communication campaigns or environmental designs.
                 `,
          img: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/color-ratios-aae20c6c.svg",
        },
        Gradient: {
          title: "Harmony",
          img: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/color-gradient-8df2bb44.svg",
          description: `There are three general combinations in using these colors:

                - **Combination 1:** Yellow is the dominant color in the design, and we use white and black as complementary colors.  
                - **Combination 2:** White is the dominant color, and we use yellow and black as complementary colors.  
                - **Combination 3:** Black is the dominant color, and we use yellow and white as complementary colors.  

                > **Note:** In brand communications, priority is given to using Combinations 1 and 2. Combination 3 is used sparingly and only in specific communication campaigns or environmental designs.
                 `,
        },
        paletteUsage: {
          title: "Color Usage in Design",
          description:
            "For better understanding, the color palette is used in the following ways.",
          mainStructure: [
            {
              id: 5001,
              background: "#000000",
              name: "White and yellow text on a black background",
            },
            {
              id: 5002,
              background: "#FDB813",
              name: "Black text on a yellow background",
            },
            {
              id: 5003,
              background: "#FFFFFF",
              name: "Black text on a white background",
            },
          ],
          usageGuidelines: {
            correct: [
              {
                id: 6003,
                background: "#000000",
                text: "#FDB813",
                description: "Black background with yellow text",
              },
              {
                id: 7002,
                background: "#000000",
                text: "#FFFFFF",
                description: "Black background with white text",
              },
              {
                id: 7003,
                background: "#FFFFFF",
                text: "#000000",
                description: "White background with black text",
              },
              {
                id: 7001,
                background: "#FDB813",
                text: "#000000",
                description: "Yellow background with black text",
              },
            ],
            incorrect: [
              {
                id: 6001,
                background: "#FDB813",
                text: "#FFFFFF",
                description: "Yellow background with white text",
              },
              {
                id: 6002,
                background: "#FFFFFF",
                text: "#FDB813",
                description: "White background with yellow text",
              },
            ],
          },
        },
      },
      style: 1,
    },
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
