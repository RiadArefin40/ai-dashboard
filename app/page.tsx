'use client'
import React, { useState, useEffect } from 'react'
import StatsCard from '@/components/StatsCard'
import SalesChart from '@/components/SalesChart'
import CountriesChart from '@/components/CountriesChart'
import DateRangeSelector from '@/components/DateRangeSelector'
import { 
  ShoppingCartIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon 
} from '@heroicons/react/24/outline'
import MoreOptionsDropdown from '@/components/MoreOptionsDropdown'
import { getDashboardData } from '@/utils/dashboardData'

export default function Dashboard() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(),
    to: new Date()
  })
  const [dashboardData, setDashboardData] = useState(getDashboardData(dateRange))

  const handleDateRangeChange = (range: { from: Date; to: Date }) => {
    setDateRange(range)
    const newData = getDashboardData(range)
    setDashboardData(newData)
  }

  // Add a loading state or default data
  if (!dashboardData) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-6 max-w-[1920px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Good Morning Norris! ⭐</h1>
          <p className="text-gray-600 mt-1 dark:text-gray-400">Here's what's happening with your store today.</p>
        </div>
        <DateRangeSelector onPeriodChange={handleDateRangeChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Sales"
          value={dashboardData.totalSales.value}
          percentageChange={dashboardData.totalSales.change}
          icon={<ShoppingCartIcon className="h-6 w-6 text-blue-600" />}
          iconBg="bg-blue-50"
          vs="last period"
          subStats={[
            { label: 'Guest', value: dashboardData.totalSales.guest },
            { label: 'Logged', value: dashboardData.totalSales.logged },
          ]}
        />
        <StatsCard
          title="New User Orders"
          value={dashboardData.newUsers.value}
          percentageChange={dashboardData.newUsers.change}
          icon={<UserGroupIcon className="h-6 w-6 text-green-600" />}
          iconBg="bg-green-50"
          vs="last period"
          subStats={[
            { label: 'Guest', value: dashboardData.newUsers.guest },
            { label: 'Logged', value: dashboardData.newUsers.logged },
          ]}
        />
        <StatsCard
          title="Cart Abandonment"
          value={dashboardData.cartAbandonment.value}
          percentageChange={dashboardData.cartAbandonment.change}
          icon={<ChartBarIcon className="h-6 w-6 text-red-600" />}
          iconBg="bg-red-50"
          vs="New Users Only"
          progressBar={{
            value: parseFloat(dashboardData.cartAbandonment.value),
            color: 'bg-red-500'
          }}
        />
        <StatsCard
          title="Deliveries"
          value={dashboardData.deliveries.value}
          percentageChange={dashboardData.deliveries.change}
          icon={<ClockIcon className="h-6 w-6 text-purple-600" />}
          iconBg="bg-purple-50"
          vs="Average Time"
          subStats={[
            { label: 'Total', value: dashboardData.deliveries.total },
            { label: 'On Time', value: dashboardData.deliveries.onTime },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SalesChart data={dashboardData.salesChart} />
        <CountriesChart data={dashboardData.countriesChart} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Most Sales in Countries</h3>
          <MoreOptionsDropdown />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold text-gray-900 dark:text-white">22,842</span>
          <span className="text-xs text-green-500">+42%</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sales Last 90 Days</p>

        <div className="mt-6">
          <div className="border-b border-gray-100 dark:border-gray-700 pb-2">
            <div className="grid grid-cols-5 text-sm text-gray-500 dark:text-gray-400">
              <div>COUNTRY</div>
              <div>TOTAL USERS</div>
              <div>LOGGED USERS</div>
              <div>ORDERS</div>
              <div>SALES</div>
            </div>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {[
              { country: 'Australia', users: '18,879', loggedUsers: '18,879', orders: '18,879', sales: -15 },
              { country: 'Canada', users: '10,357', loggedUsers: '10,357', orders: '10,357', sales: 85 },
              { country: 'India', users: '4,860', loggedUsers: '4,860', orders: '4,860', sales: 48 },
              { country: 'United State', users: '899', loggedUsers: '899', orders: '899', sales: -16 },
              { country: 'Japan', users: '43', loggedUsers: '43', orders: '43', sales: 35 },
              { country: 'Brazil', users: '18', loggedUsers: '18', orders: '18', sales: 12 },
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-5 py-4 text-sm">
                <div className="text-gray-900 dark:text-white">{row.country}</div>
                <div className="text-gray-600 dark:text-gray-300">{row.users}</div>
                <div className="text-gray-600 dark:text-gray-300">{row.loggedUsers}</div>
                <div className="text-gray-600 dark:text-gray-300">{row.orders}</div>
                <div className={`flex items-center ${row.sales >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {Math.abs(row.sales)}%
                  {row.sales >= 0 ? (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Time-based User Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Time-based User Activity</h3>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">12 AM - 06 AM</div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                  <div className="font-medium dark:text-gray-200">150</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Completed Orders</div>
                  <div className="font-medium dark:text-gray-200">8</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">06 AM - 12 PM</div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                  <div className="font-medium dark:text-gray-200">300</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Completed Orders</div>
                  <div className="font-medium dark:text-gray-200">30</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">12 PM - 06 PM</div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                  <div className="font-medium dark:text-gray-200">150</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Completed Orders</div>
                  <div className="font-medium dark:text-gray-200">8</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">06 PM - 12 AM</div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                  <div className="font-medium dark:text-gray-200">150</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Completed Orders</div>
                  <div className="font-medium dark:text-gray-200">15</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 10 Delivery Locations */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top 10 Delivery Locations</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                  <th className="pb-4">LOCATION</th>
                  <th className="pb-4">ORDERS</th>
                  <th className="pb-4">REVENUE</th>
                  <th className="pb-4">AVG TIME</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-gray-900 dark:text-white">Australia</td>
                  <td className="text-gray-600 dark:text-gray-300">18,879</td>
                  <td className="text-gray-600 dark:text-gray-300">18,879</td>
                  <td className="text-red-500 flex items-center">15% <ChevronDownIcon className="h-4 w-4 ml-1" /></td>
                </tr>
                <tr className="border-t border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-gray-900 dark:text-white">Canada</td>
                  <td className="text-gray-600 dark:text-gray-300">10,357</td>
                  <td className="text-gray-600 dark:text-gray-300">10,357</td>
                  <td className="text-green-500 flex items-center">85% <ChevronUpIcon className="h-4 w-4 ml-1" /></td>
                </tr>
                <tr className="border-t border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-gray-900 dark:text-white">India</td>
                  <td className="text-gray-600 dark:text-gray-300">4,860</td>
                  <td className="text-gray-600 dark:text-gray-300">4,860</td>
                  <td className="text-red-500 flex items-center">48% <ChevronDownIcon className="h-4 w-4 ml-1" /></td>
                </tr>
                <tr className="border-t border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-gray-900 dark:text-white">United States</td>
                  <td className="text-gray-600 dark:text-gray-300">899</td>
                  <td className="text-gray-600 dark:text-gray-300">899</td>
                  <td className="text-red-500 flex items-center">48% <ChevronDownIcon className="h-4 w-4 ml-1" /></td>
                </tr>
                <tr className="border-t border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-gray-900 dark:text-white">Japan</td>
                  <td className="text-gray-600 dark:text-gray-300">43</td>
                  <td className="text-gray-600 dark:text-gray-300">43</td>
                  <td className="text-red-500 flex items-center">35% <ChevronDownIcon className="h-4 w-4 ml-1" /></td>
                </tr>
                <tr className="border-t border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-gray-900 dark:text-white">Brazil</td>
                  <td className="text-gray-600 dark:text-gray-300">18</td>
                  <td className="text-gray-600 dark:text-gray-300">18</td>
                  <td className="text-green-500 flex items-center">12% <ChevronUpIcon className="h-4 w-4 ml-1" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 