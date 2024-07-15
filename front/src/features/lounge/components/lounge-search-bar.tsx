'use client'
import styled from 'styled-components'
import media from '@/common/styles/media'

const LoungeSearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`
const LoungeSearchBarHeader = styled.h1`
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
const LoungeSearchBarBox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43.75em;
  height: 3em;
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.text};
  border-radius: 0.5em;

  ${media.medium`
    width: 33.75em;
  `};
  ${media.small`
    width: 34.75em;
    height : 5em;
    padding : 1em;
  `};
`

export default function LoungeSearchBar() {
  return (
    <LoungeSearchBarWrapper>
      <LoungeSearchBarHeader>라운지 통합 검색</LoungeSearchBarHeader>
      <LoungeSearchBarBox></LoungeSearchBarBox>
    </LoungeSearchBarWrapper>
  )
}
