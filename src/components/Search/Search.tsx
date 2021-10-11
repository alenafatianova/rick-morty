import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'


type SearchType = {
  setSearchQuery: (value: string) => void
  searchQuery: string
}

export const Search: React.FC<SearchType> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const searchingHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
  }

  return (
    <InputContainer>
      <Input
        style={{
          height: "80px",
          width: '810px',
          fontSize: '30px',
          paddingLeft: '27px',
          fontWeight: 200,
          marginTop: '141px',
          marginBottom: '30px',
          border: '1px solid #a0a0a0'
        }}
        placeholder={'Rick or Morty?'}
        value={searchQuery}
        onChange={searchingHandle}
      />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
