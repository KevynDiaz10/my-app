import Navbar from "@/components/ui/Navbar/Navbar";
import SidebarRoutes from "@/components/ui/Sidebar/SidebarRoutes";
import React from "react";

export default function layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden lg:block w-72 h-full lg:fixed dark:bg-background">
        <SidebarRoutes />
      </div>
      <div className="w-full lg:ml-72">
        <Navbar />
        <div className="p-6 bg-[#e4e7ea] dark:bg-secondary">{children}</div>
      </div>
    </div>
  );
}
