// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import ResponsiveLineChart from "./ResponsiveLineChart";
import { DatePickerWithRange } from "./DatePicker";
import { Skeleton } from "@components/ui/skeleton";

// Component to display a chart with a date picker
const ChartWithDatePicker = () => {
  // State for the date range
  const [dateRange, setDateRange] = useState<{
    startDate: Date;
    endDate: Date;
  }>({
    startDate: new Date(2022, 9, 1), // Initial start date
    endDate: new Date(2024, 1, 21), // Initial end date
  });

  // State for loading status
  const [isLoading, setIsLoading] = useState(true);

  // Effect to simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  // Handler for date range change
  const handleDateRangeChange = (dates: [Date, Date]) => {
    setDateRange({ startDate: dates[0], endDate: dates[1] }); // Update date range state
  };

  // Render the component
  return (
    <div className="flex flex-col w-[858px] items-center">
      <div className="flex self-end">
        {isLoading ? (
          // Display skeleton while loading
          <Skeleton className="w-[280px] h-10 m-2" />
        ) : (
          // Display date picker with current date range when not loading
          <DatePickerWithRange
            value={[dateRange.startDate, dateRange.endDate]}
            onChange={handleDateRangeChange}
          />
        )}
      </div>
      <div style={{ width: "858px", height: "200px" }}>
        <ResponsiveLineChart dateRange={dateRange} />
      </div>
    </div>
  );
};


export default ChartWithDatePicker;
