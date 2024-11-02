import { BarChart4, Bolt, Building2, CalendarSearch, CircleHelp, CircleHelpIcon, GlobeLock, Home, House, Icon, LucideSettings, SettingsIcon } from "lucide-react";

export const DataGeneralSidebar = [
    {
        icon: House,
        href: "/dashboard",
        label: "Dashboard"
    },
    {
        icon: Building2,
        href: "/dashboard/companies",
        label: "Companies"
    },
    {
        icon: CalendarSearch,
        href: "/Calendar",
        label: "Calendar"
    },
]
export const dataToolSidebar = [
    {
        icon: CircleHelpIcon,
        label: "Faqs",
        href: "/Faqs"
    },
    {
        icon: BarChart4 ,
        label: "Analytics",
        href: "/Analytics"
    }
]

export const dataSupportSidebar = [
    {
        icon: Bolt ,
        label: "Setting",
        href: "/Setting"
    },
    {
        icon: GlobeLock ,
        label: "Security",
        href: "/Security"
    }
]