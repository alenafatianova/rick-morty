import React, { useState } from 'react';
import './App.css';
import { QueryResults } from './components/QueryResults/QueryResults';
import { Search } from './components/Search/Search';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  return (
    <div className="App">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="query-block-container">
          <QueryResults searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
}
