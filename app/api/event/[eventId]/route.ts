import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { eventId: string } }
) {
  try {
    const { userId } = auth();
    const { eventId } = params;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const deleteEvent = await db.event.delete({ where: { id: eventId } });
    return NextResponse.json(deleteEvent);
  } catch (error) {
    console.log(error)
  }
}
