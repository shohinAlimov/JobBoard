import React from 'react';
import { Link } from 'react-router-dom';

interface JobItem {
  id: string;
  title: string;
  company: string;
  location: string;
}

const FeaturedJobs: React.FC = () => {
  // Mock data, replace with real data from backend later
  const jobs: JobItem[] = [
    { id: '1', title: 'Frontend Engineer', company: 'TechCorp', location: 'New York, NY' },
    { id: '2', title: 'Full Stack Developer', company: 'DevStudio', location: 'Remote' },
    { id: '3', title: 'Data Scientist', company: 'DataWorks', location: 'Chicago, IL' },
  ];

  return (
    <div className="featured-jobs">
      {jobs.map((job) => (
        <div key={job.id} className="featured-jobs__card">
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <Link className='btn btn--primary' to={`/job/${job.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedJobs;
