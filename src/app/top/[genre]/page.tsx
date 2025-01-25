import Results from '@/components/Results';
import { getAllMovies } from '@/lib/api';
import React from 'react'
const API_KEY = process.env.API_KEY
const  page =  async ({params}:{params:any }) => {
  const {genre} = params
  const res = await getAllMovies(1,genre)
  const {results,total_pages:totalPages} = res
console.log(results,totalPages)

  return (
    <div>
      <Results results={results} />
    </div>
  )
}

export default page
