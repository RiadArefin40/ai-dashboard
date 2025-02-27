'use client'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { href: '/', icon: HomeIcon, label: 'Dashboard' },
    { href: '/users', icon: UserGroupIcon, label: 'Users' },
  ]

  const MenuItem = ({ href, icon: Icon, label, index }: any) => {
    const isActive = pathname === href
    return (
      <Link
        href={href}
        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:translate-x-2 
          ${isActive 
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        onClick={() => onClose()}
      >
        <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
        <span className={isActive ? 'font-medium' : ''}>{label}</span>
      </Link>
    )
  }

  return (
    <>
      {/* Mobile drawer */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="flex h-full flex-col overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xl font-semibold text-gray-800 dark:text-white animate-fade-in">Admin Panel</span>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                      onClick={onClose}
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item, index) => (
                      <MenuItem key={item.href} {...item} index={index} />
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex h-full flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
            <span className="text-xl font-semibold text-gray-800 dark:text-white animate-fade-in">Admin Panel</span>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <MenuItem key={item.href} {...item} index={index} />
            ))}
          </nav>
        </div>
      </div>
    </>
  )
} 