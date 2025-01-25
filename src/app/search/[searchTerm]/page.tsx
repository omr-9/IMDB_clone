import Pagination from '@/components/Pagination';
import Results from '@/components/Results';
import { getAllMovies } from '@/lib/api';
import React from 'react';

const SearchPage = async ({ params, searchParams }: any) => {
  const { searchTerm } = params;
  const page = searchParams?.page || 1; 

  const res = await getAllMovies(Number(page), searchTerm);
  const { results, total_pages: totalPages } = res;

  return (
    <div>
      {!results || results.length === 0 ? (
        <h1 className="text-3xl font-bold my-10 text-center">No results found for &quot;{decodeURIComponent(searchTerm)}&quot;</h1>
      ) : (
        <>
          <h1 className="max-w-6xl flex justify-center mx-auto py-2 text-lg font-semibold">
          Search results for &quot;{decodeURIComponent(searchTerm)}&quot;
          </h1>
          <Results results={results} />
          <Pagination currentPage={Number(page)} totalPages={totalPages} searchTerm={searchTerm} />
        </>
      )}
    </div>
  );
};

export default SearchPage;