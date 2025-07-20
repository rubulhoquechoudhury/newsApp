"use client";

import { usePathname } from 'next/navigation';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { CATEGORIES } from '@/lib/articles.tsx';
import Link from 'next/link';
import { Newspaper, Bookmark } from 'lucide-react';

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
                 <Newspaper className="text-primary-foreground" />
            </div>
            <h1 className="text-xl font-headline font-semibold">NewsWise</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {CATEGORIES.map((category) => (
            <SidebarMenuItem key={category.slug}>
              <Link href={`/${category.slug}`} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === `/${category.slug}`}
                  tooltip={category.name}
                >
                  <category.icon />
                  <span>{category.name}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <Link href="/saved" legacyBehavior passHref>
              <SidebarMenuButton
                isActive={pathname === '/saved'}
                tooltip="Saved Articles"
              >
                <Bookmark />
                <span>Saved Articles</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-xs text-muted-foreground px-2">© 2024 NewsWise</p>
      </SidebarFooter>
    </>
  );
}
