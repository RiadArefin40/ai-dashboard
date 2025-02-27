'use client'
import { useState } from 'react'
import DateRangePicker from './DateRangePicker'
import { DateRange } from 'react-day-picker'
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns'

type Period = 'today' | 'week' | 'month' | 'custom'

interface DateRangeSelectorProps {
  onPeriodChange: (range: { from: Date; to: Date }) => void
}

export default function DateRangeSelector({ onPeriodChange }: DateRangeSelectorProps) {
  const [activePeriod, setActivePeriod] = useState<Period>('today')

  const handlePeriodSelect = (period: Period) => {
    setActivePeriod(period)
    
    const now = new Date()
    let range: { from: Date; to: Date }

    switch (period) {
      case 'today':
        range = {
          from: startOfDay(now),
          to: endOfDay(now)
        }
        break
      case 'week':
        range = {
          from: startOfWeek(now),
          to: endOfWeek(now)
        }
        break
      case 'month':
        range = {
          from: startOfMonth(now),
          to: endOfMonth(now)
        }
        break
      default:
        return
    }

    onPeriodChange(range)
  }

  const handleCustomRange = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      setActivePeriod('custom')
      onPeriodChange({
        from: range.from,
        to: range.to
      })
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handlePeriodSelect('today')}
        className={`px-4 py-1.5 text-sm rounded-md ${
          activePeriod === 'today'
            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/50 dark:text-blue-400'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
      >
        TODAY
      </button>
      <button
        onClick={() => handlePeriodSelect('week')}
        className={`px-4 py-1.5 text-sm rounded-md ${
          activePeriod === 'week'
            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/50 dark:text-blue-400'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
      >
        WEEK
      </button>
      <button
        onClick={() => handlePeriodSelect('month')}
        className={`px-4 py-1.5 text-sm rounded-md ${
          activePeriod === 'month'
            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/50 dark:text-blue-400'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
      >
        MONTH
      </button>
      <DateRangePicker onRangeSelect={handleCustomRange} />
    </div>
  )
} 