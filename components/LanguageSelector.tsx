'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/24/outline'

export default function LanguageSelector() {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ]

  const handleLanguageChange = (languageCode: string) => {
    // Language change functionality will be added later
    console.log('Language changed to:', languageCode)
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <LanguageIcon className="h-5 w-5" />
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
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <button
                    onClick={() => handleLanguageChange(language.code)}
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-600' : ''
                    } block w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200`}
                  >
                    {language.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
} 