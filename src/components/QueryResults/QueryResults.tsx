import { useQuery } from '@apollo/client'
import { Spin } from 'antd'
import gql from 'graphql-tag'
import React from 'react'
import './QueryResults.css'

type CharacterType = {
    id: string
    name: string
    image: string
    status?: string
    gender?: string
}

type QueryResultType = {
    searchQuery: string
    setSearchQuery: (value: string) => void
}

export const QueryResults: React.FC<QueryResultType> = ({searchQuery, setSearchQuery}) => {
    
    const resultQuery = gql`
        query getImageByName {
            characters(filter: {name: "${searchQuery}"}) {
                results {
                 image
                 name
               }
               }
        }
    `
    console.log(resultQuery)
    const {loading, data, error} = useQuery(resultQuery)

    return (
        <div className="results-container">
            {error ? <p>Error... </p> : null}
            {!loading ? data.characters.results.map((character: CharacterType) => 
                  <img 
                    key={character.id}
                    alt='character_image' 
                    src={character.image}  
                    className="single-character-image"
                />   
                ) : (<div> Loading... <Spin size="default" spinning={true} /> </div>)}
        </div>
    )
}
