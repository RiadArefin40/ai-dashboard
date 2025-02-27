'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface CountriesChartProps {
  data: {
    labels: string[]
    totalUsers: number[]
    loggedUsers: number[]
  }
}

export default function CountriesChart({ data }: CountriesChartProps) {
  if (!data || !data.labels) {
    return <div>Loading...</div>
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.totalUsers,
        backgroundColor: [
          '#4F46E5', // blue
          '#10B981', // green
          '#F59E0B', // yellow
          '#EF4444', // red
          '#8B5CF6', // purple
        ],
        borderWidth: 0,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          },
          color: '#6B7280',
        }
      }
    },
    cutout: '75%'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Top Countries</h3>
      <div className="h-[300px] [&_.chartjs-tooltip]:bg-white [&_.chartjs-tooltip]:dark:bg-gray-800 [&_.chartjs-tooltip]:dark:text-gray-100">
        <Doughnut options={options} data={chartData} />
      </div>
    </div>
  )
} 