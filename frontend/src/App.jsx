import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import FeaturedJobs from './components/FeaturedJobs'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Statistics />
      <FeaturedJobs />
    </div>
  )
}

export default App