import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import SidebarRoutes from "../Sidebar/SidebarRoutes";
import { Input } from "../input";
import { ModeToggle } from "../ButtonsTheme/ButtonsTheme";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <div>
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent side="left">
              <SidebarRoutes />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="flex gap-x-2 items-center">
        <div className="relative w-[300] hidden lg:block">
          <Input
            placeholder="search...."
            className="rounded-lg pr-16 lg:pr-0"
          />
          <Search strokeWidth={2} className="absolute top-2 right-2" />
        </div>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
}
