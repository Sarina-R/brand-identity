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
import Image from "next/image";

type SidebarItem = {
  id: string;
  title: string;
  type: string;
};

type SidebarGroup = {
  label: string;
  items: SidebarItem[];
};

type AppSidebarProps = {
  groups: SidebarGroup[];
};

export function AppSidebar({ groups }: AppSidebarProps) {
  const { data, loading } = useData();

  return (
    <Sidebar className="py-4 border">
      {loading ? (
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
                        <Link href={`/${item.id}`}>
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
      ) : (
        <>
          <Image
            src={data?.brand.logo || ""}
            width={120}
            height={40}
            alt={data?.brand.name || ""}
            className="object-contain px-4 w-full"
            priority
          />

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
                          <Link href={`/${item.id}`}>
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
