'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchTerm?: string;
  genre?: string;
}

const Pagination = ({ currentPage, totalPages, searchTerm,genre }: PaginationProps) => {
  const router = useRouter();

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return; 

    if (searchTerm) {
      router.push(`/search/${searchTerm}?page=${newPage}`);
    }else if(genre){
      router.push(`/top/${genre}?page=${newPage}`);
    } else {
      router.push(`/?page=${newPage}`);
    }
  };

  // Generate the pagination range
  const getPaginationRange = () => {
    const range = [];

    // Always show the first page
    range.push(1);

    // Add ellipsis if currentPage is far from the start
    if (currentPage > 3) {
      range.push("...");
    }

    // Add pages around the current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      range.push(i);
    }

    // Add ellipsis if currentPage is far from the end
    if (currentPage < totalPages - 2) {
      range.push("...");
    }

    // Always show the last page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  // Get the pagination range
  const paginationRange = getPaginationRange();

  if (totalPages <= 1) {
    return (
      <div className='px-4 py-2 flex justify-center w-fit items-center max-w-6xl mb-4 mx-auto rounded-lg text-white bg-amber-600'>
        1
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center my-8 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg ${
          currentPage === 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-amber-500 hover:bg-amber-600 text-white'
        }`}
      >
        Previous
      </button>

      {/* Pagination Numbers */}
      {paginationRange.map((item, index) => (
        <React.Fragment key={index}>
          {item === "..." ? (
            <span className="px-4 py-2">...</span>
          ) : (
            <button
              onClick={() => handlePageChange(item as number)}
              className={`px-4 py-2 rounded-lg  ${
                item === currentPage
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {item}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-amber-500 hover:bg-amber-600 text-white'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;