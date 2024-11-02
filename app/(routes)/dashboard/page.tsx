import { UserButton } from "@clerk/nextjs";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";

import { users } from "@/components/ui/TableDashboard/data";
import TableDashboard, { Payment } from "@/components/ui/TableDashboard/TableDashboard";
import Graphy from "@/components/ui/Graphy/Graphy";
import CardSummary from "./components/cardSummary/CardSummary";

const DataCardSummary = [
  {
    icon: UsersRound,
    total: "12.450",
    average: 15,
    title: "Companies created",
    tooltipText: "See all of the companies created"
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Total Revenue",
    tooltipText: "See all of the summary"
  },
  {
    icon: BookOpenCheck,
    total: "363,95€",
    average: 30,
    title: "Bounce Rate",
    tooltipText: "See all of the bounce rate"
  },
]
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "pedro"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "jose"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "kevyn"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "pedro"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "jose"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "kevyn"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "pedro"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "jose"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "kevyn"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "pedro"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "jose"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "kevyn"
    },
    // ...
  ]
}


export default async function Home() {
  const data = await getData()
 
  return (
    <div>
      <h2 className="text-2xl mb-4">dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {DataCardSummary.map((data, index) => (
          <CardSummary
            key={index}
            icon={data.icon}
            total={data.total}
            average={data.average}
            title={data.title}
            tooltiptext={data.tooltipText}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-x-20 pt-12 justify-center">
        <TableDashboard />
        <Graphy />
      </div>
    </div>
  );
}


