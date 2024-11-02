import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import React from "react";
import { DialogButton } from "./FormContacts/Form";

export default function Contacts() {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>Contacts</CardTitle>
        <DialogButton/>
      </CardHeader>

    </Card>
  );
}
