import React from 'react'
import styled from 'styled-components'

type RickType = {
  RickImage: string
  MortyImage: string
}

export const Party: React.FC<RickType> = ({ RickImage, MortyImage }) => {
  return (
    <div className="party-container">
      <PartyTitle> party </PartyTitle>
      <PartyBlocks>
        <AvatarContainer>
          <AvatarBlock> Rick </AvatarBlock>
          <CharacterImage src={RickImage} />
        </AvatarContainer>

        <AvatarContainer>
          <AvatarBlock> Morty </AvatarBlock>
          <CharacterImage src={MortyImage} />
        </AvatarContainer>
      </PartyBlocks>
    </div>
  )
}

const PartyTitle = styled.h5`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
  text-transform: uppercase;
`
const PartyBlocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const AvatarContainer = styled.div`
  position: relative;
`

const AvatarBlock = styled.p`
  position: absolute;
  font-size: 24px;
  left: 80px;
  top: 140px;
  color: #ffff;
  text-transform: uppercase;
`
const CharacterImage = styled.img`
  width: 180px;
  height: 220px;
  background-color: #dadada;
  margin: 0 30px 142px 30px;
`
