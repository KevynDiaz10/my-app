import React from "react";
import {
  LucideIcon,
  MoveDownRight,
  MoveUpRight,
  TrendingUp,
} from "lucide-react";
import CustomIcon from "@/components/ui/CustomIcon/CustomIcon";
import CustomTooltip from "@/components/ui/CustomTooltip/CustomTooltip";
import { cn } from "@/lib/utils";


export type CardSummaryProps = {
  icon: LucideIcon;
  total: string;
  average: number;
  title: string;
  tooltiptext: string;
};

export default function CardSummary(props: CardSummaryProps) {
  const { average, icon, title, tooltiptext, total } = props;
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 hover:shadow-lg transition">
      <div className="flex justify-between">
        <div className="flex items-center">
          <CustomIcon icon={icon} />
          {title}
        </div>

        <CustomTooltip content={tooltiptext} />
      </div>
      <div className="flex gap-4 mt-2 md:mt-4">
        <p className="text-2xl">{total}</p>
        <div
          className={cn(
            `flex items-center gap-1 px-2 text-xs text-white rounded-lg h-[20] bg-black dark:bg-secondary`
          )}
        >
          {average}%
          {average < 20 && <MoveDownRight strokeWidth={2} className="h-4 w-4 text-nextui-danger"/>}
          {average > 20 && average < 70 && <MoveUpRight strokeWidth={2} className="h-4 w-4 text-nextui-primary"/>}
          {average > 70 && <TrendingUp strokeWidth={2} className="h-4 w-4 text-nextui-succes"/>}
        </div>
      </div>
    </div>
  );
}
 