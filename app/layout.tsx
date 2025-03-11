"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ThemeToggle } from "@/components/ThemToggle";
import { ThemeProvider } from "@/components/them-provider";
import "./globals.css";

const introduction = [
  { title: "Overview", url: "/overview  " },
  { title: "Statement", url: "/statement  " },
];

const ConceptualIdentity = [{ title: "Brand Prism", url: "/brand-prism  " }];

const VerbalIdentity = [
  { title: "Tone Of Voice", url: "/ton-of-voice  " },
  { title: "Tagline", url: "/tagline  " },
];

const VisualIdentity = [
  { title: "Design Principles", url: "/design-principles  " },
  { title: "Logo", url: "/logo  " },
  { title: "Mascot", url: "/mascot  " },
  { title: "Color", url: "/color  " },
  { title: "Typography", url: "/typography  " },
  { title: "Identity In Use", url: "/identity-in-use  " },
];

const groups = [
  { label: "Introduction", items: introduction },
  { label: "Conceptual identity", items: ConceptualIdentity },
  { label: "Verbal identity", items: VerbalIdentity },
  { label: "Visual identity", items: VisualIdentity },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light">
          <SidebarProvider>
            <AppSidebar groups={groups} />
            <div className="flex-1 p-4 w-[calc(100vw-18rem)]">
              <div className="flex justify-between items-center p-4">
                <div className="flex">
                  <div className="hover:cursor-pointer">
                    <SidebarTrigger />
                  </div>
                  <div className="hover:cursor-pointer">
                    <Breadcrumbs />
                  </div>
                </div>
                <div>
                  <ThemeToggle />
                </div>
              </div>
              {children}
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
