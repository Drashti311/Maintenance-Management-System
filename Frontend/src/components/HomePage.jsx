import React from 'react'
import './HomePage.css'

const HomePage = ({ onNavigateToRegistration, onNavigateToLogin }) => {
  return (
    <div className="homepage" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0
    }}>
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
            <button className="btn btn-registration" onClick={onNavigateToRegistration}>
              Registration
            </button>
            <button className="btn btn-login" onClick={onNavigateToLogin}>
              User Login
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage