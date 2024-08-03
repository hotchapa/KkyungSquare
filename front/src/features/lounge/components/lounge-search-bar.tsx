'use client'
import { useState } from 'react'
import styled from 'styled-components'
import media from '@/common/styles/media'

const LoungeSearchBarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`
const LoungeSearchBarHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontsize.header2};
  color: ${({ theme }) => theme.color.text};
  ${media.small`
    font-size : 24px;
    padding : 1em;
  `};
`
const LoungeSearchBarBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 43.75em;
  height: 3em;
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.text};
  border-radius: 0.5em;
  padding: 0 1em;

  ${media.medium`
    width: 33.75em;
  `};
  ${media.small`
    width: 14.75em;
    height : 3em;
    padding : 1em;
  `};
`

const SearchInput = styled.input`
  flex: 1;
  height: 2em;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontsize.body1};
  &:focus {
    outline: none;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.color.text};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.dark} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.text};
  border: none;
  border-radius: 0.5em;
  margin-right: -0.5em;
  padding: 0.4em 0.8em;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.back};
  }
`

export default function LoungeSearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <LoungeSearchBarWrapper>
      <LoungeSearchBarHeader>
        <label htmlFor="search-input" className="sr-only">
          라운지 통합 검색
        </label>
      </LoungeSearchBarHeader>
      <LoungeSearchBarBox onSubmit={handleSearch}>
        <SearchInput
          id="search-input"
          type="text"
          placeholder="검색어를 입력하세요..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton type="submit">검색</SearchButton>
      </LoungeSearchBarBox>
    </LoungeSearchBarWrapper>
  )
}
