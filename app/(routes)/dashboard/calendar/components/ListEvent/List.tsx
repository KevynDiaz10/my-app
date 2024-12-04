"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { NotebookText, X } from "lucide-react";
import React from "react";
import { listEventProps } from "./listEventProps.types";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function List(props: listEventProps) {
  const { events } = props;
  const router = useRouter();
  const deleteEvent = (eventId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`/api/event/${eventId}`).then(() => {
            toast({ title: "Evento Eliminado" });
            router.refresh();
          });
        } catch (error) {
          console.log(error)
          toast({
            title: "Error al eliminar event",
            variant: "destructive",
          });
        }
      }
    });
  };
  return (
    <div className="">
      <Card className="">
        <CardHeader className="font-semibold bg-nextui-primary/25 rounded-t-md">
          <h1 className="flex">
            <NotebookText />
            Planner
          </h1>
        </CardHeader>
        <CardContent className="flex justify-between p-3 flex-col gap-3">
          {events.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-3">
                <X
                  width={12}
                  height={12}
                  className="float-end hover:text-nextui-danger transition delay-150 duration-100"
                  onClick={() => deleteEvent(event.id)}
                />
                <h1>Event: {event.title}</h1>
                <CardDescription>{event.start.toDateString()}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
