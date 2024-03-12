// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import { Stats } from "./Stats";
import ChartWithDatePicker from "./ChartWithDatePicker";
import { Skeleton } from "@components/ui/skeleton";

// Graph component
const Graph = () => {
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
    <div className="flex justify-center items-center w-full min-h-screen bg-black">
      <div className="flex justify-center items-start w-[980px] px-[50px] py-[40px] h-[460px] bg-[#F1F1F1]">
        <div className="flex justify-center w-[880px] bg-white px-3 rounded-lg">
          {isLoading ? (
            // Display skeleton while loading
            <Skeleton className="w-[860px] h-[320px] p-4" />
          ) : (
            // Display accordion with stats and chart when not loading
            <Accordion title={<Stats />}>
              <div className="w-full ">
                <ChartWithDatePicker />
              </div>
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};


export default Graph;
