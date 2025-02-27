'use client'
import { useState } from 'react'
import { User } from '@/types/user'
import UserTable from '@/components/UserTable'
import UserForm from '@/components/UserForm'
import { PlusIcon } from '@heroicons/react/24/outline'

// Demo data
const initialUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    lastActive: '2 hours ago',
    joinedDate: 'Jan 7, 2024',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'manager',
    status: 'active',
    lastActive: '5 hours ago',
    joinedDate: 'Jan 5, 2024',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'user',
    status: 'inactive',
    lastActive: '2 days ago',
    joinedDate: 'Dec 15, 2023',
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    role: 'manager',
    status: 'active',
    lastActive: '1 hour ago',
    joinedDate: 'Jan 1, 2024',
  },
  {
    id: '5',
    name: 'Tom Brown',
    email: 'tom@example.com',
    role: 'user',
    status: 'active',
    lastActive: '3 hours ago',
    joinedDate: 'Jan 3, 2024',
  },
]

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | undefined>()

  const handleAddUser = (userData: Partial<User>) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      lastActive: 'Just now',
      joinedDate: new Date().toLocaleDateString(),
      ...userData,
    } as User
    setUsers([...users, newUser])
  }

  const handleEditUser = (userData: Partial<User>) => {
    setUsers(users.map((user) => (user.id === userData.id ? { ...user, ...userData } : user)))
  }

  const handleDeleteUser = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((user) => user.id !== userId))
    }
  }

  const openAddForm = () => {
    setEditingUser(undefined)
    setIsFormOpen(true)
  }

  const openEditForm = (user: User) => {
    setEditingUser(user)
    setIsFormOpen(true)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Users</h1>
        <button
          onClick={openAddForm}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add User
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <UserTable users={users} onEdit={openEditForm} onDelete={handleDeleteUser} />
      </div>

      <UserForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={editingUser ? handleEditUser : handleAddUser}
        user={editingUser}
        title={editingUser ? 'Edit User' : 'Add User'}
      />
    </div>
  )
} 