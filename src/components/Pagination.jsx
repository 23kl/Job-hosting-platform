import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination-container">
      <div className="pagination-buttons">
        <button
          className="pagination-button"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={20} className="mr-1" />
          Previous
        </button>
        
        <span className="pagination-page-info">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          className="pagination-button"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
