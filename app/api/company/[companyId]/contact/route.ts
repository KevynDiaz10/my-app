import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//create contacts
export async function POST(
    req: Request,
    { params }: { params: { companyId: string } }
  ) {
    try {
      const { userId } = auth();
      const values = await req.json();
  
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      const company = await db.company.findUnique({
        where: { id: params.companyId },
      });
  
      if (!company) {
        return new NextResponse("company not found");
      }
      const contact = await db.contact.create({
        data: { companyId: params.companyId, ...values },
      });
      return NextResponse.json(contact);
    } catch (error) {
      console.log(error);
    }
  }