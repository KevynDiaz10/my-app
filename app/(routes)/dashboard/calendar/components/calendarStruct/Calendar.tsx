"use client";
import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { DateSelectArg, EventContentArg } from "@fullcalendar/core/index.js";
import multimonthPlugin from "@fullcalendar/multimonth";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { ModalAddEvent } from "../ModalAddEvent/ModalAddEvent";
import { CalendarProps } from "./calendar.types";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export default function Calendar(props: CalendarProps) {
  const { companies, events } = props;

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [onSaveNewEvent, setOnSaveNewEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DateSelectArg>();
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    companieSelected: {
      name: "",
      id: "",
    },
  });

  const handleDateClick = async (seleted: DateSelectArg) => {
    setOpen(true);
    setSelectedItem(seleted);
  };

  useEffect(() => {
    if (onSaveNewEvent && selectedItem?.view.calendar) {
      const calendarApi = selectedItem.view.calendar;
      calendarApi.unselect();

      const newEventPrisma = {
        companyId: newEvent.companieSelected.id,
        title: newEvent.eventName,
        start: new Date(selectedItem.start),
        allDay: false,
        timeFormat: "H(:mm)",
      };

      axios
        .post(
          `/api/company/${newEvent.companieSelected.id}/event`,
          newEventPrisma
        )
        .then(() => {
          toast({ title: "Evento creado",
           });
          router.refresh();
        })
        .catch((error) => {
          console.log(error)
          toast({
            title: "Error al crear el event",
            variant: "destructive",
          });
        });
      setNewEvent({
        eventName: "",
        companieSelected: {
          name: "",
          id: "",
        },
      });
      setOnSaveNewEvent(false);
    }
  }, [onSaveNewEvent, selectedItem, event]);

  interface SelectedEvent { event: { _def: { publicId: string; }; }; }
  const handleEventClick = (seleted: SelectedEvent) =>{
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
          await axios
            .delete(`/api/event/${seleted.event._def.publicId}`)
            .then(() => {
              toast({ title: "Evento Eliminado" });
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
    router.refresh();
  };

  return (
    <div className="flex-1 calendar-container bg-background p-5 rounded-sm">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          multimonthPlugin,
          listPlugin,
          timeGridPlugin,
        ]}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear",
        }}
        height="80vh"
        initialView="dayGridMonth"
        events={events}
        weekends={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        select={handleDateClick}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
      />
      <ModalAddEvent
        open={open}
        setOpen={setOpen}
        setOnSaveNewEvent={setOnSaveNewEvent}
        companies={companies}
        setNewEvent={setNewEvent}
      />
    </div>
  );
}

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
