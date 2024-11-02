import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { ModeToggle } from "../ButtonsTheme/ButtonsTheme";

export default function NavbarHome() {
  return (
    <Navbar
      shouldHideOnScroll
      className="flex items-center px-2 gap-x-4 md:px-6 justify-end w-full border-b h-20 bg-[#F4F6FF] dark:bg-background"
    >
      <NavbarBrand>
        <Link href="/dashboard" className="flex items-center font-semibold">
          <Image src="Logo.svg" alt="" width={45} height={45} priority />
          <h1 className="text-2xl ">kevyn</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="../sign-up"
            className="transition duration-200 bg-nextui-primary hover:bg-nextui-primary/50 transform rounded-xl text-white"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
