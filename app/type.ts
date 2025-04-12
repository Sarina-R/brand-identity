import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Brand
export interface Brand {
  name: string;
  primaryColor: string;
  logo: string;
  font: Font;
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
  desc: string | MDXRemoteSerializeResult;
  items: string[];
  content?: [];
}

export interface Statement {
  type: "statement";
  title: string | MDXRemoteSerializeResult;
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
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
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
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
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: TonOfVoiceItems;
  style: number;
}

// tagline
export interface TaglineItems {
  MDXComponent?: string | MDXRemoteSerializeResult;
  title?: string | MDXRemoteSerializeResult;
  desc?: string | MDXRemoteSerializeResult;
  svg: string;
}

export interface Tagline {
  type: "tagline";
  title: string | MDXRemoteSerializeResult;
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: TaglineItems;
  style: number;
}

// Design Principles
export interface TabsContentItem {
  title: string;
  description: string | MDXRemoteSerializeResult;
  svg: string;
}

export interface DesignPrinciplesItems {
  MDXComponent?: string | MDXRemoteSerializeResult;
  title?: string | MDXRemoteSerializeResult;
  desc?: string | MDXRemoteSerializeResult;
  video?: string;
  image?: string;
  videoCover?: string;
  tabsContent: TabsContentItem[];
}

export interface DesignPrinciples {
  type: "design_principles";
  title: string | MDXRemoteSerializeResult;
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: DesignPrinciplesItems;
  style: number;
}

//Logo
export interface LogoVersion {
  id: number;
  name: string;
  text: string | MDXRemoteSerializeResult;
  svg: string;
}

export interface InBackgroundComponent {
  colorBg?: string;
  imgBg?: string;
  logo: string;
}

export interface InBackgroundSection {
  listItems: string[];
  inBackgroundComponent: InBackgroundComponent[];
}

export interface AlongWithOthers {
  title: string | MDXRemoteSerializeResult;
  desc: string | MDXRemoteSerializeResult;
  svg: string[];
}

export interface LogoItems {
  MDXComponent: string | MDXRemoteSerializeResult;
  MDXComponentForLogo: string | MDXRemoteSerializeResult;
  title?: string | MDXRemoteSerializeResult;
  desc?: string | MDXRemoteSerializeResult;
  download?: string;
  downloadBtnText?: string;
  logoVersion: LogoVersion[];
  inBackgroundSection: InBackgroundSection;
  alongWithOthers: AlongWithOthers;
}

export interface Logo {
  type: "logo";
  title: string | MDXRemoteSerializeResult;
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: LogoItems;
  style: number;
}

// Mascot
export interface MascotItems {
  MDXComponent: string | MDXRemoteSerializeResult;
  title?: string | MDXRemoteSerializeResult;
  desc?: string | MDXRemoteSerializeResult;
}

export interface Mascot {
  type: "mascot";
  title: string | MDXRemoteSerializeResult;
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: MascotItems;
  style: number;
}

// Color
export interface ColorShade {
  id: number;
  hex: string;
  name: string;
}

export interface ColorWithShades {
  id: number;
  hex: string;
  hexColor: string;
  name: string;
  shades: ColorShade[];
}

export interface PaletteColors {
  primary: ColorWithShades;
  secondary: ColorWithShades;
  action: ColorWithShades;
  complementary: ColorWithShades;
}

export interface Palette {
  title: string | MDXRemoteSerializeResult;
  description: string | MDXRemoteSerializeResult;
  colors: PaletteColors;
}

export interface HarmonySection {
  title: string | MDXRemoteSerializeResult;
  description: string | MDXRemoteSerializeResult;
  img?: string;
}

export interface MainStructureItem {
  id: number;
  background: string;
  name: string;
}

export interface UsageGuidelineItem {
  id: number;
  background: string;
  text: string;
  description: string | MDXRemoteSerializeResult;
}

export interface UsageGuidelines {
  correct: UsageGuidelineItem[];
  incorrect: UsageGuidelineItem[];
}

export interface PaletteUsage {
  title: string | MDXRemoteSerializeResult;
  description: string | MDXRemoteSerializeResult;
  mainStructure: MainStructureItem[];
  usageGuidelines: UsageGuidelines;
}

export interface ColorItems {
  MDXComponent: string | MDXRemoteSerializeResult;
  title: string | MDXRemoteSerializeResult;
  desc: string | MDXRemoteSerializeResult;
  img: string[];
  palette: Palette;
  Harmony?: HarmonySection;
  Gradient?: HarmonySection;
  paletteUsage?: PaletteUsage;
}

export interface Color {
  type: "color";
  title: string | MDXRemoteSerializeResult;
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: ColorItems;
  style: number;
}

// Typography
export interface FontStyles {
  label: string;
  tag: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  sampleText: string;
}

export interface WightsComponentItems {
  title: string | MDXRemoteSerializeResult;
  desc: string | MDXRemoteSerializeResult;
  sampleText: string | MDXRemoteSerializeResult;
}

export interface FontFeatureComponent {
  text: string | MDXRemoteSerializeResult;
  color: string;
  bg: string;
}

type Status = "correct" | "incorrect";

export interface Example {
  status: Status;
  mdx: MDXRemoteSerializeResult | null;
  img?: string;
  label: string;
}

export interface TypographyPrinciplesSection {
  subtitle: MDXRemoteSerializeResult;
  content: MDXRemoteSerializeResult;
  examples: Example[];
}

export interface TypographyItems {
  MDXComponent: string | MDXRemoteSerializeResult;
  title: string | MDXRemoteSerializeResult;
  desc: string | MDXRemoteSerializeResult;
  fontFeatureComponent: {
    title: string | MDXRemoteSerializeResult;
    desc: string | MDXRemoteSerializeResult;
    componentItems: FontFeatureComponent[];
  };
  typographyPrinciples: {
    title: string | MDXRemoteSerializeResult;
    description: string | MDXRemoteSerializeResult;
    section: TypographyPrinciplesSection[];
  };
  wights: WightsComponentItems;
}

export interface Font {
  name: string;
  weights: number[];
  subsets: string[];
}

export interface Typography {
  type: "typography";
  title: string | MDXRemoteSerializeResult;
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: TypographyItems;
  font: Font;
  style: number;
}

// IdentityInUse
export interface IdentityInUseItems {
  MDXComponent: string | MDXRemoteSerializeResult;
  title?: string | MDXRemoteSerializeResult;
  desc?: string | MDXRemoteSerializeResult;
}

export interface IdentityInUse {
  type: "identity_in_use";
  title: string | MDXRemoteSerializeResult;
  description?: string | MDXRemoteSerializeResult;
  pattern?: string;
  img?: string;
  video?: string;
  items: IdentityInUseItems;
  style: number;
}

// All
export type Section =
  | Overview
  | Statement
  | BrandPrism
  | ToneOfVoice
  | Tagline
  | DesignPrinciples
  | Logo
  | Mascot
  | Color
  | Typography
  | IdentityInUse;

export interface ApiResponse {
  brand: Brand;
  menu: Menu;
  sections: Section[];
}
