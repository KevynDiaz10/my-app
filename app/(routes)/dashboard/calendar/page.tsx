import React from "react";
import Header from "./components/Header/Header";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Calendar from "./components/calendarStruct/Calendar";
import List from "./components/ListEvent/List";

export default async function PageCalendar() {
  
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  const companies = await db.company.findMany({
    where: { userId },
    orderBy: {
      createdAt: "desc",
    },
  });
  const events = await db.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-1 mt-2 col-span-2">
        <div className="col-span-2">
          <Calendar companies={companies} events={events}/>
        </div>
        <div className="col-span-1">
          <List events={events}/>
        </div>
      </div>
    </>
  );
}
