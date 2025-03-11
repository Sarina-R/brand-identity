"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ThemeToggle } from "@/components/ThemToggle";
import { ThemeProvider } from "@/components/them-provider";
import "./globals.css";

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
            <AppSidebar />
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
