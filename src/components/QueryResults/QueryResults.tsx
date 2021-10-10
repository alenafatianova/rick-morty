import { useQuery } from '@apollo/client'
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


export const QueryResults = () => {
    const resultQuery = gql`
        query {
            characters(filter: {name: "Morty"}) {
                results {
                 image
                 name
               }
               }
        }
    `
    const {loading, data, error} = useQuery(resultQuery)

    return (
        <div className="results-container">
            {error ? <p>Error... </p> : null}
            {!loading ? data.characters.results.map((character: CharacterType) => 
                  <img 
                    alt='character_image' 
                    src={character.image}  
                    className="single-character-image"
                />   
                ) : (<div>Loading... </div>)}
        </div>
    )
}
