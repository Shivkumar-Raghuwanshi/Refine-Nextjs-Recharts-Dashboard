"use client"
// Importing necessary libraries and components
import * as React from "react"
import {format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Defining the properties for the DatePickerWithRange component
interface DatePickerWithRangeProps {
  value: [Date, Date]; // Value for the date picker
  onChange: (dates: [Date, Date]) => void; // Handler for date change
  className?: string; // Optional class name
}

// DatePickerWithRange component
export const DatePickerWithRange: React.FC<DatePickerWithRangeProps> = ({
  className,
  value,
  onChange,
}) => {
  // State for the date range
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: value[0],
    to: value[1],
  })

  // Effect to update the date state when the value prop changes
  React.useEffect(() => {
    setDate({ from: value[0], to: value[1] })
  }, [value])

  // Handler for date range change
  const handleDateChange = (dateRange: DateRange | undefined) => {
    if (dateRange && dateRange.from && dateRange.to) {
      onChange([dateRange.from, dateRange.to]); // Update the date range
    }
  };

  // Render the component
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "justify-start text-left text-xs font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" /> {/* Calendar icon */}
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")} {/* Display the date range */}
                </>
              ) : (
                format(date.from, "LLL dd, y") // Display the start date
              )
            ) : (
              <span>Pick a date</span> // Prompt to pick a date
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
