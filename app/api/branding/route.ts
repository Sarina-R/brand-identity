import { NextResponse } from "next/server";
import {
  BrandIdentityGlobal,
  BrandIdentity,
  BrandIdentityCA,
  Tagline,
  item2,
  item2CA,
  ToneOfVoice,
  ToneOfVoiceCA,
  Mascot,
  DesignPrinciples,
  DesignPrinciplesCA,
  IdentityInUse,
  MDXComponentCa,
  PatternCA,
  ToneOfVoiceG,
  MascotG,
  identityInUseG,
} from "./mdx";

const data = {
  global: {
    brand: {
      name: "FIRA RoboWorld Cup 2025 Tehran",
      primaryColor: "#01acec",
      logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-logo-color-horizontal-no-slogan.svg",
      darkLogo:
        "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-wordmark-light-slogan.svg",
      font: {
        name: "Heebo",
        weights: [400, 500, 700, 900],
        subsets: ["latin", "latin-ext"],
      },
    },
    menu: {
      Introduction: {
        items: [
          { id: "overview", title: "Overview", type: "overview" },
          { id: "brand-identity", title: "Brand Identity", type: "statement" },
        ],
      },
      "Conceptual identity": {
        items: [
          { id: "brand-prism", title: "Brand Prism", type: "brand_prism" },
        ],
      },
      "Verbal identity": {
        items: [
          {
            id: "tone-of-voice",
            title: "Tone Of Voice",
            type: "tone_of_voice",
          },
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
        description: "FIRA RoboWorld Cup 2025 ",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
        video: "",
        items: {
          group: "introduction",
          title: "overview",
          desc: "Welcome to the brand book of the Federation of International Robot Sports Association (FIRA). As the leading global organization dedicated to the promotion and development of robot sports, FIRA stands at the forefront of innovation, competition, and education in this exciting field.",
          img: "",
        },

        style: 1,
      },
      {
        type: "statement",
        title: "Brand Identity",
        description: "FIRA RoboWorld Cup 2025",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        video: "",
        items: {
          MDXComponent: BrandIdentityGlobal,
          title: "Brand Identity",
          items: ["Vision", "Mission", "Target"],
          desc: `“At FIRA, we’ve pioneered solutions that set new industry standards. Our latest innovation is a testament to our commitment to excellence.”`,
        },

        style: 1,
      },
      {
        type: "brand_prism",
        title: "Brand Prism Section",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
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
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: ToneOfVoiceG,
          title: "Voice",
          sliderContent: [
            {
              id: "1001",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(5).png",
              title: "Confident & Knowledgeable",
              description: `FIRA speaks with confidence and authority. Our voice reflects a deep understanding of our industry and the needs of our audience. We provide clear, accurate, and insightful information, establishing FIRA as a trusted expert.`,
            },
            {
              id: "1002",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(6).png",
              title: "Professional & Approachable",
              description: `While maintaining a professional demeanor, FIRA is also approachable. We strike a balance between expertise and friendliness, ensuring that our communication is not only reliable but also engaging and relatable.`,
            },
            {
              id: "1003",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(7).png",
              title: "Innovative & Forward-Thinking",
              description: `Our voice reflects our commitment to innovation and future-oriented thinking. We convey enthusiasm for new ideas and solutions, positioning FIRA at the forefront of industry advancements.`,
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
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: Tagline,
          title: "Enjoy Robots, Enjoy Life",
        },
      },
      {
        type: "design_principles",
        title: "Design Principles",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: "",
          title: "Our Logo",
          desc: `it's a movement shaping the future of robotics and AI. By fostering innovation, collaboration, and world-class competitions, we are building a dynamic ecosystem where researchers, engineers, and entrepreneurs come together to push boundaries. From groundbreaking ideas to real-world impact, FIRA Canada is the catalyst for a smarter, more connected future—where technology is for everyone, and innovation knows no limits.`,
          image:
            "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
          video:
            "https://files-us-east-1.t-cdn.net/files/1GG2rmxcOLAUjnt5zTqoY",
          videoCover:
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//Screenshot-2025-02-13-at-12.56.18%20PM.png",
          tabsContent: [
            {
              title: "Innovation",
              description: `Pioneering advancements in robotics, constantly pushing boundaries.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/icons/Copy%20of%20FIRA%20Brand%20Book%20(12).png",
            },
            {
              title: "Excellence",
              description: `Striving for the highest standards in competitions and education.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/icons/Copy%20of%20FIRA%20Brand%20Book%20(11).png",
            },
            {
              title: "Unity",
              description: `Bringing together a diverse global community, celebrating collaboration.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/icons/Copy%20of%20FIRA%20Brand%20Book%20(10).png",
            },
            {
              title: "Inspiration",
              description: `Motivating the next generation of innovators and leaders in robotics.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/icons/Copy%20of%20FIRA%20Brand%20Book%20(9).png",
            },
            {
              title: "Integrity",
              description: `Upholding fairness, transparency, and respect in all activities.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/icons/Copy%20of%20FIRA%20Brand%20Book%20(8).png",
            },
          ],
        },
      },
      {
        type: "logo",
        title: "Logo",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: "",
          MDXComponentForLogo: "",
          title: "**Brand** Identity",
          desc: "To inspire and empower the global robotics community by **creating a dynamic platform** for innovation, collaboration, and excellence. FIRA RoboWorld Cup 2025 is committed to advancing technology, nurturing young talent, and pushing the boundaries of what robotics",
          download:
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-logo-color-horizontal-no-slogan.svg",
          downloadBtnText: "Download FIRA RoboWorld Cup 2025 Logo",
          logoVersion: [
            {
              id: 1,
              name: "Horizontal logo",
              text: "Priority is given to use the horizontal version of the logo.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-logo-color-horizontal-no-slogan.svg",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-wordmark-light-slogan.svg",
            },
            {
              id: 2,
              name: "Vertical logo",
              text: "We use the vertical logo in situations where there is not enough space to use the vertical version or in media where the size ratio is horizontal.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//Copy%20of%20FIRA%20Brand%20Book%20(13).png",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-logo-vertical-light-slogan.svg",
            },
            {
              id: 3,
              name: "Mono",
              text: "We use the monogram version in FIRA media, such as the brand's social media, website and app icons, and video watermarks. We can also use this version in other brand communications where the brand name does not need to be mentioned due to familiarity with the audience.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//mono.png",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//mono-dark0.png",
            },
          ],
          inBackgroundSection: {
            listItems: [
              "We use the FIRA logo on a white background, only in the primary color.",
              "We use the FIRA logo on a black background, only in the solid white.",
              "We use the FIRA logo on a blue background, only in solid white.",
              "The use of the FIRA logo on other colored backgrounds is not permitted.",
            ],
            inBackgroundComponent: [
              {
                colorBg: "#FFFFFF",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-logo-color-horizontal-no-slogan.svg",
              },
              {
                colorBg: "#000000",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-wordmark-light-slogan.svg",
              },
              {
                colorBg: "#01acec",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-wordmark-light-slogan.svg",
              },
              {
                colorBg: "#4f4f4f",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//fira-wordmark-light-slogan.svg",
              },
            ],
          },
          alongWithOthers: {
            title: "Use it alongside other brand logos",
            desc: "When using the FIRA logo next to other brand logos, here’s the deal: if the second logo is vertical, go with the vertical version of the FIRA logo; if it’s horizontal, stick with the horizontal FIRA one. To keep things balanced, make sure the height of FIRA’s logo matches the graphic part of the second logo in both cases. Now, if the second logo is just a logotype (no fancy graphics), use the horizontal FIRA logo. In that case, the height of both logotypes should be the same.<br/>Always slap the FIRA logo on the left and above the second logo. Putting it on the right or below other logos? Nope, not allowed.",
            svg: [
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/co-branding/Copy%20of%20FIRA%20Brand%20Book%20(7).svg",
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/co-branding/Copy%20of%20FIRA%20Brand%20Book%20(2).svg",
            ],
            darkSvg: [
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/co-branding/Copy%20of%20FIRA%20Brand%20Book%20(6).svg",
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global/co-branding/Copy%20of%20FIRA%20Brand%20Book%20(3).svg",
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
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: MascotG,
          // title: "Mascot",
          // desc: "MascotMascotMascotMascotMascot",
        },
      },
      {
        type: "color",
        title: "Color",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: "",
          title: "Color of Our Brand",
          desc: `Our color palette draws inspiration from nature, resulting in a fresh and vibrant aesthetic. It is imperative to apply these colors consistently across all platforms to uphold brand cohesion.`,
          img: [
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//c4b71d8c3f622a80656996ddcef82a32.jpg",
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//blue-sky-with-clouds-reflection-sky_36682-4443.avif",
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/global//c4b71d8c3f622a80656996ddcef82a32.jpg",
          ],
          palette: {
            title: "The Main Palette",
            description:
              "FIRA’s main palette consists of blue, orange, white. In this palette, blue is the central color. We use orange and white as complementary colors alongside blue.",
            colors: {
              primary: {
                id: 1001,
                hex: "#01acec",
                hexColor: "#FFFFFF",
                name: "Main blue",
                shades: [
                  { id: 102, hex: "#34bdf0", name: "Light blue" },
                  { id: 103, hex: "#80d6f6", name: "Medium blue" },
                ],
              },
              secondary: {
                id: 2002,
                hex: "#FF7838",
                hexColor: "#FFFFFF",
                name: "Main Orange",
                shades: [
                  { id: 202, hex: "##ff9360", name: "Light Orange" },
                  { id: 203, hex: "#ffbc9c", name: "Medium Orange" },
                ],
              },
              light: {
                id: 3003,
                hex: "#FFF4E9",
                hexColor: "#000000",
                name: "Action white",
                shades: [],
              },
              darkBlue: {
                id: 4004,
                hex: "#3551f2",
                hexColor: "#FFFFFF",
                name: "darkBlue",
                shades: [
                  { id: 403, hex: "#5d74f5", name: "Medium darkBlue" },
                  { id: 404, hex: "#9aa8f9", name: "Light darkBlue" },
                ],
              },
              gray: {
                id: 5004,
                hex: "#4f4f4f",
                hexColor: "#FFFFFF",
                name: "gray",
                shades: [
                  { id: 503, hex: "#727272", name: "Medium gray" },
                  { id: 504, hex: "#A7A7A7", name: "Light gray" },
                ],
              },
              yellow: {
                id: 6004,
                hex: "#FFD05D",
                hexColor: "#000000",
                name: "yellow",
                shades: [
                  { id: 603, hex: "#ffd97d", name: "Medium yellow" },
                  { id: 604, hex: "#ffe8ae", name: "Light yellow" },
                ],
              },
            },
          },
          paletteUsage: {
            title: "Color Usage in Design",
            description:
              "For better understanding, the color palette is used in the following ways.",
            mainStructure: [
              {
                id: 5001,
                background: "#000000",
                name: "White and blue text on a black background",
              },
              {
                id: 5002,
                background: "#01acec",
                name: "Black text on a blue background",
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
                  text: "#01acec",
                  description: "Black background with blue text",
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
                  background: "#01acec",
                  text: "#000000",
                  description: "blue background with black text",
                },
              ],
              incorrect: [
                {
                  id: 6001,
                  background: "#01acec",
                  text: "#FFFFFF",
                  description: "blue background with white text",
                },
                {
                  id: 6002,
                  background: "#FFFFFF",
                  text: "#01acec",
                  description: "White background with blue text",
                },
              ],
            },
          },
        },
        style: 1,
      },
      {
        type: "typography",
        title: "Typography",
        description: "Poppins",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        font: {
          name: "Poppins",
          weights: [400, 500, 700, 900],
          subsets: ["latin", "latin-ext"],
        },
        items: {
          MDXComponent: "",
          title: "Typography",
          desc: "We use a custom font selected for **readability** and **elegance**. This typography helps to reinforce our *brand identity* and should be used in all communications.",
          fontFeatureComponent: {
            title: "Font Features",
            desc: "In FIRA Font Design, in addition to the main features, we have foreseen a set of supplementary features that enrich the typography. These features include: ligatures, alternate forms, strokes, style sets, and text and tabular numbers.",
            componentItems: [
              {
                text: "**Build** <br/> The Future",
                color: "#000000",
                bg: "#01acec",
              },
              {
                text: "Challenge <br/> **Global Teams**",
                color: "#000000",
                bg: "#FFFFFF",
              },
              {
                text: `<p className="text-[#01acec]">FIRA 2025 </p> <br/>
                   <p className="text-white font-bold">Starts Soon</p>`,
                color: "",
                bg: "#000000",
              },
              {
                text: "Innovate <br/> **Win Big**",
                color: "#000000",
                bg: "#FFFFFF",
              },
            ],
          },
          typographyPrinciples: {
            title: "Basic Typography Principles",
            description:
              "In typography, FIRA follows two fundamental principles:",
            section: [
              {
                subtitle: "Readability",
                content:
                  "Readability is a core principle of FIRA’s typography. We organize all typographic elements—letter spacing, line spacing, and text alignment—so that the text is delivered to the reader in the clearest possible way.",
                examples: [
                  {
                    status: "incorrect",
                    mdx: '<div className="text-left leading-5">\n  <p className="max-w-40">First-level heading with short and balanced text\nSecond-level heading that is longer and wraps to the next line\n...</p>\n</div>',
                    label: "incorrect",
                  },
                  {
                    status: "correct",
                    mdx: '<div className="text-left leading-6">\n  <p className="max-w-40">First-level heading with short and balanced text\nSecond-level heading that is longer and wraps to the next line\n...</p>\n</div>',
                    label: "correct",
                  },
                ],
              },
              {
                subtitle: "Respecting Content Hierarchy",
                content:
                  "One of FIRA's communication features is that its content always delivers priority and importance. In typography, we use characteristics like text size, weight, font, graphic elements, etc., to clearly communicate the hierarchy of different content layers to the audience.",
                examples: [
                  {
                    status: "incorrect",
                    mdx: `<div className="space-y-1 sm:mx-2">
        <div className="bg-neutral-500 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-20" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
        <div className="bg-neutral-500 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-20" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
      </div>`,
                    label: "incorrect",
                  },
                  {
                    status: "correct",
                    mdx: `<div className="space-y-1 sm:mx-2">
        <div className="bg-neutral-500 h-5 w-8 sm:w-14 mb-3" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-18" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-18" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
      </div>`,
                    label: "correct",
                  },
                ],
              },
            ],
          },
          weights: {
            title: "Weights",
            desc: `In designing the FIRA font, in addition to the main features, we have foreseen a set of supplementary features that enrich the typography. These features include: ligatures, alternating forms, strokes, style sets, and text and tabular numbers.`,
            sampleText: "Some Sample Text",
          },
        },
      },
      {
        type: "identity_in_use",
        title: "Identity In Use",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: identityInUseG,
          title: "Brand in Action: FIRA RoboWorld Cup 2025",
        },
      },
    ],
  },
  ir: {
    brand: {
      name: "FIRA Cup 2025 Tehran",
      primaryColor: "#fdb813",
      logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//logo.svg",
      darkLogo:
        "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-logo.png",
      font: {
        name: "Poppins",
        weights: [400, 500, 700],
        subsets: ["latin", "latin-ext"],
      },
    },
    menu: {
      Introduction: {
        items: [
          { id: "overview", title: "Overview", type: "overview" },
          { id: "statement", title: "Statement", type: "statement" },
        ],
      },
      "Conceptual identity": {
        items: [
          { id: "brand-prism", title: "Brand Prism", type: "brand_prism" },
        ],
      },
      "Verbal identity": {
        items: [
          {
            id: "tone-of-voice",
            title: "Tone Of Voice",
            type: "tone_of_voice",
          },
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
        description: "Iran FIRA Open Competition 2025 - **IRAN, TEHRAN**",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
        video: "",
        items: {
          group: "introduction",
          title: "overview",
          desc: "Welcome to the **Iran FIRA Open Competition**, where innovation meets excellence in robotics and artificial intelligence. This prestigious competition will take place at the Tehran International Exhibition Center, a venue that embodies Iran’s commitment to hosting world-class events and fostering technological progress.",
          img: "",
        },

        style: 1,
      },
      {
        type: "statement",
        title: "Statement Section",
        description: "Iran FIRA Open Competition 2025 - IRAN, TEHRAN",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        video: "",
        items: {
          MDXComponent: BrandIdentity,
          title: "What **leads** us to the idea of dynamic identity:",
          items: ["Vision", "Mission", "Target"],
          desc: `Iran FIRA Open Competition 2025 represents global innovation in robotics and AI, uniting
              visionaries to challenge boundaries and inspire progress. It’s a platform where
              creativity meets technology, shaping the future of robotics.`,
        },

        style: 1,
      },
      {
        type: "brand_prism",
        title: "Brand Prism Section",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
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
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        items: {
          MDXComponent: ToneOfVoice,
          title: "",
          desc: "Our brand voice combines professionalism and friendliness to prioritize exceptional customer service. It remains adaptable to different contexts and audiences.",
          sliderContent: [
            {
              id: "1001",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(2).png",
              title: "Trustworthy",
              description:
                "**FIRA CUP** demonstrates *trustworthiness* and *authority* in all our communications.",
            },
            {
              id: "1002",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(1).png",
              title: "Innovative",
              description: `As a **pioneering company**, we adopt an *energetic* and *dynamic* tone in our communications.`,
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
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        items: {
          MDXComponent: Tagline,
          title: "Enjoy Robots, Enjoy Life",
        },
      },
      {
        type: "design_principles",
        title: "Design Principles",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        items: {
          MDXComponent: DesignPrinciples,
          title: "Our Logo",
          desc: ` Ensure use a custom font for readability and elegance to enhance brand identity across all communication channels.        `,
          image:
            "https://canada.firaworldcup.org/wp-content/uploads/2020/11/logo.png",
          video:
            "https://files-us-east-1.t-cdn.net/files/1GG2rmxcOLAUjnt5zTqoY",
          videoCover:
            "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
          tabsContent: [
            {
              title: "Design Strategics",
              description: `**FIRA Iran strategic design** is a comprehensive travel solution. It always aims to optimize the journey and offer a seamless experience across all stages.
                          This mental model in strategic design helps the brand to evolve and emerge continuously.
                          Strategic design in FIRA Iran is in service of communication and business growth.
                          The foundation of strategic design stems from upstream strategies and loops through feedback and iteration to complete and refine one another.
              `,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(3).png",
            },
            {
              title: "Creative Design",
              description: `Creative design pushes innovation boundaries and aligns aesthetic vision with user needs...`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(2).png",
            },
          ],
        },
      },
      {
        type: "logo",
        title: "Logo",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        items: {
          MDXComponent: "",
          MDXComponentForLogo: "",
          title: "**Brand** Identity",
          desc: "To inspire and empower the global robotics community by **creating a dynamic platform** for innovation, collaboration, and excellence. Iran FIRA Open Competition 2025 is committed to advancing technology, nurturing young talent, and pushing the boundaries of what robotics",
          download:
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//6042030147017755542.jpg",
          downloadBtnText:
            "Download Iran FIRA Open Competition 2025 Tehran Logo",
          logoVersion: [
            {
              id: 1,
              name: "Horizontal logo",
              text: "Priority is given to use the horizontal version of the logo.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//logo.svg",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-logo.png",
            },
            {
              id: 2,
              name: "Vertical logo",
              text: "We use the vertical logo in situations where there is not enough space to use the vertical version or in media where the size ratio is horizontal.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//vertical-logo.png",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-vertical-logo.png",
            },

            {
              id: 3,
              name: "Mono",
              text: "We use the monogram version in FIRA Iran media, such as the brand's social media, website and app icons, and video watermarks. We can also use this version in other brand communications where the brand name does not need to be mentioned due to familiarity with the audience.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(41).png",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-mono-logo.png",
            },
          ],
          inBackgroundSection: {
            listItems: [
              "We use the FIRA Iran logo on a white background, only in the primary color.",
              "We use the FIRA Iran logo on a black background, only in the primary color.",
              "We use the FIRA Iran logo on a yellow background, only in solid black.",
              "We use the FIRA Iran logo on neutral backgrounds (permitted codes in the color palette), only in solid black or white.",
              "The use of the FIRA Iran logo on other colored backgrounds is not permitted.",
            ],
            inBackgroundComponent: [
              {
                colorBg: "#FFFFFF",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//vertical-logo.png",
              },
              {
                colorBg: "#000000",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-vertical-logo.png",
              },
              {
                colorBg: "#FDB813",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//vertical-logo.png",
              },
              {
                colorBg: "#D3D3D3",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//vertical-logo.png",
              },
              {
                colorBg: "#808080",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-vertical-logo.png",
              },
              {
                imgBg:
                  "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//image.jpg",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-vertical-logo.png",
              },
            ],
          },
          alongWithOthers: {
            title: "Use it alongside other brand logos",
            desc: "When using the FIRA Iran logo next to other brand logos, here’s the deal: if the second logo is vertical, go with the vertical version of the FIRA Iran logo; if it’s horizontal, stick with the horizontal FIRA Iran one. To keep things balanced, make sure the height of FIRA Iran’s logo matches the graphic part of the second logo in both cases. Now, if the second logo is just a logotype (no fancy graphics), use the horizontal FIRA Iran logo. In that case, the height of both logotypes should be the same.<br/>Always slap the FIRA Iran logo on the left and above the second logo. Putting it on the right or below other logos? Nope, not allowed.",
            svg: [
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/co-branding/FIRA%20CUP%202025%20BRAND%20BOOK%20(12).svg",
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/co-branding/6.svg",
            ],
            darkSvg: [
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/co-branding/FIRA%20CUP%202025%20BRAND%20BOOK%20(13).svg",
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/co-branding/6.svg",
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
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        items: {
          MDXComponent: Mascot,
          // title: "Mascot",
          // desc: "MascotMascotMascotMascotMascot",
        },
      },
      {
        type: "color",
        title: "Color",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        items: {
          MDXComponent: "",
          title: "Color of Our Brand",
          desc: `Our color palette draws inspiration from nature, resulting in a fresh and vibrant aesthetic. It is imperative to apply these colors consistently across all platforms to uphold brand cohesion.`,
          img: [
            "https://cdn.pixabay.com/photo/2025/03/31/15/18/mountains-9504950_640.jpg",
            "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg",
            "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
          ],
          palette: {
            title: "The Main Palette",
            description:
              "FIRA Iran’s main palette consists of yellow, black, white, and blue. In this palette, yellow is the central color. We use black and white as complementary colors alongside yellow. We also use blue in the call to action buttons.",
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
              // secondary: {
              //   id: 2002,
              //   hex: "#F7941D",
              //   hexColor: "#000000",
              //   name: "Main Orange",
              //   shades: [
              //     { id: 202, hex: "#F9A13A", name: "Light Orange" },
              //     { id: 203, hex: "#F7870F", name: "Medium Orange" },
              //     { id: 204, hex: "#D97718", name: "Dark Orange" },
              //   ],
              // },
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
                  // { id: 402, hex: "#525252", name: "neutral" },
                  { id: 403, hex: "#E6EBEA", name: "Medium neutral" },
                  { id: 404, hex: "#FFFFFF", name: "Light neutral" },
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
      {
        type: "typography",
        title: "Typography",
        description: "Poppins",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        font: {
          name: "Poppins",
          weights: [500, 700],
          subsets: ["latin", "latin-ext"],
        },
        items: {
          MDXComponent: "",
          title: "Typography",
          desc: "We use a custom font for **readability** and **elegance** to enhance brand identity across all communication channels.",
          fontFeatureComponent: {
            title: "Font Features",
            desc: "In FIRA Iran Font Design, in addition to the main features, we have foreseen a set of supplementary features that enrich the typography. These features include: ligatures, alternate forms, strokes, style sets, and text and tabular numbers.",
            componentItems: [
              {
                text: "**Build** <br/> The Future",
                color: "#000000",
                bg: "#FDB813",
              },
              {
                text: "Challenge <br/> **Global Teams**",
                color: "#000000",
                bg: "#FFFFFF",
              },
              {
                text: `<p className="text-[#FDB813]">FIRA 2025 </p> <br/>
                   <p className="text-white font-bold">Starts Soon</p>`,
                color: "",
                bg: "#000000",
              },
              {
                text: "Innovate <br/> **Win Big**",
                color: "#000000",
                bg: "#FFFFFF",
              },
            ],
          },
          typographyPrinciples: {
            title: "Basic Typography Principles",
            description:
              "In typography, FIRA Iran follows two fundamental principles:",
            section: [
              {
                subtitle: "Readability",
                content:
                  "Readability is a core principle of FIRA Iran’s typography. We organize all typographic elements—letter spacing, line spacing, and text alignment—so that the text is delivered to the reader in the clearest possible way.",
                examples: [
                  {
                    status: "incorrect",
                    mdx: '<div className="text-left leading-5">\n  <p className="max-w-40">First-level heading with short and balanced text\nSecond-level heading that is longer and wraps to the next line\n...</p>\n</div>',
                    label: "incorrect",
                  },
                  {
                    status: "correct",
                    mdx: '<div className="text-left leading-6">\n  <p className="max-w-40">First-level heading with short and balanced text\nSecond-level heading that is longer and wraps to the next line\n...</p>\n</div>',
                    label: "correct",
                  },
                ],
              },
              {
                subtitle: "Respecting Content Hierarchy",
                content:
                  "One of FIRA Iran's communication features is that its content always delivers priority and importance. In typography, we use characteristics like text size, weight, font, graphic elements, etc., to clearly communicate the hierarchy of different content layers to the audience.",
                examples: [
                  {
                    status: "incorrect",
                    mdx: `<div className="space-y-1 sm:mx-2">
        <div className="bg-neutral-500 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-20" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
        <div className="bg-neutral-500 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-20" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
      </div>`,
                    label: "incorrect",
                  },
                  {
                    status: "correct",
                    mdx: `<div className="space-y-1 sm:mx-2">
        <div className="bg-neutral-500 h-5 w-8 sm:w-14 mb-3" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-18" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-18" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
      </div>`,
                    label: "correct",
                  },
                ],
              },
            ],
          },
          weights: {
            title: "Weights",
            desc: `In designing the FIRA Iran font, in addition to the main features, we have foreseen a set of supplementary features that enrich the typography. These features include: ligatures, alternating forms, strokes, style sets, and text and tabular numbers.`,
            sampleText: "Some Sample Text",
          },
        },
      },
      {
        type: "identity_in_use",
        title: "Identity In Use",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/FIRA%20CUP%202025%20BRAND%20BOOK%20(7).svg",
        img: "",
        items: {
          MDXComponent: IdentityInUse,
          title: "Brand in Action: Iran FIRA Open Competition 2025",
        },
      },
    ],
  },
  ca: {
    brand: {
      name: "FIRA Cup 2025 Canada",
      primaryColor: "#d22b2b",
      logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CAlogo..png",
      darkLogo:
        "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CaDarkLogo.png",
      font: {
        name: "Barlow",
        headers: "Heebo",
        weights: [400, 500, 700],
        subsets: ["latin", "latin-ext"],
      },
    },
    menu: {
      Introduction: {
        items: [
          { id: "overview", title: "Overview", type: "overview" },
          { id: "brand-identity", title: "Brand Identity", type: "statement" },
        ],
      },
      "Conceptual identity": {
        items: [
          { id: "brand-prism", title: "Brand Prism", type: "brand_prism" },
        ],
      },
      "Verbal identity": {
        items: [
          {
            id: "tone-of-voice",
            title: "Tone Of Voice",
            type: "tone_of_voice",
          },
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
          { id: "color", title: "Color", type: "color" },
          { id: "typography", title: "Typography", type: "typography" },
          {
            id: "identity-in-use",
            title: "Identity In Use",
            type: "identity_in_use",
          },
          {
            id: "pattern",
            title: "Pattern",
            type: "pattern",
          },
        ],
      },
    },
    sections: [
      {
        type: "overview",
        title: "Brand Introduction",
        description: "FIRA CUP 2025 - **Canada**",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//Screenshot-2025-02-13-at-12.56.18%20PM.png",
        video: "",
        items: {
          group: "introduction",
          title: "overview",
          desc: `<p>**Beyond Imagination, Into Innovation!**</p> <br/>FIRA Canada, the official representative of the FIRA Federation in Canada, serves as a hub for innovators, researchers, and enthusiasts in robotics and artificial intelligence. Through international competitions, educational workshops, and tech events, we provide a platform for the next generation of engineers and entrepreneurs to grow and collaborate. FIRA Canada—where ideas come to life and shape the future of technology!`,
          img: "",
        },

        style: 1,
      },
      {
        type: "statement",
        title: "Brand Identity",
        description: "FIRA CUP 2025 - Canada",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        video: "",
        items: {
          MDXComponent: BrandIdentityCA,
          title: "Brand Identity",
          items: ["Vision", "Mission", "Target"],
          desc: `**FIRA Canada** is the official representative of the *FIRA Federation in Canada*, dedicated to advancing **robotics**, **AI**, and **automation** through innovation, collaboration, and excellence. As a hub for researchers, engineers, and entrepreneurs, FIRA Canada fosters talent, drives technological breakthroughs, and bridges academia with industry. With a professional and forward-thinking identity, it delivers world-class competitions, educational initiatives, and strategic partnerships to position Canada as a global leader in intelligent automation. `,
        },

        style: 1,
      },
      {
        type: "brand_prism",
        title: "Brand Prism Section",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        // video: "https://files-us-east-1.t-cdn.net/files/1GG2rmxcOLAUjnt5zTqoY",
        items: {
          MDXComponent: item2CA,
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
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: ToneOfVoiceCA,
          title: "Voice",
          sliderContent: [
            {
              id: "1001",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(18).png",
              title: "Confident & Knowledgeable",
              description:
                "FIRA speaks with confidence and authority. Our voice reflects a deep understanding of our industry and the needs of our audience. We provide clear, accurate, and insightful information, establishing FIRA as a trusted expert.",
            },
            {
              id: "1002",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(21).png",
              title: "Professional & Approachable",
              description: `While maintaining a professional demeanor, FIRA is also approachable. We strike a balance between expertise and friendliness, ensuring that our communication is not only reliable but also engaging and relatable.`,
            },
            {
              id: "1003",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(20).png",
              title: "Innovative & Forward-Thinking",
              description:
                "Our voice reflects our commitment to innovation and future-oriented thinking. We convey enthusiasm for new ideas and solutions, positioning FIRA at the forefront of industry advancements.",
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
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: Tagline,
          title: "Enjoy Robots, Enjoy Life",
        },
      },
      {
        type: "design_principles",
        title: "Design Principles",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: DesignPrinciplesCA,
          title: "Our Logo",
          desc: `it's a movement shaping the future of robotics and AI. By fostering innovation, collaboration, and world-class competitions, we are building a dynamic ecosystem where researchers, engineers, and entrepreneurs come together to push boundaries. From groundbreaking ideas to real-world impact, FIRA Canada is the catalyst for a smarter, more connected future—where technology is for everyone, and innovation knows no limits.`,
          image:
            "https://canada.firaworldcup.org/wp-content/uploads/2020/11/logo.png",
          video:
            "https://files-us-east-1.t-cdn.net/files/1GG2rmxcOLAUjnt5zTqoY",
          videoCover:
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//Screenshot-2025-02-13-at-12.56.18%20PM.png",
          tabsContent: [
            {
              title: "Innovation",
              description: `Pioneering advancements in robotics, constantly pushing boundaries.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(19).png",
            },
            {
              title: "Excellence",
              description: `Striving for the highest standards in competitions and education.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(15).png",
            },
            {
              title: "Unity",
              description: `Bringing together a diverse global community, celebrating collaboration.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(14).png",
            },
            {
              title: "Inspiration",
              description: `Motivating the next generation of innovators and leaders in robotics.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(16).png",
            },
            {
              title: "Integrity",
              description: `Upholding fairness, transparency, and respect in all activities.`,
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/icons/Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(17).png",
            },
          ],
        },
      },
      {
        type: "logo",
        title: "Logo",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: "",
          MDXComponentForLogo: "",
          title: "**Brand** Identity",
          desc: "To inspire and empower the global robotics community by **creating a dynamic platform** for innovation, collaboration, and excellence. FIRA CUP 2025 is committed to advancing technology, nurturing young talent, and pushing the boundaries of what robotics",
          download:
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CAlogo..png",
          downloadBtnText: "Download FIRA Cup 2025 Tehran Logo",
          logoVersion: [
            {
              id: 1,
              name: "Horizontal logo",
              text: "The primary logo of FIRA Canada is designed in a horizontal format, representing stability, progress, and a forward-thinking approach in robotics and AI. This format ensures maximum visibility across digital and print media, making it ideal for official branding, banners, and corporate materials.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CAlogo..png",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CaDarkLogo.png",
            },
            {
              id: 2,
              name: "Vertical logo",
              text: "The secondary logo, used in vertical format, is designed for adaptability across different platforms and applications. Whether on promotional materials, social media, or compact spaces, this version maintains the brand’s identity while ensuring flexibility and consistency.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//verticalLogo-removebg-preview.png",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//verticalLogoDark.png",
            },
          ],
          inBackgroundSection: {
            listItems: [
              `The following color combinations ensure that the brand's visual identity remains strong, cohesive, and professional. These pairings maintain readability, contrast, and alignment with the FIRA Canada's core values.`,
            ],
            inBackgroundComponent: [
              {
                colorBg: "#FFFFFF",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CAlogo..png",
              },
              {
                colorBg: "#2c0e37",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CaDarkLogo.png",
              },
              {
                colorBg: "#d22b2b",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CaDarkLogo.png",
              },
              {
                imgBg:
                  "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca/gradient.png",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CaDarkLogo.png",
              },
            ],
          },
          alongWithOthers: {
            title: "Use it alongside other brand logos",
            desc: "When using the FIRA Canada logo next to other brand logos, here’s the deal: if the second logo is vertical, go with the vertical version of the FIRA Canada logo; if it’s horizontal, stick with the horizontal FIRA Canada one. To keep things balanced, make sure the height of FIRA Canada’s monogram matches the graphic part of the second logo in both cases. Now, if the second logo is just a logotype (no fancy graphics), use the horizontal FIRA Canada logo. In that case, the height of both logotypes should be the same.<br/>Always slap the FIRA Canada logo on the right and above the second logo. Putting it on the left or below other logos? Nope, not allowed.",
            svg: [
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(10).png",
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CoBranding.png",
            ],
            darkSvg: [
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//Copy%20of%20FIRA%20CANADA%20BRAND%20BOOK%20(10).png",
              "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//CoBranding.png",
            ],
          },
        },
        style: 1,
      },
      {
        type: "color",
        title: "Color",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: "",
          title: "Color of Our Brand",
          desc: `Our color palette draws inspiration from nature, resulting in a fresh and vibrant aesthetic. It is imperative to apply these colors consistently across all platforms to uphold brand cohesion.`,
          img: [
            "https://th.bing.com/th/id/R.729da756e9a256ea9071b1f1f1fe09e2?rik=lCcFmxlOlJhhYA&riu=http%3a%2f%2fs1.bwallpapers.com%2fwallpapers%2f2014%2f01%2f20%2fred-roses-picture_111003652.jpg&ehk=Fgrx8GspL6ag7TQIxmZxzQ%2bjI9LXCeCDFAG44VtRd7k%3d&risl=&pid=ImgRaw&r=0",
            "https://tse2.mm.bing.net/th/id/OIP.I8B_36LWGpRPEY7LNUKkRAHaFj?rs=1&pid=ImgDetMain",
            "https://tse3.mm.bing.net/th/id/OIP.G5TTIR4lo44EhjdxAoWQAgHaEo?rs=1&pid=ImgDetMain",
          ],
          palette: {
            title: "The Main Palette",
            description:
              "FIRA Canada’s main palette consists of Red, black, white, and blue. In this palette, yellow is the central color. We use black and white as complementary colors alongside yellow. We also use blue in the call to action buttons.",
            colors: {
              primary: {
                id: 1001,
                hex: "#d22b2b",
                hexColor: "#FFFFFF",
                name: "Main Red",
                shades: [
                  { id: 102, hex: "#cf3636", name: "Light Red" },
                  { id: 103, hex: "#cf4848", name: "Medium Red" },
                  { id: 104, hex: "#cf6565", name: "Dark Red" },
                ],
              },
              secondary: {
                id: 2002,
                hex: "#2c0e37",
                hexColor: "#FFFFFF",
                name: "Main purple",
                shades: [
                  { id: 202, hex: "#431654", name: "Light purple" },
                  { id: 203, hex: "#2c1336", name: "Medium purple" },
                  { id: 204, hex: "#301a38", name: "Dark purple" },
                ],
              },
              complementary: {
                id: 4004,
                hex: "#e3e3e3",
                hexColor: "#000000",
                name: "neutral",
                shades: [
                  // { id: 402, hex: "#525252", name: "neutral" },
                  { id: 403, hex: "#E6EBEA", name: "Medium neutral" },
                  { id: 404, hex: "#FFFFFF", name: "Light neutral" },
                ],
              },
            },
          },
          // Harmony: {
          //   title: "Harmony",
          //   description: `There are three general combinations in using these colors:

          //       - **Combination 1:** Yellow is the dominant color in the design, and we use white and black as complementary colors.
          //       - **Combination 2:** White is the dominant color, and we use yellow and black as complementary colors.
          //       - **Combination 3:** Black is the dominant color, and we use yellow and white as complementary colors.

          //       > **Note:** In brand communications, priority is given to using Combinations 1 and 2. Combination 3 is used sparingly and only in specific communication campaigns or environmental designs.
          //        `,
          //   img: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/color-ratios-aae20c6c.svg",
          // },
          Gradient: {
            title: "Backdrops",
            img: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/ca//gradient%20(2).png",
            description: `Backdrops play an essential role in setting the visual tone for events, presentations, and digital platforms. For FIRA Canada, backdrops should enhance the brand’s identity while maintaining a clean and professional look that aligns with the values of innovation, robotics, and Canadian pride. `,
          },
          paletteUsage: {
            title: "Color Usage in Design",
            description:
              "For better understanding, the color palette is used in the following ways.",
            mainStructure: [
              {
                id: 5001,
                background: "#000000",
                name: "White text on a black background",
              },
              {
                id: 5002,
                background: "#d22b2b",
                name: "white text on a red background",
              },
              {
                id: 5003,
                background: "#FFFFFF",
                name: "Black and Red text on a white background",
              },
            ],
            usageGuidelines: {
              correct: [
                {
                  id: 6003,
                  background: "#ffffff",
                  text: "#d22b2b",
                  description: "white background with red text",
                },
                {
                  id: 7002,
                  background: "#000000",
                  text: "#FFFFFF",
                  description: "Black background with white text",
                },
                {
                  id: 7001,
                  background: "#d22b2b",
                  text: "#ffffff",
                  description: "Yellow background with black text",
                },
                {
                  id: 7003,
                  background: "#FFFFFF",
                  text: "#000000",
                  description: "White background with black text",
                },
              ],
              incorrect: [
                {
                  id: 6001,
                  background: "#d22b2b",
                  text: "#000000",
                  description: "Yellow background with white text",
                },
                {
                  id: 6002,
                  background: "#000000",
                  text: "#d22b2b",
                  description: "White background with yellow text",
                },
              ],
            },
          },
        },
        style: 1,
      },
      {
        type: "typography",
        title: "Typography",
        description: "Heebo, Barlow",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        font: {
          name: "Barlow",
          headers: "Heebo",
          weights: [400, 500, 700],
          subsets: ["latin", "latin-ext"],
        },
        items: {
          MDXComponent: "",
          title: "Typography",
          desc: "Typography plays a key role in defining the visual identity of FIRA Canada. It ensures consistency and professionalism across all communication platforms, helping to communicate the brand's values clearly and effectively.<br/> We use **Heebo** as *Main Font* font for headers and **Barlow** as Alternative for For *Subheaders*",
          fontFeatureComponent: {
            title: "Font Features",
            desc: "In FIRA Canada Font Design, in addition to the main features, we have foreseen a set of supplementary features that enrich the typography. These features include: ligatures, alternate forms, strokes, style sets, and text and tabular numbers.",
            componentItems: [
              {
                text: "**Build** <br/> The Future",
                color: "#FFFFFF",
                bg: "#d22b2b",
              },
              {
                text: `<p className="text-[#d22b2b]">Challenge </p> <br/>
                   <p className="font-bold">Global Teams</p>`,
                color: "#000000",
                bg: "#FFFFFF",
              },
              {
                text: `<p className="text-white">Innovate </p> <br/>
                   <p className="text-white font-bold">Win Big</p>`,
                color: "",
                bg: "#000000",
              },
              {
                text: "FIRA 2025 <br/> **Starts Soon**",
                color: "#ffffff",
                bg: "#d22b2b",
              },
            ],
          },
          typographyPrinciples: {
            title: "Basic Typography Principles",
            description:
              "In typography, FIRA Canada follows two fundamental principles:",
            section: [
              {
                subtitle: "Readability",
                content:
                  "Readability is a core principle of FIRA Canada’s typography. We organize all typographic elements—letter spacing, line spacing, and text alignment—so that the text is delivered to the reader in the clearest possible way.",
                examples: [
                  {
                    status: "incorrect",
                    mdx: '<div className="text-left leading-5">\n  <p className="max-w-40">First-level heading with short and balanced text\nSecond-level heading that is longer and wraps to the next line\n...</p>\n</div>',
                    label: "incorrect",
                  },
                  {
                    status: "correct",
                    mdx: '<div className="text-left leading-6">\n  <p className="max-w-40">First-level heading with short and balanced text\nSecond-level heading that is longer and wraps to the next line\n...</p>\n</div>',
                    label: "correct",
                  },
                ],
              },
              {
                subtitle: "Respecting Content Hierarchy",
                content:
                  "One of FIRA Canada's communication features is that its content always delivers priority and importance. In typography, we use characteristics like text size, weight, font, graphic elements, etc., to clearly communicate the hierarchy of different content layers to the audience.",
                examples: [
                  {
                    status: "incorrect",
                    mdx: `<div className="space-y-1 sm:mx-2">
        <div className="bg-neutral-500 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-20" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
        <div className="bg-neutral-500 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-20" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
      </div>`,
                    label: "incorrect",
                  },
                  {
                    status: "correct",
                    mdx: `<div className="space-y-1 sm:mx-2">
        <div className="bg-neutral-500 h-5 w-8 sm:w-14 mb-3" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-18" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-18" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
      </div>`,
                    label: "correct",
                  },
                ],
              },
            ],
          },
          weights: {
            title: "Weights",
            desc: `A regular, thin weight that we use for body text and two heavy, black weights that we use for headings.<br/>
                Each of these weights is carefully designed for use in specific situations and applications. Therefore, it is necessary to pay attention to communication considerations when using them.<br/>
                Specifically, we need to know what message will be conveyed through what medium, to what audience, and more importantly, in what order the hierarchy of message and content is designed.
                `,
            sampleText: "Some Sample Text",
          },
        },
      },
      {
        type: "identity_in_use",
        title: "Identity In Use",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        img: "",
        items: {
          MDXComponent: MDXComponentCa,
          title: "Brand in Action: FIRA CUP 2025",
        },
      },
      {
        type: "pattern",
        title: "Pattern",
        description: "",
        pattern:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png",
        items: {
          MDXComponent: PatternCA,
          title: "Pattern",
          desc: "We use a custom font for **readability** and **elegance** to enhance brand identity across all communication channels.",
        },
      },
    ],
  },
};

export async function GET() {
  return NextResponse.json(data);
}
