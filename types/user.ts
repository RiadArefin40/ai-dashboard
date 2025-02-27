export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'manager'
  status: 'active' | 'inactive'
  lastActive: string
  joinedDate: string
  avatar?: string
} 