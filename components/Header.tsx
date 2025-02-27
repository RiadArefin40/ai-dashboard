'use client'
import { useState } from 'react'
import { BellIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useTheme } from 'next-themes'
import MenuButton from './MenuButton'
import LanguageSelector from './LanguageSelector'

interface HeaderProps {
  onOpenSidebar: () => void
}

export default function Header({ onOpenSidebar }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [notifications] = useState([
    { id: 1, text: 'New order received', time: '5 min ago' },
    { id: 2, text: 'Server limit reached', time: '1 hour ago' },
    { id: 3, text: 'New user registered', time: '2 hours ago' },
  ])

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center h-16 px-6">
        {/* Left side - Menu Button */}
        <div className="lg:hidden">
          <MenuButton onClick={onOpenSidebar} />
        </div>

        {/* Right side - Icons and Profile */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Dark mode toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          {/* Language Selector */}
          <LanguageSelector />

          {/* Notifications */}
          <Menu as="div" className="relative">
            <Menu.Button className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <BellIcon className="h-5 w-5" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right rounded-lg bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {notifications?.map((notification) => (
                    <Menu.Item key={notification.id}>
                      {({ active }) => (
                        <div
                          className={`${
                            active ? 'bg-gray-100 dark:bg-gray-600' : ''
                          } px-4 py-3`}
                        >
                          <p className="text-sm text-gray-900 dark:text-white">{notification.text}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>

          {/* User Profile */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <img
                className="h-8 w-8 rounded-full"
                src="https://ui-avatars.com/api/?name=Admin+User"
                alt=""
              />
              <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200">Admin User</span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-gray-100 dark:bg-gray-600' : ''
                        } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-gray-100 dark:bg-gray-600' : ''
                        } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-gray-100 dark:bg-gray-600' : ''
                        } block px-4 py-2 text-sm text-red-600 dark:text-red-400`}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  )
} 