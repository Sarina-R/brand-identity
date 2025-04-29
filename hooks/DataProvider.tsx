"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { serialize } from "next-mdx-remote/serialize";
import { ApiResponse, Section, Data as LocaleData } from "@/app/type";
import { API_URLS } from "@/app/api/url";

interface DataContextType {
  data: ApiResponse | null;
  loading: boolean;
  locations: string[];
}

const DataContext = createContext<DataContextType>({
  data: null,
  loading: true,
  locations: [],
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchAndSerializeData() {
      try {
        const response = await axios.get(API_URLS.BRANDING);
        const result: LocaleData = response.data;

        const allLocales = Object.keys(result);
        setLocations(allLocales);

        const locale = pathname?.split("/")[1] || "";
        const selectedLocaleData = result[locale];

        if (!selectedLocaleData) {
          console.warn(`Locale "${locale}" not found in API response`);
          setLoading(false);
          return;
        }

        const serializedSections = await Promise.all(
          selectedLocaleData.sections.map(async (section: Section) => {
            const serializedSection = { ...section };

            if (section.title) {
              serializedSection.title = await serialize(
                section.title as string
              );
            }
            if (section.description) {
              serializedSection.description = await serialize(
                section.description as string
              );
            }
            if (section.items?.title) {
              serializedSection.items = {
                ...section.items,
                title: await serialize(section.items.title as string),
              };
            }
            if (section.items?.desc) {
              serializedSection.items = {
                ...serializedSection.items,
                desc: await serialize(section.items.desc as string),
              };
            }
            if (section.items?.MDXComponent) {
              serializedSection.items.MDXComponent = await serialize(
                section.items.MDXComponent
              );
            }

            return serializedSection;
          })
        );

        setData({
          ...selectedLocaleData,
          sections: serializedSections,
        });
      } catch (error) {
        console.error("Error fetching and serializing data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAndSerializeData();
  }, [pathname]);

  return (
    <DataContext.Provider value={{ data, loading, locations }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
