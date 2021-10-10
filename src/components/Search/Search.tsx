import React from "react";
import { Input } from "antd";
import './Search.css'

type SearchType = {
  setSearchQuery: (value: string) => void
  searchQuery: string
}

export const Search: React.FC<SearchType> = ({searchQuery, setSearchQuery}) => {

  const searchingHandle = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setSearchQuery(value)
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

