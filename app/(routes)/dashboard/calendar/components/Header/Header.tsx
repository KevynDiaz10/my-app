import { CalendarHeart } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 flex justify-between items-center font-semibold">
      <h1 className="flex gap-1">
        <CalendarHeart />
        Header
      </h1>
    </div>
  );
}
