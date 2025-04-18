import { NextResponse } from "next/server";

const BrandIdentity = `<div className="flex flex-col lg:flex-row justify-between p-10 min-h-[300px] text-sm">
      <div className="border rounded-2xl m-3 flex-1 text-center px-5 dark:bg-neutral-900">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(3).png"
          alt="Vision Icon"
          className="w-20 h-20 mx-auto mb-3"
        />
        <h2 className="text-2xl font-bold mb-4">Vision</h2>
        <p className="leading-relaxed text-sm">
          To be the leading global stage for robotics and artificial intelligence, shaping a world where technological innovation transforms industries, enriches lives, and fosters sustainable progress for humanity.
        </p>
      </div>

      <div className="border rounded-2xl m-3 flex-1 text-center px-5 dark:bg-neutral-900">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(2).png"
          alt="Mission Icon"
          className="w-20 h-20 mx-auto mb-3"
        />
        <h2 className="text-2xl font-bold mb-4">Mission</h2>
        <p className="leading-relaxed text-sm">
          To inspire and empower the global robotics community by creating a dynamic platform for innovation, collaboration, and excellence. FIRA CUP 2025 is committed to advancing technology, nurturing young talent, and pushing the boundaries of what robotics can achieve for a better future.
        </p>
      </div>

      <div className="border rounded-2xl m-3 flex-1 text-center px-5 dark:bg-neutral-900">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(1).png"
          alt="Target Icon"
          className="w-20 h-20 mx-auto mb-3"
        />
        <h2 className="text-2xl font-bold mb-4">Target</h2>
        <p className="leading-relaxed text-sm">
          Develop robust relationships with customers across diverse market segments, encompassing individual consumers and beyond.
        </p>
      </div>
    </div>`;

const item1 = `
    <div className="flex flex-col md:flex-row gap-6">
    <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
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

const item2 = `Fira Iran's brand personality is defined based on the Magician archetype—the kind of magician that brings the future into the present and creates transformative experiences for its audience.
"Boldness for innovation," "the dynamic nature of travel," and "intelligence in understanding the present and future needs of both customers and the industry" are essential in crafting these experiences. These elements help solidify Fira Iran's position as the leading brand in the travel industry, setting it apart from competitors while continuously creating value to meet diverse customer needs.
Innovation, shaping the future, being a pioneer, and adapting to modern audience behavior patterns are the key themes that have guided us in redefining Fira Iran’s brand identity.`;

const ToneOfVoice = `<div className="w-full px-6 py-10 space-y-16">
        <div className="space-y-6">
          <h1 className="text-xl font-bold">Voice and Tone</h1>
          <p className="text-neutral-700 dark:text-neutral-300 mx-auto leading-relaxed">
            Our brand voice combines professionalism and friendliness to
            prioritize exceptional customer service. It remains adaptable to
            different contexts and audiences.
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <img
            src="https://cdn.alibaba.ir/cms/uploads/dominate_tone_5ec412f50a.svg"
            alt="Mew reveal chart"
            className="min-w-[900px] max-w-none mx-auto"
          />
        </div>
      </div>
      
   <div className="min-h-[500px] py-10 px-6">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-6xl mx-auto">
        <div className="relative flex-1 text-center">
          <div className="bg-gradient-to-r p-8 transform lg:-skew-y-6 rounded-3xl border dark:bg-neutral-900">
            <div className="transform lg:skew-y-6">
              <div className="relative">
                <img
                  src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(4).png"
                  alt="Friendly Icon"
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 p-1"
                />
              </div>
              <h6 className="text-3xl font-extrabold mb-4 tracking-wide glow-text">
                Friendly
              </h6>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                We endeavor to cultivate a hospitable and inclusive environment for our clients and partners, nurturing transparent communication and cooperative partnerships.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex-1 text-center">
          <div className="p-8 transform lg:skew-y-6 rounded-3xl border dark:bg-neutral-900">
            <div className="transform lg:-skew-y-6">
              <div className="relative">
                <img
                  src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(5).png"
                  alt="Professional Icon"
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4"
                />
              </div>
              <h6 className="text-3xl font-extrabold mb-4 tracking-wide glow-text">
                Professional
              </h6>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                FIRA CUP upholds a professional and formal tone in all communications, demonstrating our dedication to excellence and dependability.
              </p>
            </div>
          </div>
        </div>
      </div>
