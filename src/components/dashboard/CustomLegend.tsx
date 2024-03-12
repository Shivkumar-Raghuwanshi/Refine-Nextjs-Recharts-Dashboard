// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { Skeleton } from "@components/ui/skeleton";

// Defining the properties for the CustomLegend component
interface CustomLegendProps {
  color1?: string; // Color for the first legend item
  color2?: string; // Color for the second legend item
  range1?: string; // Range for the first legend item
  range2?: string; // Range for the second legend item
}

// CustomLegend component
export const CustomLegend: React.FC<CustomLegendProps> = ({
  color1,
  color2,
  range1,
  range2,
}) => {
  // State for loading status
  const [isLoading, setIsLoading] = useState(true);

  // Effect to simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  // Render the component
  return (
    <div className="flex w-full justify-end items-center gap-[10px] ">
      {isLoading ? (
        // Display skeleton while loading
        <Skeleton className="w-[189px] h-[22px]" />
      ) : (
        // Display the first legend item when not loading
        <div className="flex justify-center items-center w-[189px] h-[22px] px-[10px] py=[5px] gap-[10px] bg-[#F6F6F7]">
          <div style={{ width: 10, height: 2, backgroundColor: color1 }} />
          <span className="text-[10px] text-[#70707A]">{range1}</span>
        </div>
      )}
      {isLoading ? (
        // Display skeleton while loading
        <Skeleton className="w-[189px] h-[22px]"/>
      ) : (
        // Display the second legend item when not loading
        <div className="flex justify-center items-center w-[189px] h-[22px] px-[10px] py=[5px] gap-[10px] bg-[#F6F6F7]">
          <div style={{ width: 10, height: 2, backgroundColor: color2 }} />
          <span className="text-[10px] text-[#70707A]">{range2}</span>
        </div>
      )}
    </div>
  );
};
