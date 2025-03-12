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
      title: "In the course of transformation",
      description: "Fira Iran's new brand identity guide",
      pattern:
        "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      img: "",
      video: "",
      items: [
        {
          title: "overview",
          desc: "Every time a **traveler** embarks on a new journey, a new form of travel is created. For each traveler, travel has a unique form and a diverse role; a form and role that changes every second.<br/>Alibaba, as a companion on all these diverse journeys, has become a co-traveler with this “ever-changing evolution” and has unveiled its new identity; a dynamic identity that wears a new garment at every moment and according to the shape and color of each journey.",
        },
      ],
      style: "1",
    },
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
