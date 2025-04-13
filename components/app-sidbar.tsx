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
import { Dot } from "lucide-react";

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
  return (
    <Sidebar>
      <SidebarContent>
        {groups.map((group, index) => (
          <SidebarGroup key={index} className="p-3 px-6 font-bold">
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <Link href={`/${item.id}`}>
                        <Dot />
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
    </Sidebar>
  );
}
