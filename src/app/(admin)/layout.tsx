"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";

import { SideNav } from "@/components/nav";
import { HeaderMegaMenu } from "@/components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <HeaderMegaMenu />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <SideNav />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
