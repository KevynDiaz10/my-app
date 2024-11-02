"use client";
import Link from "next/link";
import { Separator } from "../separator";
import Image from "next/image";
import SidebarItem from "../SidebarItem/SidebarItem";
import {
  DataGeneralSidebar,
  dataSupportSidebar,
  dataToolSidebar,
} from "./SidebarRoutes.data";
import { Search } from "lucide-react";
import { Input } from "../input";
export default function SidebarRoutes() {
  return (
    <div className="">
      <div>
        <div className="p-3 md:pt-8 md:pl-5">
          <Link href="/dashboard" className="flex items-center">
            <Image src="/Logo.svg" width={45} height={45} alt="" priority /> 
            <h1 className="text-2xl font-semibold">kevyn</h1>
          </Link>
        </div>
        <div className="relative w-[100] block lg:hidden">
          <Input
            placeholder="search...."
            className="rounded-lg pr-16 lg:pr-0"
          />
          <Search strokeWidth={2} className=" absolute top-2 right-2" />
        </div>
        <div className="p-2 md:p-6">
          <h1>General</h1>
          {DataGeneralSidebar.map((item, index) => (
            <div key={index}>
              <SidebarItem item={item} />
            </div>
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <h1>Tool</h1>
          {dataToolSidebar.map((item, index) => (
            <div key={index}>
              <SidebarItem item={item} />
            </div>
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <h1>Support</h1>
          {dataSupportSidebar.map((item, index) => (
            <div key={index}>
              <SidebarItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
