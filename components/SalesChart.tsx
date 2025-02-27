'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface SalesChartProps {
  data: {
    labels: string[]
    sales: number[]
    orders: number[]
  }
}

export default function SalesChart({ data }: SalesChartProps) {
  if (!data || !data.labels) {
    return <div>Loading...</div>
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Sales',
        data: data.sales,
        backgroundColor: '#4F46E5',
        borderRadius: 4,
      },
      {
        label: 'Orders',
        data: data.orders,
        backgroundColor: '#FCD34D',
        borderRadius: 4,
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
          padding: 20,
          usePointStyle: true,
          color: '#6B7280',
        },
      },
      tooltip: {
        padding: 12,
        boxPadding: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: '#E5E7EB',
        },
        ticks: {
          maxTicksLimit: 5,
          color: '#6B7280',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
        },
      },
    },
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Comparison</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg dark:bg-blue-500">3M</button>
          <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">6M</button>
          <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">12M</button>
        </div>
      </div>
      <div className="h-[300px] [&_.chartjs-tooltip]:bg-white [&_.chartjs-tooltip]:dark:bg-gray-800 [&_.chartjs-tooltip]:dark:text-gray-100">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  )
} 