'use client'
import styled from 'styled-components'
import media from '@/common/styles/media'
import HotTopicArticle from './hot-topic-article'

const HotTopicSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex; */
`
const HotTopicSectionHeader = styled.h1`
  font-weight: bolder;
  font-size: ${({ theme }) => theme.fontsize.body1};
  color: ${({ theme }) => theme.color.dark};
`

const HotTopicSectionHeadBar = styled.section`
  display: flex;
  padding: 0.9em;
  align-items: center;
  width: 22.75em;
  background-color: ${({ theme }) => theme.color.sub};
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  ${media.medium`
    width: 20.75em;
  `};
  ${media.small`
    width: 15.75em;
    padding: 1em;
    margin-left : 1em;
    font-size: 16px;
  `};
`

const HotTopicSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 75em;
  border-top: 0.3em solid var(--main);
  color: ${({ theme }) => theme.color.text};
  ${media.medium`
    width: 53.75em;
    
  `};
  ${media.small`
    width: 100vw;
  `};
`

export default function HotTopicSection() {
  return (
    <HotTopicSectionWrapper>
      <HotTopicSectionHeadBar>
        <HotTopicSectionHeader>HOT TOPIC</HotTopicSectionHeader>
      </HotTopicSectionHeadBar>
      <HotTopicSectionBox>
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
        <HotTopicArticle />
      </HotTopicSectionBox>
    </HotTopicSectionWrapper>
  )
}
