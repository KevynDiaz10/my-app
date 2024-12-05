import { Company, Contact } from "@prisma/client";

export type listContactsProps = {
  company: Company;
  contacts: Contact[];
};
