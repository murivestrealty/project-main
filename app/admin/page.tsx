import type { Metadata } from 'next'
import AdminDashboard from '../../src/components/dashboard/AdminDashboard'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Murivest Realty Group',
  description: 'Administrative dashboard for managing Murivest Realty Group operations, customers, and business processes.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return <AdminDashboard />
}