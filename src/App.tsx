import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { result } from './components/ApiUtil'
import { Party } from './components/Party/Party'
import { QueryResults } from './components/QueryResults/QueryResults'
import { Search } from './components/Search/Search'



export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [RickImage, setRickImage] = useState<string>()
  const [MortyImage, setMortyImage] = useState<string>()
  const { loading, data, error } = useQuery(result(searchQuery), {skip: searchQuery.length < 3 })

  return (
    <div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>
        <QueryResults
          loading={loading}
          error={error}
          data={data}
          setRickImage={setRickImage}
          setMortyImage={setMortyImage}
        />
      </div>
      <div>
        <Party RickImage={RickImage} MortyImage={MortyImage} />
      </div>
    </div>
  )
}
