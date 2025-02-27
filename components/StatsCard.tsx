'use client'
import { ReactNode } from 'react'

interface StatsCardProps {
  title: string
  value: string | number
  percentageChange: number
  icon?: ReactNode
  subStats?: {
    label: string
    value: string | number
  }[]
  iconBg?: string
  vs?: string
  progressBar?: {
    value: number
    color?: string
  }
}

export default function StatsCard({ 
  title, 
  value, 
  percentageChange, 
  icon, 
  subStats, 
  iconBg = 'bg-blue-50', 
  vs,
  progressBar 
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm dark:bg-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {icon && (
            <div className={`${iconBg} p-2 rounded-lg dark:bg-opacity-15 animate-bounce-gentle`}>
              {icon}
            </div>
          )}
          <div className="text-sm text-gray-600 dark:text-gray-300">{title}</div>
        </div>
        {vs && (
          <div className="text-xs text-gray-500 dark:text-gray-400">{vs}</div>
        )}
      </div>
      <div className="flex items-end gap-2 mb-4">
        <div className="text-2xl font-semibold dark:text-white animate-slide-up">{value}</div>
        <div className={`text-sm ${percentageChange >= 0 ? 'text-green-500' : 'text-red-500'} animate-slide-up`}>
          {percentageChange >= 0 ? '+' : ''}{percentageChange}%
        </div>
      </div>
      {progressBar && (
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className={`h-full ${progressBar.color || 'bg-blue-600'} transition-all duration-1000 ease-out animate-expand`}
            style={{ width: `${progressBar.value}%` }}
          />
        </div>
      )}
      {subStats && (
        <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-gray-700">
          {subStats.map((stat, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              <div className="font-medium dark:text-gray-200">{stat.value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 