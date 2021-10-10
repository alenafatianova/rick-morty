import React from 'react'
import styled from 'styled-components';


export const Party = () => {
    return (
        <div className="party-container">
            <PartyTitle> party </PartyTitle>
            <PartyBlocks> 
                <AvatarContainer>
                <AvatarBlock> Rick </AvatarBlock> 
                <CharacterImage/> 
                </AvatarContainer>

                <AvatarContainer>
                <AvatarBlock> Morty </AvatarBlock> 
                <CharacterImage/> 
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
color: #FFFF;
text-transform: uppercase;
`
const CharacterImage = styled.div`
width: 180px;
height: 220px;
background-color: #DADADA;
margin: 0 30px 142px 30px;
`