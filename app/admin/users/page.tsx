'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, User, AlertTriangle } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { getAllUsers, updateUserRole, WikiUser, UserRole } from '@/lib/supabase'

export default function UsersAdminPage() {
  const { user, loading: authLoading } = useAuth()
  const [users, setUsers] = useState<WikiUser[]>([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)

  useEffect(() => {
    if (user && user.role === 'admin') {
      loadUsers()
    }
  }, [user])

  const loadUsers = async () => {
    try {
      const data = await getAllUsers()
      setUsers(data || [])
    } catch (error) {
      console.error('Error loading users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    setUpdating(userId)
    try {
      await updateUserRole(userId, newRole)
      await loadUsers()
    } catch (error) {
      console.error('Error updating role:', error)
    } finally {
      setUpdating(null)
    }
  }

  if (authLoading) {
    return (
      <div className="wiki-article max-w-4xl mx-auto text-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="wiki-article max-w-md mx-auto text-center">
        <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
        <h1>Access Denied</h1>
        <p className="text-wiki-text-muted mb-6">
          You need admin privileges to manage users.
        </p>
        <Link 
          href="/"
          className="inline-block bg-wiki-accent text-white py-2 px-6 rounded-lg hover:bg-wiki-accent-hover transition-colors no-underline"
        >
          Go Home
        </Link>
      </div>
    )
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Shield className="w-4 h-4 text-red-600" />
      case 'moderator':
        return <Shield className="w-4 h-4 text-blue-600" />
      default:
        return <User className="w-4 h-4 text-gray-600" />
    }
  }

  return (
    <div className="wiki-article max-w-4xl mx-auto">
      <h1>User Management</h1>
      
      <p className="text-wiki-text-muted mb-6">
        Manage user roles and permissions.
      </p>

      <div className="mb-6 p-4 bg-wiki-sidebar rounded-lg">
        <h3 className="font-medium mb-2">Role Permissions</h3>
        <ul className="text-sm text-wiki-text-muted space-y-1">
          <li><strong>Admin:</strong> Can manage users, review edits, access all settings</li>
          <li><strong>Moderator:</strong> Can review and approve/reject edit suggestions</li>
          <li><strong>User:</strong> Can suggest edits to articles</li>
        </ul>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p>Loading users...</p>
        </div>
      ) : (
        <div className="border border-wiki-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-wiki-sidebar">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium">User</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Email</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Role</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Joined</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t border-wiki-border">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {getRoleIcon(u.role)}
                      <span className="font-medium">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-wiki-text-muted">
                    {u.email}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded capitalize ${
                      u.role === 'admin' ? 'bg-red-100 text-red-800' :
                      u.role === 'moderator' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-wiki-text-muted">
                    {new Date(u.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    {u.id !== user.id ? (
                      <select
                        value={u.role}
                        onChange={(e) => handleRoleChange(u.id, e.target.value as UserRole)}
                        disabled={updating === u.id}
                        className="text-sm border border-wiki-border rounded px-2 py-1 disabled:opacity-50"
                      >
                        <option value="user">User</option>
                        <option value="moderator">Moderator</option>
                        <option value="admin">Admin</option>
                      </select>
                    ) : (
                      <span className="text-xs text-wiki-text-muted">(You)</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6">
        <Link 
          href="/admin"
          className="text-wiki-accent hover:underline"
        >
          ← Back to Edit Review
        </Link>
      </div>
    </div>
  )
}
