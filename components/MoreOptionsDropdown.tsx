'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function MoreOptionsDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-gray-400 hover:text-gray-600">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
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
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                >
                  View Details
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                >
                  Download Report
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex w-full items-center px-4 py-2 text-sm text-red-600 dark:text-red-400`}
                >
                  Remove Report
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
} 