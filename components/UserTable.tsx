'use client'
import { User } from '@/types/user'
import { useState } from 'react'
import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Menu } from '@headlessui/react'

interface UserTableProps {
  users: User[]
  onEdit: (user: User) => void
  onDelete: (userId: string) => void
}

export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Last Active
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Joined Date
            </th>
            <th className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {user.lastActive}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {user.joinedDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-600 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => onEdit(user)}
                            className={`${
                              active ? 'bg-gray-100 dark:bg-gray-600' : ''
                            } group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full`}
                          >
                            <PencilIcon className="mr-3 h-5 w-5 text-gray-400" />
                            Edit
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => onDelete(user.id)}
                            className={`${
                              active ? 'bg-gray-100 dark:bg-gray-600' : ''
                            } group flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 w-full`}
                          >
                            <TrashIcon className="mr-3 h-5 w-5 text-red-400" />
                            Delete
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 