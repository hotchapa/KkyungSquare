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
  color: ${({ theme }) => theme.color.light};
  ${media.small`
    display : none;
  `};
`
const LoungeSearchBarBox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43.75em;
  height: 3em;
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.dark};
  border-radius: 0.5em;

  ${media.medium`
    width: 33.75em;
  `};
  ${media.small`
    display : none;
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
