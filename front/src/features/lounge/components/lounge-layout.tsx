'use client'
import styled from 'styled-components'
import BoardDropdown from './board-dropdown'
import LoungeSearchBar from './lounge-search-bar'
import HotTopicSection from './hot-topic-section'

const LoungeLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  max-width: 1280px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.back};
  color: ${({ theme }) => theme.color.light};
  padding-top: 12em;
  gap: 6em;
`
const LoungeHeaderWrapper = styled.div`
  display: flex;
  gap: 1em;
`
export default function LoungeLayout() {
  return (
    <LoungeLayoutWrapper>
      <LoungeHeaderWrapper>
        <BoardDropdown />
        <LoungeSearchBar />
      </LoungeHeaderWrapper>
      <HotTopicSection />
    </LoungeLayoutWrapper>
  )
}
