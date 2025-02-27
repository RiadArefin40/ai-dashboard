'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange, DayPicker } from 'react-day-picker'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface DateRangePickerProps {
  onRangeSelect: (range: DateRange | undefined) => void
}

export default function DateRangePicker({ onRangeSelect }: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [range, setRange] = useState<DateRange>()

  const handleRangeSelect = (range: DateRange | undefined) => {
    setRange(range)
    onRangeSelect(range)
    if (range?.from && range?.to) {
      setIsOpen(false)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        <span className="text-gray-700 dark:text-gray-300">
          {range?.from && range?.to
            ? `${format(range.from, 'MMM d')} - ${format(range.to, 'MMM d, yyyy')}`
            : 'Select Date Range'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={handleRangeSelect}
            numberOfMonths={2}
            defaultMonth={new Date()}
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-medium text-gray-900 dark:text-gray-100",
              nav: "space-x-1 flex items-center",
              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity duration-200",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-gray-500 dark:text-gray-400 rounded-md w-9 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "text-center text-sm relative p-0 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
              day_selected: "bg-blue-500 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-500 focus:text-white",
              day_today: "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",
              day_outside: "opacity-50",
              day_disabled: "opacity-50",
              day_range_middle: "aria-selected:bg-blue-100 dark:aria-selected:bg-blue-900/30 aria-selected:text-gray-900 dark:aria-selected:text-gray-100",
              day_hidden: "invisible",
            }}
          />
        </div>
      )}
    </div>
  )
} 