import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { contactId: string } }
) {
  try {
    const { userId } = auth();
    const { contactId } = params;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const deleteContact = await db.contact.delete({ where: { id: contactId } });
    return NextResponse.json(deleteContact);
  } catch (error) {
    console.log(error);
  }
}
