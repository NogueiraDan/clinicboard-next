"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Send,
} from "lucide-react";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavSecondary } from "@/components/dashboard/nav-secondary";
import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@/app/context/UserContext";
import Link from "next/link";
import psiboard from "@/public/psiboard.png";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const data = {
    user: {
      name: user?.name || "",
      email: user?.email || "",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Pacientes",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Cadastrar Paciente",
            url: "/dashboard/patient",
          },
          {
            title: "Listar Pacientes",
            url: "/dashboard/patients-list",
          },
        ],
      },
      {
        title: "Agendamento",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Criar Agendamento",
            url: "/dashboard/scheduling",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Supporte",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
  };
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div>
                <div>
                  <Link
                    href="/dashboard"
                    className=""
                  >
                    <Image src={psiboard} alt="logo.png" width={54} />
                  </Link>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-base">Psiboard</span>
                  <span className="truncate text-xs">LTDA</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
