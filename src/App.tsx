import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { QueryResults } from './components/QueryResults/QueryResults';
import { Search } from './components/Search/Search';


export const App = () => {

  const [searchQuery, setSearchQuery] = useState<string>("")

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
    const {loading, data, error} = useQuery(resultQuery)


  return (
    <div className="App">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="query-block-container">
          <QueryResults loading={loading} error={error} data={data} />
      </div>
    </div>
  );
}
