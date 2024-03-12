// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // Recharts library for creating charts
import { CustomTooltip } from "./CustomTooltip"; // Custom tooltip component
import { CustomLegend } from "./CustomLegend"; // Custom legend component
import { format } from "date-fns"; // Date formatting library
import { Skeleton } from "@components/ui/skeleton"; // Skeleton component for loading state

const data = [
  {
    date: new Date(2022, 9, 1),
    year: 2022,
    month: "Oct 2022",
    paid: 5000,
    organic: 4230,
  },
  {
    date: new Date(2022, 11, 1),
    year: 2022,
    month: "Dec 2022",
    paid: 7800,
    organic: 2900,
  },
  {
    date: new Date(2023, 1, 1),
    year: 2023,
    month: "Feb 2022",
    paid: 4700,
    organic: 2400,
  },
  {
    date: new Date(2023, 3, 1),
    year: 2023,
    month: "Apr 2023",
    paid: 900,
    organic: 2600,
  },
  {
    date: new Date(2023, 5, 1),
    year: 2023,
    month: "Jun 2023",
    paid: 1200,
    organic: 1510,
  },
  {
    date: new Date(2023, 7, 1),
    year: 2023,
    month: "Aug 2023",
    paid: 700,
    organic: 3210,
  },
  {
    date: new Date(2023, 9, 1),
    year: 2023,
    month: "Oct 2023",
    paid: 4000,
    organic: 3321,
  },
  {
    date: new Date(2023, 11, 1),
    year: 2023,
    month: "Dec 2023",
    paid: 2000,
    organic: 3210,
  },
];

// Defining the properties for the ResponsiveLineChart component
interface ResponsiveLineChartProps {
  dateRange: {
    startDate: Date; // Start date for the date range
    endDate: Date; // End date for the date range
  };
}

// ResponsiveLineChart component
const ResponsiveLineChart: React.FC<ResponsiveLineChartProps> = ({
  dateRange,
}) => {
  // State for the filtered data and loading status
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  // Effect to simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  // Effect to filter the data based on the date range
  useEffect(() => {
    const startDateStr = dateRange.startDate.toISOString().split("T")[0];
    const endDateStr = dateRange.endDate.toISOString().split("T")[0];

    setFilteredData(
      data.filter((d) => {
        const dateStr = d.date.toISOString().split("T")[0];
        return dateStr >= startDateStr && dateStr <= endDateStr;
      })
    );
  }, [dateRange, data]);

  // Format the start and end dates
  const formattedStartDate = format(dateRange.startDate, "MMM d, yyyy");
  const formattedEndDate = format(dateRange.endDate, "MMM d, yyyy");

  // Render the component
  return (
    <div>
      {isLoading ? (
        <Skeleton className="w-[858px] h-[180px]" /> // Display skeleton while loading
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 0" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tick={{ fontSize: 12, fill: "#676767" }}
            />
            <YAxis
              stroke="0"
              padding={{ bottom: 0 }}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#676767" }}
            />
            <Tooltip
              content={<CustomTooltip color1="#489AD2" color2="#bad5e7" />}
            />
            <Line
              type="monotone"
              dataKey="paid"
              stroke="#489AD2"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="organic"
              stroke="#bad5e7"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
            <Legend
              content={
                <CustomLegend
                  color1="#489AD2"
                  color2="#bad5e7"
                  range1={`${formattedStartDate} - ${formattedEndDate}`}
                  range2={`${formattedStartDate} - ${formattedEndDate}`}
                />
              }
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};


export default ResponsiveLineChart;