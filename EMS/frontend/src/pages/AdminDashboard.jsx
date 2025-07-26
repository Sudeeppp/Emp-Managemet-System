import React from 'react'
import { useAuth } from '../context/authContext'

function AdminDashboard() {
  const { user } = useAuth()
  return (
    <div>AdminDashboard {user && user.name}</div>
  )
}

export default AdminDashboard