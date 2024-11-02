import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { Info } from "lucide-react";

export type CustomTooltipProps = {
  content: string;
};

export default function CustomTooltip(props: CustomTooltipProps) {
  const { content } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><Info strokeWidth={1} className="w-5 h-5"/></TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
