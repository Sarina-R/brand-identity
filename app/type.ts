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
  group?: string;
  title: string;
  desc: string | MDXRemoteSerializeResult;
  MDXComponent?: string | MDXRemoteSerializeResult;
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
export interface StatementItems {
  MDXComponent?: string | MDXRemoteSerializeResult;
  title: string | MDXRemoteSerializeResult;
  items: string[];
  desc: string | MDXRemoteSerializeResult;
}

export interface BrandPrism {
  type: "brand_prism";
  title: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  description?: string | MDXRemoteSerializeResult;
  items: StatementItems;
  style: number;
}

// All
export type Section = Overview | Statement | BrandPrism;

export interface ApiResponse {
  brand: Brand;
  menu: Menu;
  sections: Section[];
}
