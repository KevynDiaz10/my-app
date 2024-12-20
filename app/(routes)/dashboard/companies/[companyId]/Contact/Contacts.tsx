import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { DialogButton } from "./FormNewContact/Form";
import ListContact from "./ListContact/ListContact";
import { db } from "@/lib/db";
import { Props } from "./contacts.types";

export default async function Contacts(props: Props) {
  const {company} = props

  const contacts = await db.contact.findMany({
    where: {
        company: {
            id: company.id
        }
    }
})
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>Contacts</CardTitle>
        <DialogButton />
      </CardHeader>
      <CardContent>
        <ListContact contacts={contacts} company={company}/>
      </CardContent>
    </Card>
  );
}
