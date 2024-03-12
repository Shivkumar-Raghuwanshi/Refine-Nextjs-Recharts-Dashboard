// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { Tabs, TabsList } from "@/components/ui/tabs";
import Tab from "./Tabs";

// Defining the structure for the dummy data items
interface DummyDataItem {
  number: string;
  percentage: string;
}

// Defining the structure for the dummy data
interface DummyData {
  [key: string]: DummyDataItem;
}

// Defining the structure for the tab data items
interface TabDataItem {
  value: string;
  title: string;
  number: string;
  percentage: string;
}

// Dummy data for the tabs
const dummyData: DummyData = {
  "Average Order Value": {
    number: "$100.00",
    percentage: "5%",
  },
  "Conversion rate": {
    number: "3.5%",
    percentage: "10%",
  },
  "Gross Sales": {
    number: "$50,000",
    percentage: "20%",
  },
  "Net return value": {
    number: "-$2,000",
    percentage: "-8%",
  },
  "Store search conversion": {
    number: "2.8%",
    percentage: "15%",
  },
  "Return rate": {
    number: "6%",
    percentage: "-3%",
  },
};

// Stats component
export function Stats() {
  // State for the active tab and tab data
  const [activeTab, setActiveTab] = useState("");
  const [tabData, setTabData] = useState<TabDataItem[]>([]);

  

   // Effect to set the initial tab data
  useEffect(() => {
    setTabData([
      {
        value: "Tab1",
        title: "Online store sessions",
        number: "255,581",
        percentage: "9%",
      },
      {
        value: "Tab2",
        title: "Net return value",
        number: "-$1507.44",
        percentage: "14%",
      },
      {
        value: "Tab3",
        title: "Total Orders",
        number: "10,511",
        percentage: "2%",
      },
      {
        value: "Tab4",
        title: "Conversion rate",
        number: "3.18%",
        percentage: "7%",
      },
    ]);
  }, []);

  // Function to update the tab data
  const updateTabData = (tabValue: string, newTitle: string) => {
    setTabData((prevTabData) =>
      prevTabData.map((tab) =>
        tab.value === tabValue
          ? {
              ...tab,
              title: newTitle,
              number: dummyData[newTitle]?.number || "",
              percentage: dummyData[newTitle]?.percentage || "",
            }
          : tab
      )
    );
  };

  return (
    <Tabs defaultValue="Tab1" className="w-[832px] text-black">
      <TabsList className="grid gap-2 grid-cols-4 bg-white">
        {tabData.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            title={tab.title}
            number={tab.number}
            percentage={tab.percentage}
            active={activeTab === tab.value}
            setActiveTab={setActiveTab}
            updateTabData={updateTabData}
          />
        ))}
      </TabsList>
    </Tabs>
  );
}