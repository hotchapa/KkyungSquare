'use client'
import styled from 'styled-components'
import media from '@/common/styles/media'
import CommonTopicArticle from './common-topic-article'

const CommonTopicSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  background-color: ${({ theme }) => theme.color.back};
  color: ${({ theme }) => theme.color.text};
`
const CommonTopicSectionHeaderWrapper = styled.div`
  display: flex;
  padding: 0.7em;
  align-items: center;
  justify-content: space-between;
  gap: 15em;
  ${media.medium`
  `};
  ${media.small`
    padding: 1em;
    font-size: 16px;
  `};
`

const CommonTopicSectionHeader = styled.h1`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontsize.header2};
  color: ${({ theme }) => theme.color.text};
  ${media.small`
    padding : 0.25em;
  `};
`
const CommonTopicSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 32.5em;
  border-top: 0.3em solid var(--main);
  color: ${({ theme }) => theme.color.text};
  ${media.medium`
    width: 53.75em;
    
  `};
  ${media.small`
    width: 100vw;
  `};
`
const CommonTopicSectionLink = styled.div``

export default function CommonTopicSection() {
  return (
    <CommonTopicSectionWrapper>
      <CommonTopicSectionHeaderWrapper>
        <CommonTopicSectionHeader>게시판 이름</CommonTopicSectionHeader>
        <CommonTopicSectionLink>보러가기</CommonTopicSectionLink>
      </CommonTopicSectionHeaderWrapper>
      <CommonTopicSectionBox>
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
      </CommonTopicSectionBox>
    </CommonTopicSectionWrapper>
  )
}
