'use client'
import styled from 'styled-components'
import Image from 'next/image'
import ping from '../../../../public/assets/ping.png'
import LikeIcon from '../../../../public/assets/social-network-icon.svg'
import CommentsIcon from '../../../../public/assets/comments-icon.svg'
import media from '@/common/styles/media'
import CommonTopicArticle from './common-topic-article'
const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.back};
  color: ${({ theme }) => theme.color.text};
  padding: 12em;
  /* font-size: ${({ theme }) => theme.fontsize.body1}; */
`

const BoardHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontsize.header1};
  font-weight: bolder;
`

const BoardArticleSection = styled.section`
  padding: 6em;
`

export default function Board() {
  return (
    <BoardWrapper>
      <BoardHeader>게시판</BoardHeader>
      <BoardArticleSection>
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
        <CommonTopicArticle />
      </BoardArticleSection>
    </BoardWrapper>
  )
}
