// Importing necessary libraries and components
import React, { memo, useState, useEffect } from "react";
import { TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic"; // Next.js function for dynamic imports
import UpIcon from "@public/Up.svg";
import Image from "next/image";
import Overlay from "./Overlay";
import { Skeleton } from "@components/ui/skeleton"; // Skeleton component for loading state

// Dynamic import for the DropDownMenu component
const DynamicDropDownMenu = dynamic(() => import("./DropDownMenu"), {
  ssr: false, // Disable server-side rendering for this component
});

// Defining the properties for the Tab component
interface TabProps {
  value: string;
  title: string;
  number: string;
  percentage: string;
  active: boolean;
  setActiveTab: (value: string) => void;
  updateTabData: (tabValue: string, newTitle: string) => void;
}

// Tab component
const Tab: React.FC<TabProps> = memo(
  ({
    value,
    title,
    number,
    percentage,
    active,
    setActiveTab,
    updateTabData,
  }) => {
    // State for the loading status
    const [isLoading, setIsLoading] = useState(true);

    // Effect to simulate loading delay
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); // Set loading to false after 2 seconds
      }, 2000);
    }, []);

    // Render the component
    return (
      <>
        {isLoading ? (
          <Skeleton className="w-[200px] h-[75px]" /> // Display skeleton while loading
        ) : (
          <TabsTrigger
            value={value}
            className="justify-start w-[200px] rounded-lg"
            onClick={() => setActiveTab(value)} // Set the active tab on click
          >
            <div className="w-full gap-4">
              <div className="flex w-full justify-between items-center">
                <Overlay>
                  <h2 className="underline underline-offset-8 decoration-dashed decoration-[#CCCCCC]">
                    {title}
                  </h2>
                </Overlay>
                {active && (
                  <DynamicDropDownMenu value={value} updateTabData={updateTabData} /> // Display the dropdown menu if the tab is active
                )}
              </div>
              <div className="flex mt-2 gap-2">
                <span className="text-lg">{number}</span>
                <div className="flex justify-center gap-0.5 items-center">
                  <Image src={UpIcon} width={7} height={10} alt="Up" />
                  <span className="text-xs font-normal">{percentage}</span>
                </div>
              </div>
            </div>
          </TabsTrigger>
        )}
      </>
    );
  }
);


export default Tab;
