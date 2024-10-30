"use client";
import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import JobDetails from '../components/JobDetails';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import Pagination from '../components/Pagination';
import { jobsData } from './data/jobs';

export default function Home() {
  const [jobs, setJobs] = useState(jobsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const jobsPerPage = 5;

  useEffect(() => {
    let filtered = jobsData;
    
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedType !== "All") {
      filtered = filtered.filter(job => job.type === selectedType);
    }
    
    setJobs(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedType]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Job Listings</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <FilterDropdown value={selectedType} onChange={setSelectedType} />
        </div>

        <div className="space-y-4">
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onClick={(job) => setSelectedJob(job)}
              />
            ))
          ) : (
            <div className="text-center py-8 bg-white rounded-lg">
              <p className="text-gray-600">No jobs found matching your criteria</p>
            </div>
          )}
        </div>

        {jobs.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        <JobDetails
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      </div>
    </div>
  );
}