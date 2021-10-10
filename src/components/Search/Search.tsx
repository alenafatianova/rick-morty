import React from "react";
import { Input } from "antd";
import './Search.css'
import { QueryResults } from "../QueryResults/QueryResults";

export const Search = () => {
  return (
    <div className='input-container'>
      <Input className="search-input" placeholder={"Rick or Morty?"}  />
      <div className="query-block-container">
          <QueryResults />
      </div>
    </div>
  )
}

