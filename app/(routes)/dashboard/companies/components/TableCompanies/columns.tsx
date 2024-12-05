"use client";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { CircleEllipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export type Payment = {
  userId: string;
  id: string;
  name: string;
  phone: string;
  country: string;
};
import axios from "axios";
import { toast } from "@/hooks/use-toast";


export const columns: ColumnDef<Payment>[] = [

  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("country")}</div>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;
      const onDeleteCompany = async () => {
        try {
          axios.delete(`/api/company/${payment.id}`).then(()=>{
          toast({
            title: "Delete company",
            className: "bg-nextui-succes/60",
            duration: 2000,
          });
        })
        } catch (error) {
          console.log(error)
        }
      };
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <CircleEllipsis className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={`/dashboard/companies/${payment.id}`}>Edit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem >
                <p onClick={() => onDeleteCompany()}>delete</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
