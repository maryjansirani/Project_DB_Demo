import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css' // Assuming you have a CSS file for styling
export default function Dashboard() {
  return (
    <div>
      <div className="dashboard-header">
        <header>
          <h1>Dashboard</h1>
        </header>
      </div>
      <nav className="dashboard-nav">
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </div>
  )
}
