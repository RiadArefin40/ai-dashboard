'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'

interface MenuButtonProps {
  onClick: () => void
}

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
    >
      <Bars3Icon className="h-6 w-6" />
    </button>
  )
} 