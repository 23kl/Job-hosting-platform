import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import styles from './JobCard.module.css'; 

const JobCard = ({ job, onClick }) => {
  return (
    <div
      onClick={() => onClick(job)}
      className={styles.jobCard}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-600">
              <Briefcase size={16} className="mr-2" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {job.type}
        </span>
      </div>
      <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>
      <button 
        className={styles.applyButton} 
        onClick={(e) => {
          e.stopPropagation();
       
        }}
        onMouseEnter={(e) => { 
       
          e.stopPropagation(); 
        }}
        onMouseLeave={(e) => {
        
          e.stopPropagation(); 
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
