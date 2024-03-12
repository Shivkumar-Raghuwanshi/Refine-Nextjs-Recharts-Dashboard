// Importing necessary libraries and components
import React from "react";
import TrendIcon from "@public/TrendIcon.svg";
import helpIcon from "@public/help.svg";
import PenIcon from "@public/Pen.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

// List of menu items for the dropdown
const menuItems = [
  "Average Order Value",
  "Conversion rate",
  "Gross Sales",
  "Net return value",
  "Store search conversion",
  "Return rate",
];

// Defining the properties for the DynamicDropDownMenu component
interface DropDownMenuProps {
  value: string; // Value for the dropdown
  updateTabData: (tabValue: string, newTitle: string) => void; // Handler for updating tab data
}

// DynamicDropDownMenu component
const DynamicDropDownMenu: React.FC<DropDownMenuProps> = ({ value, updateTabData }) => {
  // Handler for updating data
  const handleDataUpdate = (newTitle: string) => {
    updateTabData(value, newTitle);
  };

  // Render the component
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center w-[23px] h-[23px] p-[5x] rounded-[5px]">
          <Image src={PenIcon} width={13} height={13} alt="Edit Icon" /> 
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 ml-40 bg-white">
          {menuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="group hover:bg-[#F1F1F1] flex justify-between items-center rounded"
              onClick={() => handleDataUpdate(item)} // Update data on click
            >
              <div className="flex text-xs items-center">
                <Image src={TrendIcon} width={10} height={10} alt="Trend" className="mr-2" /> 
                {item} 
              </div>
              <Image src={helpIcon} width={10} height={10} alt="help" className="ml-5 opacity-0 group-hover:opacity-100" /> 
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};


export default DynamicDropDownMenu;
