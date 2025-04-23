"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useData } from "@/hooks/DataProvider";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";
import { MenuGroup, MenuItem } from "@/app/type";
import Image from "next/image";
import { usePathname } from "next/navigation";

type SidebarGroup = {
  label: string;
  items: MenuItem[];
};

export function AppSidebar() {
  const { data, loading } = useData();
  const [groups, setGroups] = useState<SidebarGroup[]>([]);
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "IR";

  useEffect(() => {
    if (!data || !data.menu) return;

    const transformedGroups = Object.entries(data.menu).map(
      ([key, value]: [string, MenuGroup]) => ({
        label: key,
        items: value.items,
      })
    );

    setGroups(transformedGroups);
  }, [data]);

  return (
    <Sidebar className="py-4 border">
      {loading ? (
        <SidebarContent>
          <div className="px-4 mb-6">
            <Skeleton className="h-10 w-32" />
          </div>

          {Array.from({ length: 3 }).map((_, index) => (
            <SidebarGroup key={index} className="p-3 px-6">
              <SidebarGroupLabel className="mb-2">
                <Skeleton className="h-4 w-24" />
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {Array.from({ length: 4 }).map((_, itemIndex) => (
                    <SidebarMenuItem key={itemIndex} className="py-2">
                      <Skeleton className="h-4 w-40" />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      ) : (
        <>
          {(data?.brand.logo || data?.brand.darkLogo) && (
            <>
              <Image
                src={data?.brand.logo || ""}
                width={120}
                height={40}
                alt={data?.brand.name || ""}
                className="object-contain px-4 w-full block dark:hidden"
                priority
              />
              <Image
                src={data?.brand.darkLogo || ""}
                width={120}
                height={40}
                alt={data?.brand.name || ""}
                className="object-contain px-4 w-full hidden dark:block"
                priority
              />
            </>
          )}

          <SidebarContent>
            {groups.map((group, index) => (
              <SidebarGroup key={index} className="p-3 px-6">
                <SidebarGroupLabel className="font-light">
                  {group.label}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className=" font-bold">
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton asChild>
                          <Link href={`/${locale}/${item.id}`}>
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
        </>
      )}
    </Sidebar>
  );
}
