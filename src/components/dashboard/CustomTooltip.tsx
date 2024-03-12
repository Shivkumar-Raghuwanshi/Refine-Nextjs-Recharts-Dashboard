// Importing necessary libraries and components
import { TooltipProps } from "recharts";
import { TrendingUp } from 'lucide-react';
import { TrendingDown } from 'lucide-react';

// Defining the properties for the Payload interface
interface Payload {
  color: string; // Color of the payload
  dataKey: string; // Key of the data
  fill: string; // Fill color
  name: string; // Name of the payload
  payload: any; // Payload data
  value: number | string; // Value of the payload
  formatter?: (value: number | string) => number | string; // Optional formatter function
}

// Defining the properties for the CustomTooltip component
interface CustomTooltipProps extends TooltipProps<any, any> {
  active?: boolean; // Active status of the tooltip
  payload?: Payload[]; // Payload data
  label?: string; // Label for the tooltip
  color1?: string; // Color for the first tooltip item
  color2?: string; // Color for the second tooltip item
}

// CustomTooltip component
export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
  color1,
  color2,
}) => {
  // Check if the tooltip is active and payload exists
  if (active && payload && payload.length) {
    // Calculate the percentage change between the first and second payload values
    const percentChange =
      (((payload[0].value as number) - (payload[1].value as number)) /
        (payload[1].value as number)) *
      100;

    // Check if the percentage change is negative
    const isNegative = percentChange < 0;

    // Render the tooltip
    return (
      <div className="h-[62px] px-[5px] py-[5px] gap-[5px] rounded-[10px] bg-white shadow-md">
        <div className="flex justify-start items-center px-[10px] gap-[10px] py-[5px] text-[10px] text-[#303030] rounded-sm">
          <div style={{ width: 10, height: 2, backgroundColor: color1 }} />
          <span>{label}</span>
          <span>{payload[0].value}</span>
          <div className="flex justify-center gap-0.5 items-center">
            {isNegative ? (
              // Display a downward trending icon if the percentage change is negative
              <TrendingDown className="w-[13px] h-[13px] text-[#616161] " />
            ) : (
              // Display an upward trending icon if the percentage change is positive
              <TrendingUp className="w-[13px] h-[13px] text-[#616161] " />
            )}
            <span>{percentChange.toFixed(2)}%</span>
          </div>
        </div>
        <div className="flex justify-start items-center px-[10px] gap-[10px] py-[5px] text-[10px] text-[#303030] rounded-sm">
          <div style={{ width: 10, height: 2, backgroundColor: color2 }} />
          <span>{label}</span>
          <span>{payload[1].value}</span>
        </div>
      </div>
    );
  }

  // Return null if the tooltip is not active or payload does not exist
  return null;
};
