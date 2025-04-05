import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Brand
export interface Brand {
  name: string;
  primaryColor: string;
  logo: string;
}

// Menu
export interface MenuItem {
  id: string;
  title: string;
  type: string;
}

export interface MenuGroup {
  items: MenuItem[];
}

export interface Menu {
  [key: string]: MenuGroup;
}

//Overview
export interface OverviewItems {
  MDXComponent?: string | MDXRemoteSerializeResult;
  group?: string;
  title: string | MDXRemoteSerializeResult;
  desc: string | MDXRemoteSerializeResult;
  content?: [];
}

export interface Overview {
  type: "overview";
  title: string | MDXRemoteSerializeResult;
  description: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: OverviewItems;
  style: number;
}

// Statement
export interface StatementItems {
  MDXComponent?: string | MDXRemoteSerializeResult;
  title: string | MDXRemoteSerializeResult;
  items: string[];
  desc: string | MDXRemoteSerializeResult;
  content?: [];
}

export interface Statement {
  type: "statement";
  title: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  description?: string | MDXRemoteSerializeResult;
  items: StatementItems;
  style: number;
}

// BrandPrism
export interface BrandPrismChartItems {
  title: string;
  description: string;
  key: string;
}

export interface BrandPrismItems {
  MDXComponent?: string | MDXRemoteSerializeResult;
  title: string | MDXRemoteSerializeResult;
  desc: string | MDXRemoteSerializeResult;
  prismBrand: BrandPrismChartItems[];
}

export interface BrandPrism {
  type: "brand_prism";
  title: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  description?: string | MDXRemoteSerializeResult;
  items: BrandPrismItems;
  style: number;
}

// tone of voice
export interface SliderContent {
  id: string;
  svg: string;
  title: string | MDXRemoteSerializeResult;
  description: string | MDXRemoteSerializeResult;
}

export interface TonOfVoiceItems {
  MDXComponent?: string | MDXRemoteSerializeResult;
  title: string | MDXRemoteSerializeResult;
  desc: string | MDXRemoteSerializeResult;
  sliderContent: SliderContent[];
}

export interface ToneOfVoice {
  type: "tone_of_voice";
  title: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  description?: string | MDXRemoteSerializeResult;
  items: TonOfVoiceItems;
  style: number;
}

// All
export type Section = Overview | Statement | BrandPrism | ToneOfVoice;

export interface ApiResponse {
  brand: Brand;
  menu: Menu;
  sections: Section[];
}
