'use client'
import styled from 'styled-components'
import media from '@/common/styles/media'

const BoardDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`
const BoardDropdownHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontsize.header2};
  color: ${({ theme }) => theme.color.light};
  ${media.small`
    font-size : 24px;
    padding : 1em;
  `};
`
const BoardDropdownBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23.25em;
  height: 3em;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.light};
  border-radius: 0.5em;
  ${media.medium`
    width: 18.75em;
    
  `};
  ${media.small`
    width: 34.75em;
    height : 5em;
    padding : 1em;
  `};
`
export default function BoardDropdown() {
  return (
    <BoardDropdownWrapper>
      <BoardDropdownHeader>게시판 목록</BoardDropdownHeader>
      <BoardDropdownBox></BoardDropdownBox>
    </BoardDropdownWrapper>
  )
}
