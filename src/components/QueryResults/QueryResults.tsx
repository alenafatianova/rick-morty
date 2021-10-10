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
   data: any
}

export const QueryResults: React.FC<QueryResultType> = ({loading, data, error}) => {
    console.log(data)
    const [characters, setCharacters] = useState<CharacterType[]>([])
    
    useEffect(() => {
        if (data) setCharacters(data.characters.results)
    }, [data])

    const onDeleteHandler = (currentId: string) => {
        setCharacters(characters.filter(character => character.id !== currentId))
    }

    return (
        <div className="results-container">
            {!loading ? !error && characters.map((character: CharacterType) => 
            <div className="image-container"  key={character.id}>
                <CloseCircleTwoTone  onClick={() => onDeleteHandler(character.id)} className="delete-icon" twoToneColor="FFFFFF" />
                  <img 
                   
                    alt='character_image' 
                    src={character.image}  
                    className="single-character-image"
                />   
            </div>
            
                ) : (<div> Loading... <Spin size="default" spinning={true} /> </div>)}
        </div>
    )
}