</div>`;

const Mascot = `<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="relative rounded-2xl p-6 sm:p-8 bg-[#FDB813]">
    <div className="absolute inset-0 bg-[url('https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png')] bg-cover bg-center bg-no-repeat opacity-5 rounded-2xl"></div>
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img
            src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__7_-removebg-preview%20(1).png"
            alt="FIRA Cup 2025 Mascot - Iranian Cheetah"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">
            MASCOT
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
            The mascot for the FIRA Cup 2025 in Iran is inspired by the Iranian
            cheetah, symbolizing speed, agility, and resilience. This robotic
            cheetah embodies the spirit of innovation and excellence that defines
            FIRA's robotics competitions. Combining advanced technology with a
            cultural symbol, the mascot represents both the technological progress
            and the rich heritage of Iran. It serves as a vibrant and dynamic
            emblem of the event, showcasing the fusion of tradition and
            cutting-edge robotics.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`;

const DesignPrinciples = `<img src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(8).png' alt='logo'/>`;

// const item4 = `<div className="w-full lg:px-8 space-y-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
//           <h2 className="text-3xl font-bold">Monogram design</h2>
//           <p className="text-base leading-relaxed">
//             In designing the Fira Iran monogram, we have designed a firm and decisive form, considering the brand identity and strategy, which, while being solid, is distanced from stillness and staticity by the movement of the curve in the middle of the letter A and is in harmony with the vibrant atmosphere of travel.
//           </p>
//           <p className="text-base leading-relaxed">
//             We have designed this monogram dynamically; meaning that it has a fixed DNA and anatomy; But its appearance is variable and changes in brand communications depending on what message is to be conveyed to which audience through which medium. This approach is a bold strategy in design and allows the brand to respond intelligently to social situations and audience needs, and at the communication level, always be one step ahead of customer expectations.
//           </p>
//         </div>
//         <div className="w-full bg-black rounded-2xl relative">
//           <img
//             src="https://cdn.alibaba.ir/cms/uploads/monogram_anim_2c775cc880.gif"
//             alt="Monogram Animation"
//             className="object-contain rounded-xl shadow-lg m-auto"
//           />
//         </div>
//       </div>

//       <div className="items-center space-y-10">
//       <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
//           <h2 className="text-3xl font-bold">Logotype design</h2>
//           <p className="text-base leading-relaxed">
//             We designed the Fira Iran logo based on the previous logo. The new logo is actually an updated version of the previous logo, with more dynamic and fluid forms and less unnecessary details.
//           </p>
//         </div>
//         <div className="w-full relative">
//           <img
//             src="https://cdn.alibaba.ir/cms/uploads/logo_type_365b658ee9.svg"
//             alt="Logotype"
//             className="object-contain rounded-xl shadow-lg m-auto"
//           />
//         </div>
//       </div>
//     </div>`;

const IdentityInUse = `<div class="min-h-screen px-6 py-12 space-y-12">
  <section>
    <h2 class="text-2xl font-semibold mb-4">Instagram Posts</h2>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(19).png" alt="Post 1" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(18).png" alt="Post 2" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(19).png" alt="Post 3" class="w-full rounded-2xl shadow-lg " />
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Instagram Stories</h2>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(20).png" alt="Story 1" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(21).png" alt="Story 2" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(22).png" alt="Story 3" class="w-full rounded-2xl shadow-lg " />
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Format Sizes</h2>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(23).png" alt="Story Size" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(24).png" alt="Poster Size" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(25).png" alt="Post Size" class="w-full rounded-2xl shadow-lg " />
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Flags & City Posters</h2>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(26).png" alt="Flag 1" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(27).png" alt="Flag 2" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(28).png" alt="Flag 3" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(29).png" alt="City 1" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(30).png" alt="City 2" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(31).png" alt="City 3" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(32).png" alt="City 4" class="w-full rounded-2xl shadow-lg " />
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Merch: T-Shirts & Mugs</h2>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(33).png" alt="T-shirt" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(34).png" alt="Mug" class="w-full rounded-2xl shadow-lg " />
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">ID Cards</h2>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(35).png" alt="ID Back" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(36).png" alt="ID Front" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(37).png" alt="ID Ribbon 1" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(38).png" alt="ID Ribbon 2" class="w-full rounded-2xl shadow-lg " />
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Certificates</h2>
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(39).png" alt="Certificate 1" class="w-full rounded-2xl shadow-lg " />
      <img src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(40).png" alt="Certificate 2" class="w-full rounded-2xl shadow-lg " />
    </div>
  </section>
</div>
`;

