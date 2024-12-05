import { db } from "@/lib/db";
import React from "react";
import FormUpdate from "./Update/FormUpdate";
import Contacts from "./Contact/Contacts";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function page({
  params,
}: {
  params: { companyId: string };
}) {
  const { userId } = auth();
  //connect to data base with prisma findUnique
  if (!userId) {
    return redirect("/");
  }

  const { companyId } = params;
  const company = await db.company.findUnique({
    where: {
      id: companyId,
      userId
    },
  });

  if (!company) {
    return redirect("/")
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
      <FormUpdate company={company} />
      <Contacts company={company}/>
    </div>
  );
}
