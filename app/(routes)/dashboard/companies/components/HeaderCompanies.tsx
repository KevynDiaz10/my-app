"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";
import { FormCreateCustomer } from "./FormCreateCustomer";

export default function Header() {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <div className="shadow-sm bg-background rounded-lg p-5 mb-2">
      <div className="flex gap-x-2 items-center justify-between">
        <div className="flex">
          <FilePlus />
          <h1 className="font-bold">Create of companies</h1>
        </div>
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
          <DialogTrigger asChild>
            <Button>Create Company</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Create Customer</DialogTitle>
              <DialogDescription>
                Create and configure your customer
              </DialogDescription>
            </DialogHeader>
            <FormCreateCustomer setOpenModalCreate={setOpenModalCreate}/>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
