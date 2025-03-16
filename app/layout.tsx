"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DataProvider } from "@/hooks/DataProvider";
import { ThemeProvider } from "@/components/them-provider";
import { AppSidebar } from "@/components/app-sidbar";
import { ThemeToggle } from "@/components/ThemToggle";
import axios from "axios";
import "./globals.css";
import { API_URLS } from "./api/url";
import { ApiResponse, MenuGroup, MenuItem } from "./type";

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
}: {
  children: React.ReactNode;
}) {
  const [groups, setGroups] = useState<
    {
      label: string;
      items: MenuItem[];
    }[]
  >([]);

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        const response = await axios.get<ApiResponse>(API_URLS.BRANDING);
        const data = response.data;

        const transformedGroups = Object.entries(data.menu).map(
          ([key, value]: [string, MenuGroup]) => ({
            label: key,
            items: value.items,
          })
        );

        setGroups(transformedGroups);
      } catch (error) {
        console.error("Failed to fetch sidebar data:", error);
      }
    };

    fetchSidebarData();
  }, []);

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
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  <Breadcrumbs />
                </div>
                <ThemeToggle />
              </div>
              <DataProvider>{children}</DataProvider>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
