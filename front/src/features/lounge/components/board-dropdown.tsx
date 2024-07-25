'use client'
import { ReactEventHandler, useState } from 'react'
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
  color: ${({ theme }) => theme.color.text};
  ${media.small`
    font-size : 24px;
    padding : 1em;
  `};
`
const BoardDropdownBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23.25em;
  height: 3em;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.text};
  border-radius: 0.5em;
  cursor: pointer;
  position: relative;
  ${media.medium`
    width: 18.75em;
  `};
  ${media.small`
    width: 14.75em;
    height : 3em;
    padding : 1em;
  `};
`
const DropDownButton = styled.span`
  display: inline-block;
  position: relative;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid white;
  margin-right: 1em;
`
const DropDownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 0.5em;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
`
const DropDownSelectText = styled.ul`
  padding: 1em;
  font-size: ${({ theme }) => theme.fontsize.body1};
`

const DropDownItem = styled.li`
  padding: 1em;
  font-size: ${({ theme }) => theme.fontsize.body1};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.mediumDark};
  }
`
const boards: string[] = [
  '자유게시판',
  '음식게시판',
  '스포츠게시판',
  '영화게시판',
]

export default function BoardDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedBoard, setSelectedBoard] = useState<string>('게시판 선택')

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen)
  }

  const handleSelectBoard = (board: string) => {
    setSelectedBoard(board)
    setIsOpen(false)
  }

  return (
    <BoardDropdownWrapper>
      <BoardDropdownHeader>게시판 목록</BoardDropdownHeader>
      <BoardDropdownBox onClick={toggleDropdown}>
        <DropDownSelectText> {selectedBoard}</DropDownSelectText>
        <DropDownButton />
        {isOpen && (
          <DropDownMenu>
            {boards.map((board, index) => (
              <DropDownItem
                key={index}
                onClick={() => handleSelectBoard(board)}
              >
                {board}
              </DropDownItem>
            ))}
          </DropDownMenu>
        )}
      </BoardDropdownBox>
    </BoardDropdownWrapper>
  )
}
