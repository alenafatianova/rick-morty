import { ApolloError } from '@apollo/client'
import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CloseCircleTwoTone } from '@ant-design/icons'

type CharacterType = {
  id: string
  name: string
  image: string
  status?: string
  gender?: string
}

type QueryResultType = {
  loading: boolean | undefined
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
    <ResultsContainer>
      {error ? (
        <div>Error {error.message} </div>
      ) : !loading ? (
        characters.map((character: CharacterType) => (
          <ImageContainer key={character.id}>
            <CloseCircleTwoTone
              onClick={() => onDeleteHandler(character.id)}
              style={{
                position: "absolute",
                left: "170px",
                top: "10px",
                fontSize: "30px",
                opacity: "0.7"
            }}
              twoToneColor="FFFFFF"
            />
            <SingleCharacterImage
              alt="character_image"
              src={character.image}
              onClick={() => onAddPartyHandler(character)}
            />
          </ImageContainer>
        ))
      ) : (
        <div>
          Loading... <Spin size="large" spinning={true} />{' '}
        </div>
      )}
    </ResultsContainer>
  )
}

const SingleCharacterImage = styled.img`
    width: 180px;
    height: 220px;
    padding: 0 30px 30px 30px;
`
const ImageContainer = styled.div`
    position: relative;
`
const ResultsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: 195px;
    margin-left: 195px;
`
