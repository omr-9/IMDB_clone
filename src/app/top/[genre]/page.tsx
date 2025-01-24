import Results from '@/components/Results';
import React from 'react'
const API_KEY = process.env.API_KEY
const  page =  async ({params}:{params:any }) => {
  const {genre} = params
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'rated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
  const data = await res.json();
  if(!res.ok) throw new Error("Faild to fetch data");
  const results = data.results
// console.log(results)

  return (
    <div>
      <Results results={results} />
    </div>
  )
}

export default page
