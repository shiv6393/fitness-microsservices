// src/page/FindJob.jsx
import React, { useState } from 'react';
import { Search, MapPin, Filter, Briefcase, Clock } from 'lucide-react';
import './FindJob.css';

const FindJob = () => {
  const [filters, setFilters] = useState({ jobType: '', experience: '', salary: '', location: '' });

  const jobs = [/*... same jobs array as before ...*/];

  return (
    <div className="findjob-container">
      <div className="findjob-header">
        <h1 className="findjob-title">Find Your Perfect Job</h1>
        <div className="findjob-search-bar">
          <div className="input-wrapper">
            <Search className="input-icon" />
            <input type="text" placeholder="Job title, keywords, or company" />
          </div>
          <div className="input-wrapper">
            <MapPin className="input-icon" />
            <input type="text" placeholder="Location" />
          </div>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="findjob-content">
        {/* Filters */}
        <aside className="filters">
          <div className="filters-header">
            <Filter className="icon" />
            <h2>Filters</h2>
          </div>

          <div className="filter-group">
            <label>Job Type</label>
            <select><option>All Types</option><option>Full-time</option></select>
          </div>

          <div className="filter-group">
            <label>Experience Level</label>
            <select><option>All Levels</option><option>Entry</option></select>
          </div>

          <div className="filter-group">
            <label>Salary Range</label>
            <select><option>Any Salary</option><option>$0 - $50k</option></select>
          </div>

          <button className="btn btn-primary">Apply Filters</button>
        </aside>

        {/* Jobs */}
        <section className="jobs">
          <div className="jobs-header">
            <p>{jobs.length} jobs found</p>
            <select>
              <option>Most Recent</option>
              <option>Salary High to Low</option>
            </select>
          </div>

          <div className="job-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-info">
                  <img src={job.logo} alt={job.company} />
                  <div className="job-meta">
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                    <div className="job-details">
                      <span><MapPin className="icon" /> {job.location}</span>
                      <span><Briefcase className="icon" /> {job.type}</span>
                      <span><Clock className="icon" /> {job.posted}</span>
                    </div>
                  </div>
                  <div className="job-salary">
                    <p>{job.salary}</p>
                    <small>{job.experience}</small>
                  </div>
                </div>
                <p className="job-desc">{job.description}</p>
                <div className="job-skills">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="badge">{skill}</span>
                  ))}
                </div>
                <div className="job-actions">
                  <button className="btn btn-link">View Details</button>
                  <div>
                    <button className="btn btn-secondary">Save Job</button>
                    <button className="btn btn-primary">Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FindJob;
