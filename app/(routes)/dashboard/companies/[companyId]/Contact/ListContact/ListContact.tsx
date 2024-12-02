"use client"
import { CompanyProps } from "./ListContact.types";
import { db } from "@/lib/db";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Mail, Phone, X } from "lucide-react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default async function ListContact(props: CompanyProps) {
  const { contacts } = props;
  const router = useRouter()
  const deleteContact = (contactId: any)=>{
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
            .delete(`/api/contact/${contactId}`)
            .then(() => {
              toast({ title: "Evento Eliminado" });
              router.refresh();
            });
        } catch (error) {
          toast({
            title: "Error al eliminar event",
            variant: "destructive",
          });
          console.log(error)
        }
      }
    });
  }; 

  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((data) => (
          <Card key={data.id} className="mt-2">
            <div className="float-end">
                <X
                  width={12}
                  height={12}
                  className="m-2 hover:text-nextui-danger transition ease-in-out delay-150 duration-100"
                  onClick={()=>{deleteContact(data.id)}}
                />
            </div>
            <CardContent className="flex justify-between p-4 items-center">
              <div>
                <h1>{data.name}</h1>
                <CardDescription>{data.role}</CardDescription>
              </div>
              <div className="flex flex-row gap-3">
                <a href={`telto: ${data.phone}`}>
                  <Phone />
                </a>
                <a href={`mailto: ${data.email}`} target="_blank">
                  <Mail />
                </a>
              </div>{" "}
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardDescription className="p-6">No contacts</CardDescription>
        </Card>
      )}
    </div>
  );
}