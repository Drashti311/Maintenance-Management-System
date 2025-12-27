import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo-section">
          <div className="logo">⚙️</div>
          <h1 className="brand-name">GearGuard</h1>
        </div>
      </header>

      <main className="main-content">
        <div className="hero">
          <h2 className="title">
            <span className="gradient">GearGuard</span> Maintenance System
          </h2>
          <p className="description">
            A web-based Maintenance Management System to track company assets, manage maintenance requests, and assign tasks to teams efficiently.
          </p>
          
          <div className="buttons">
            <button className="btn btn-registration">
              Registration
            </button>
            <button className="btn btn-login">
              Employee Login
            </button>
            <button className="btn btn-maintenance">
              Technician Login
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
