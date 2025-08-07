import React from 'react'
import './FeaturedJobs.css'

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior UX Designer',
      company: 'Segment',
      type: 'Full-time',
      salary: '$20K-25K',
      remaining: '2 Days Remaining',
      logo: 'S',
      logoColor: '#10B981'
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Facebook',
      type: 'Full-time',
      salary: '$100-$120',
      remaining: '5 Days Remaining',
      logo: 'f',
      logoColor: '#1877F2'
    },
    {
      id: 3,
      title: 'Junior Graphic Designer',
      company: 'Google',
      type: 'Part-time',
      salary: '$80K-$100K',
      remaining: '3 Days Remaining',
      logo: 'G',
      logoColor: '#4285F4'
    },
    {
      id: 4,
      title: 'Product Designer',
      company: 'Adobe',
      type: 'Part-time',
      salary: '$100K-$160K',
      remaining: '2 Days Remaining',
      logo: 'A',
      logoColor: '#FF0000'
    }
  ]

  return (
    <section className="featured-jobs section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured job</h2>
          <a href="#" className="view-all">
            View All 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        
        <div className="jobs-list">
          {jobs.map((job, index) => (
            <div key={job.id} className={`job-card ${index === 0 ? 'job-card-featured' : ''}`}>
              <div className="job-header">
                <div className="job-logo" style={{ backgroundColor: job.logoColor }}>
                  {job.logo}
                </div>
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-company">{job.company}</span>
                    <span className="job-separator">•</span>
                    <span className="job-type">{job.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="job-details">
                <div className="job-salary">{job.salary}</div>
                <div className="job-remaining">{job.remaining}</div>
              </div>
              
              <div className="job-actions">
                <button className="btn-bookmark">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn btn-primary apply-btn">
                  Apply Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs