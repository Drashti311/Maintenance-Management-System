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
            Streamline your equipment maintenance with intelligent tracking and automated scheduling.
          </p>
          
          <div className="buttons">
            <button className="btn btn-registration">
              Registration
            </button>
            <button className="btn btn-login">
              User Login
            </button>
            <button className="btn btn-maintenance">
              Maintenance Login
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
