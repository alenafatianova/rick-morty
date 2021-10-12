import { useLazyQuery } from '@apollo/client'
import React, { useCallback, useEffect, useState } from 'react'
import { apolloQuery } from './components/ApiUtil'
import { Party } from './components/Party/Party'
import { QueryResults } from './components/QueryResults/QueryResults'
import { Search } from './components/Search/Search'
import _ from 'lodash'



export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [RickImage, setRickImage] = useState<string>()
  const [MortyImage, setMortyImage] = useState<string>()
  const [getCharacters, { loading, data, error }] = useLazyQuery(apolloQuery)

  const throttledGetCharacters = useCallback(
      _.throttle(getCharacters, 2000),
    [])

    useEffect(() => {
      if (searchQuery.length > 2) throttledGetCharacters({ variables: {searchQuery}}) 
    }, [searchQuery])

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
