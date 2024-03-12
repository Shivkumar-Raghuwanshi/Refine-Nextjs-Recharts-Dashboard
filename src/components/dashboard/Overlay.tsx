// Importing necessary libraries and components
import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Defining the properties for the Overlay component
const Overlay = ({children}:{children:ReactNode}) => {
  // Render the component
  return (
    <div>
      <TooltipProvider> 
        <Tooltip> 
          <TooltipTrigger>{children}</TooltipTrigger> 
          <TooltipContent className="flex flex-col justify-start items-start p-3 gap-2"> 
            <h2 className="text-sm font-semibold">Online store sessions</h2> 
            <p className="text-[13px] font-normal">
              Your online store's traffic volume, shown in sessions.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};


export default Overlay;
