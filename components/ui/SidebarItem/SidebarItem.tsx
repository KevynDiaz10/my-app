"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export type SidebarItemProps = {
  item: {
    label: string;
    icon: LucideIcon;
    href: string;
  };
};

export default function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { icon: Icon, href, label } = item;

  const pathname = usePathname();

  const activePath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 light:text-slate-700 dark:text-white  text-sm items-center
        hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`,
        activePath && "bg-slate-400/20"
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
      {label}
    </Link>
  );
}
