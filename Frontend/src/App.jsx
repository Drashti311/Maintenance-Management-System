import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Registration from './components/Registration'
import LoginPage from './components/LoginPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigateToRegistration = () => {
    setCurrentPage('registration')
  }

  const handleNavigateToLogin = () => {
    setCurrentPage('login')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
  }

  return (
    <>
      {currentPage === 'home' && (
        <HomePage 
          onNavigateToRegistration={handleNavigateToRegistration}
          onNavigateToLogin={handleNavigateToLogin}
        />
      )}
      {currentPage === 'registration' && (
        <Registration onBackToHome={handleBackToHome} />
      )}
      {currentPage === 'login' && (
        <LoginPage onBack={handleBackToHome} />
      )}
    </>
  )
}

export default App