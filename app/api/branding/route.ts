import { NextResponse } from "next/server";

const data = {
  brand: {
    name: "Fira Cup 2025 Tehran",
    primaryColor: "#fdb713",
    logo: "https://canada.firaworldcup.org/wp-content/uploads/2020/11/logo.png",
  },
  patterns: {},
  sections: [
    {
      type: "overview",
      title: "Brand Introduction",
      description: "FIRA CUP 2025 - IRAN, TEHRAN",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
      video: "",
      items: [
        {
          group: "introduction",
          title: "overview",
          desc: "Welcome to the FIRA CUP 2025, where innovation meets excellence in robotics and artificial intelligence. This prestigious competition will take place at the Tehran International Exhibition Center, a venue that embodies Iran’s commitment to hosting world-class events and fostering technological progress.",
          img: "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1.png 1587w, https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-212x300.png 212w, https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-724x1024.png 724w, https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-768x1086.png 768w, https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1086x1536.png 1086w, https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png 1448w",
        },
      ],
      style: "1",
    },
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
