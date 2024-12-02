import { Company, Contact } from "@prisma/client";

export type CompanyProps = {
  company: Company;
  contacts: Contact[];
};
