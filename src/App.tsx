import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Party } from './components/Party/Party';
import { QueryResults } from './components/QueryResults/QueryResults';
import { Search } from './components/Search/Search';


export const App = () => {

  const [searchQuery, setSearchQuery] = useState<string>("")
  const [RickImage, setRickImage] = useState<string>("Rick")
  const [MortyImage, setMortyImage] = useState<string>("Morty")

  const resultQuery = gql`
        query getImageByName {
            characters(filter: {name: "${searchQuery}"}) {
                results {
                 image
                 name
                 id
               }
               }
        }
    `
    const {loading, data, error} =  useQuery(resultQuery, {skip: searchQuery.length < 3})


  return (
    <div className="App">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="query-block-container">
          <QueryResults 
            loading={loading} 
            error={error} 
            data={data} 
            setRickImage={setRickImage}
            setMortyImage={setMortyImage}
          />
      </div>
      <div className="party-block-container">
        <Party RickImage={RickImage} MortyImage={MortyImage} />
      </div>
    </div>
  );
}
