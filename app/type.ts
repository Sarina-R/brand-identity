import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Brand
export interface Brand {
  name: string;
  primaryColor: string;
  logo: string;
}

// top Bar
export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}
// export interface NavItem {
//   name: string;
//   path?: string;
//   MarkDownItem: string | MDXRemoteSerializeResult;
//   dropdown?: NavItem[];
// }
// export interface Menu {
//   topBar: {
//     linkText: string;
//     linkUrl: string;
//     socials: SocialLink[];
//   };
//   navItems: NavItem[];
// }

//Overview
export interface OverviewItems {
  group?: string;
  title: string;
  desc: string | MDXRemoteSerializeResult;
}

export interface Overview {
  type: "overview";
  title: string | MDXRemoteSerializeResult;
  description: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: OverviewItems;
}

// All
export type Section = Overview;

export interface ApiResponse {
  brand: Brand;
  //   menu: Menu;
  sections: Section[];
}
