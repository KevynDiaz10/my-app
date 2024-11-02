import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomIcon from "../CustomIcon/CustomIcon";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Locate,
  Mail,
  MailCheck,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
} from "lucide-react";

export default function FooterHome() {
  return (
    <footer className="bottom-0 w-[100%] flex flex-col items-center dark:bg-background bg-[#F4F6FF]">
      <div className="flex py-3 justify-center">
        <Image alt="" src="/Logo.svg" width={17} height={17} />
        <p>kevyn</p>
      </div>
      <div className="flex space-x-2 py-3 justify-center">
        <Link href="/">
          <CustomIcon icon={Facebook} />
        </Link>
        <Link href="/">
          <CustomIcon icon={Github} />
        </Link>
        <Link href="/">
          <CustomIcon icon={Linkedin} />
        </Link>
        <Link href="/">
          <CustomIcon icon={Instagram} />
        </Link>
        <Link href="/">
          <CustomIcon icon={Mail} />
        </Link>
      </div>
      <div className="flex items-center flex-col md:flex-row">
        <div className="flex items-center bg-slate-400/20 rounded-lg p-2 m-2">
          <MapPin width={16} height={16} className="text-nextui-primary mr-1" />
          Los Teques, Miranda Venezuela
        </div>
        <div className="flex items-center bg-slate-400/20 rounded-lg p-2 m-2">
          <MailCheck width={16} height={16} className="text-nextui-primary mr-1" />
          kevyndiaz10@mail.com
        </div>
        <div className="flex items-center bg-slate-400/20 rounded-lg p-2 m-2">
          <Phone width={16} height={16} className="text-nextui-primary mr-1" />
          +58 424-139-6781
        </div>
      </div>
      <div className="m-2">
        <p>Copyright 2024</p>
      </div>
    </footer>
  );
}
