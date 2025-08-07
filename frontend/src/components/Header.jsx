import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <div className="logo">
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="14" rx="2" fill="#3B82F6"/>
                  <path d="M7 8h6v2H7V8zM7 12h4v2H7v-2z" fill="white"/>
                </svg>
              </div>
              <span className="logo-text">Jobpilot</span>
            </div>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <a href="#home" className="nav-link active">Home</a>
            <a href="#find-job" className="nav-link">Find Job</a>
            <a href="#employers" className="nav-link">Employers</a>
            <a href="#candidates" className="nav-link">Candidates</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#pages" className="nav-link">Pages</a>
          </div>
          
          <div className="nav-actions">
            <button className="btn btn-white">Create Account</button>
            <button className="btn btn-primary">Log In</button>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header