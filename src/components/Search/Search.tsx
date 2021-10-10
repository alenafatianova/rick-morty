import React, { ChangeEvent } from "react";
import { Input } from "antd";
import './Search.css'

type SearchType = {
  setSearchQuery: (value: string) => void
  searchQuery: string
}

export const Search: React.FC<SearchType> = ({searchQuery, setSearchQuery}) => {

  const searchingHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
  }

  return (
    <div className='input-container'>
      <Input 
        className="search-input" 
        placeholder={"Rick or Morty?"}  
        value={searchQuery}
        onChange={searchingHandle}
      />
    </div>
  )
}

