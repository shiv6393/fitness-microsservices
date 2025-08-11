// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import Statistics from './components/Statistics'
// import FeaturedJobs from './components/FeaturedJobs'
// import Home from './components/Home'
// import FindJob from "./page/FindJob";
// import './App.css'

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Hero />
//       <Statistics />
//       <FeaturedJobs />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/find-job" element={<FindJob />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App


// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import FindJob from "./page/FindJob";
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import FeaturedJobs from './components/FeaturedJobs';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />
      
      {/* Only show these on the home page */}
      {isHome && (
        <>
          <Hero />
          <Statistics />
          <FeaturedJobs />
        </>
      )}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/find-job" element={<FindJob />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
