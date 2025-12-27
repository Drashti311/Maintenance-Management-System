import React, { useState } from 'react'
import './Registration.css'

const Registration = ({ onBackToHome }) => {
  const [userType, setUserType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
    specialization: ''
  })

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value)
    // Reset form data when user type changes
    setFormData({
      name: '',
      email: '',
      password: '',
      department: '',
      specialization: ''
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { userType, ...formData })
    alert('Registration successful!')
  }

  return (
    <div className="registration-page" style={{ 
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
      <header className="registration-header">
        <div className="logo-section">
          <div className="logo">⚙️</div>
          <h1 className="brand-name">GearGuard</h1>
        </div>
      </header>
      <div className="registration-main">
        <div className="registration-container">
          <h1 className="registration-title">
            <span className="gradient">Registration</span>
          </h1>
          
          <form className="registration-form" onSubmit={handleSubmit}>
            {/* User Type Dropdown */}
            <div className="form-group">
              <label className="form-label">
                User Type <span className="required">*</span>
              </label>
              <select
                className="form-select"
                value={userType}
                onChange={handleUserTypeChange}
                required
              >
                <option value="">Select User Type</option>
                <option value="employee">Employee</option>
                <option value="technician">Technician</option>
              </select>
            </div>

            {/* Common Fields - Name and Email */}
            {userType && (
              <>
                <div className="form-group">
                  <label className="form-label">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email ID <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}

            {/* Employee Specific Fields */}
            {userType === 'employee' && (
              <>
                <div className="form-group">
                  <label className="form-label">
                    Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Department <span className="required">*</span>
                  </label>
                  <select
                    name="department"
                    className="form-select"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="production">Production</option>
                    <option value="it">IT</option>
                    <option value="administrator">Administrator</option>
                  </select>
                </div>
              </>
            )}

            {/* Technician Specific Fields */}
            {userType === 'technician' && (
              <div className="form-group">
                <label className="form-label">
                  Specialization <span className="required">*</span>
                </label>
                <select
                  name="specialization"
                  className="form-select"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Specialization</option>
                  <option value="mechanical">Mechanical</option>
                  <option value="it">IT</option>
                  <option value="electrical">Electrical</option>
                  <option value="ec">EC</option>
                  <option value="vehicle">Vehicle</option>
                </select>
              </div>
            )}

            {userType && (
              <button type="submit" className="btn-submit">
                Register
              </button>
            )}
          </form>

          <div className="back-link">
            <button className="btn-back" onClick={onBackToHome}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration