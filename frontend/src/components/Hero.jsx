import React, { useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [jobSearch, setJobSearch] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', jobSearch, 'in', location)
  }

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Find a job that suits<br />
              your interest & skills.
            </h1>
            <p className="hero-subtitle">
              Find the Perfect Jobs, Employment & Career Opportunities.
            </p>
            
            <form className="hero-search" onSubmit={handleSearch}>
              <div className="search-group">
                <div className="search-field">
                  <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="#64748B" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="#64748B" strokeWidth="2"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Job Title or Keyword"
                    value={jobSearch}
                    onChange={(e) => setJobSearch(e.target.value)}
                    className="search-input"
                  />
                </div>
                
                <div className="search-field">
                  <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#64748B" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#64748B" strokeWidth="2"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Your Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="search-input"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary search-btn">
                  Find Job
                </button>
              </div>
            </form>
            
            <div className="popular-searches">
              <span className="popular-label">Popular Searches:</span>
              <div className="search-tags">
                <span className="search-tag">Designer</span>
                <span className="search-tag">Programming</span>
                <span className="search-tag">Digital Marketing</span>
                <span className="search-tag">Video</span>
                <span className="search-tag">Animation</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Professional working on laptop" 
                className="hero-img"
              />
              <div className="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero