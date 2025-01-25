import React from 'react'
import Card from './Card'
import { Media } from '@/types'

const Results = ({results}:{results: Media[]}) => {
  
  return (
    <div className='sm:grid sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto py-4 '>
      {results.map((result: any) => (
          <Card key={result.id} result={result} />  
      ))}
    </div>
  )
}

export default Results
