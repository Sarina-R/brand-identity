import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DataProvider } from "@/hooks/DataProvider";
import { ThemeProvider } from "@/components/them-provider";
import { AppSidebar } from "@/components/app-sidbar";
import { ThemeToggle } from "@/components/ThemToggle";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-6xl mx-auto border">
          <DataProvider>
            <ThemeProvider defaultTheme="light">
              <SidebarProvider>
                <AppSidebar />
                <div className="flex-1 w-[calc(100vw-18rem)]">
                  <div className="flex justify-between items-center border-b px-4 py-2 mb-2 sticky top-0 z-50 bg-white dark:bg-black">
                    <div className="flex items-center gap-2">
                      <span className="md:hidden inline">
                        <SidebarTrigger />
                      </span>
                      <Breadcrumbs />
                    </div>
                    <ThemeToggle />
                  </div>
                  <div className="p-4">{children}</div>
                </div>
              </SidebarProvider>
            </ThemeProvider>
          </DataProvider>
        </div>
      </body>
    </html>
  );
}