const data = {
  brand: {
    name: "Fira Cup 2025 Tehran",
    primaryColor: "#fdb813",
    logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//logo.svg",
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
        MDXComponent: BrandIdentity,
        title: "What **leads** us to the idea of dynamic identity:",
        items: ["Vision", "Mission", "Target"],
        desc: `FIRA CUP 2025 represents global innovation in robotics and AI, uniting
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
        MDXComponent: ToneOfVoice,
        title: "some title",
        desc: "Our brand voice combines professionalism and friendliness to prioritize exceptional customer service. It remains adaptable to different contexts and audiences.",
        sliderContent: [
          {
            id: "1001",
            // svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/polite-words-cfd9f81d.svg",
            title: "Trustworthy",
            description:
              "**FIRA CUP** demonstrates *trustworthiness* and *authority* in all our communications.",
          },
          {
            id: "1002",
            // svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/polite-words-cfd9f81d.svg",
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
        MDXComponent: DesignPrinciples,
        title: "Our Logo",
        desc: ` Ensure use a custom font for readability and elegance to enhance brand identity across all communication channels.        `,
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
                          Strategic design in Fira Iran is in service of communication and business growth.
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
          {
            title: "User-Centric Design0",
            description: `Centered around users, this approach puts empathy, accessibility, and usability first...`,
            svg: "",
          },
          {
            title: "User-Centric Design1",
            description: `Centered around users, this approach puts empathy, accessibility, and usability first...`,
            svg: "",
          },
          {
            title: "User-Centric Design2",
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
        MDXComponentForLogo: "",
        title: "**Brand** Identity",
        desc: "To inspire and empower the global robotics community by **creating a dynamic platform** for innovation, collaboration, and excellence. FIRA CUP 2025 is committed to advancing technology, nurturing young talent, and pushing the boundaries of what robotics",
        download:
          "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//6042030147017755542.jpg",
        downloadBtnText: "Download Fira Cup 2025 Tehran Logo",
        logoVersion: [
          {
            id: 1,
            name: "Vertical logo",
            text: "Priority is given to use the vertical version of the logo.",
            svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__10_-removebg-preview.png",
          },
          {
            id: 2,
            name: "Horizontal logo",
            text: "We use the horizontal logo in situations where there is not enough space to use the vertical version or in media where the size ratio is horizontal.",
            svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//6042030147017755542.jpg",
          },
          {
            id: 3,
            name: "Mono",
            text: "We use the monogram version in Fira Iran media, such as the brand's social media, website and app icons, and video watermarks. We can also use this version in other brand communications where the brand name does not need to be mentioned due to familiarity with the audience.",
            svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(41).png",
          },
        ],
        inBackgroundSection: {
          listItems: [
            "We use the Fira Iran logo on a white background, only in the primary color.",
            "We use the Fira Iran logo on a black background, only in the primary color.",
            "We use the Fira Iran logo on a yellow background, only in solid black.",
            "We use the Fira Iran logo on neutral backgrounds (permitted codes in the color palette), only in solid black or white.",
            "The use of the Fira Iran logo on other colored backgrounds is not permitted.",
          ],
          inBackgroundComponent: [
            {
              colorBg: "#FFFFFF",
              logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__10_-removebg-preview.png",
            },
            {
              colorBg: "#000000",
              logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__10_-removebg-preview.png",
            },
            {
              colorBg: "#FDB813",
              logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__10_-removebg-preview.png",
            },
            {
              colorBg: "#D3D3D3",
              logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__10_-removebg-preview.png",
            },
            {
              colorBg: "#A9A9A9",
              logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__10_-removebg-preview.png",
            },
            {
              imgBg:
                "https://plus.unsplash.com/premium_photo-1673002094039-3b4a9e8d1fff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMG9jZWFufGVufDB8fDB8fHww",
              logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__10_-removebg-preview.png",
            },
          ],
        },
        alongWithOthers: {
          title: "Use it alongside other brand logos",
          desc: "When using the Fira Iran logo next to other brand logos, here’s the deal: if the second logo is vertical, go with the vertical version of the Fira Iran logo; if it’s horizontal, stick with the horizontal Fira Iran one. To keep things balanced, make sure the height of Fira Iran’s monogram matches the graphic part of the second logo in both cases. Now, if the second logo is just a logotype (no fancy graphics), use the horizontal Fira Iran logo. In that case, the height of both logotypes should be the same.<br/>Always slap the Fira Iran logo on the right and above the second logo. Putting it on the left or below other logos? Nope, not allowed.",
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
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
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
            "Fira Iran’s main palette consists of yellow, black, white, and blue. In this palette, yellow is the central color. We use black and white as complementary colors alongside yellow. We also use blue in the call to action buttons.",
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
      description: "",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      font: {
        name: "Poppins",
        weights: [400, 500, 700],
        subsets: ["latin", "latin-ext"],
      },
      items: {
        MDXComponent: "",
        title: "Typography",
        desc: "We use a custom font for **readability** and **elegance** to enhance brand identity across allcommunication channels.",
        fontFeatureComponent: {
          title: "Font Features",
          desc: "In Fira Iran Font Design, in addition to the main features, we have foreseen a set of supplementary features that enrich the typography. These features include: ligatures, alternate forms, strokes, style sets, and text and tabular numbers.",
          componentItems: [
            {
              text: "**Refund** <br/> easily",
              color: "#000000",
              bg: "#FDB813",
            },
            {
              text: "Last Minute <br/> **456$**",
              color: "#000000",
              bg: "#FFFFFF",
            },
            {
              text: `<p className="text-[#FDB813]">Amsterdam </p> <br/>
                   <p className="text-white font-bold">round trip</p>`,
              color: "",
              bg: "#000000",
            },
            {
              text: "from **amsterdam** to **paris**",
              color: "#000000",
              bg: "#FFFFFF",
            },
          ],
        },
        typographyPrinciples: {
          title: "Basic Typography Principles",
          description:
            "In typography, Fira Iran follows two fundamental principles:",
          section: [
            {
              subtitle: "Readability",
              content:
                "Readability is a core principle of Fira Iran’s typography. We organize all typographic elements—letter spacing, line spacing, and text alignment—so that the text is delivered to the reader in the clearest possible way.",
              examples: [
                {
                  status: "incorrect",
                  mdx: '<div className="leading-7 text-left">\n  <p className="max-w-40">First-level heading with short and balanced text\nSecond-level heading that is longer and wraps to the next line\n...</p>\n</div>',
                  label: "incorrect",
                },
                {
                  status: "correct",
                  mdx: '<div className="leading-5 text-left">\n  <p className="max-w-40">First-level heading with short and balanced text\nSecond-level heading that is longer and wraps to the next line\n...</p>\n</div>',
                  label: "correct",
                },
              ],
            },
            {
              subtitle: "Respecting Content Hierarchy",
              content:
                "One of Fira Iran's communication features is that its content always delivers priority and importance. In typography, we use characteristics like text size, weight, font, graphic elements, etc., to clearly communicate the hierarchy of different content layers to the audience.",
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
        wights: {
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
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      items: {
        MDXComponent: IdentityInUse,
        title: "Brand in Action: FIRA CUP 2025",
      },
    },
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
