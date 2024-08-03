'use client'
import styled from 'styled-components'
import media from '@/common/styles/media'
import BoardDropdown from './board-dropdown'
import LoungeSearchBar from './lounge-search-bar'
import HotTopicSection from './hot-topic-section'
import CommonTopicSection from './common-topic-section'
const LoungeLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  max-width: 1280px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.back};
  color: ${({ theme }) => theme.color.text};
  padding-top: 12em;
  gap: 6em;
  ${media.medium`
    align-items: center;
  `}
  ${media.small`
    align-items: center;
  `};
`
const LoungeHeaderWrapper = styled.div`
  display: flex;
  gap: 1em;
`

const CommonTopicSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10em;
  flex-wrap: wrap;
`
export default function LoungeLayout() {
  return (
    <LoungeLayoutWrapper>
      <LoungeHeaderWrapper>
        <BoardDropdown />
        <LoungeSearchBar />
      </LoungeHeaderWrapper>
      <HotTopicSection />
      <CommonTopicSectionWrapper>
        <CommonTopicSection />
        <CommonTopicSection />
      </CommonTopicSectionWrapper>
      <CommonTopicSectionWrapper>
        <CommonTopicSection />
        <CommonTopicSection />
      </CommonTopicSectionWrapper>
    </LoungeLayoutWrapper>
  )
}
