import { ApolloError } from '@apollo/client'
import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import './QueryResults.css'
import { CloseCircleTwoTone } from '@ant-design/icons'

type CharacterType = {
  id: string
  name: string
  image: string
  status?: string
  gender?: string
}

type QueryResultType = {
  loading: boolean
  error: ApolloError | undefined
  data: {
    characters: {
      results: CharacterType[]
    }
  }
  setMortyImage: (value: string) => void
  setRickImage: (value: string) => void
}

export const QueryResults: React.FC<QueryResultType> = ({
  loading,
  data,
  error,
  setRickImage,
  setMortyImage,
}) => {
  const [characters, setCharacters] = useState<CharacterType[]>([])

  useEffect(() => {
    if (data) setCharacters(data.characters.results)
    else if (error) setCharacters([])
  }, [data, error])

  const onDeleteHandler = (currentId: string) => {
    setCharacters(characters.filter((character) => character.id !== currentId))
  }

  const onAddPartyHandler = (character: CharacterType) => {
    character.name.match(/rick/i) && setRickImage(character.image)
    character.name.match(/morty/i) && setMortyImage(character.image)
  }

  return (
    <div className="results-container">
      {error ? (
        <div>Error {error.message} </div>
      ) : !loading ? (
        characters.map((character: CharacterType) => (
          <div className="image-container" key={character.id}>
            <CloseCircleTwoTone
              onClick={() => onDeleteHandler(character.id)}
              className="delete-icon"
              twoToneColor="FFFFFF"
            />
            <img
              alt="character_image"
              src={character.image}
              className="single-character-image"
              onClick={() => onAddPartyHandler(character)}
            />
          </div>
        ))
      ) : (
        <div>
          {' '}
          Loading... <Spin size="large" spinning={true} />{' '}
        </div>
      )}
    </div>
  )
}
