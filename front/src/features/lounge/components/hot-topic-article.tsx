'use client'
import styled from 'styled-components'
import media from '@/common/styles/media'

const HotTopicArticleWrapper = styled.div`
  margin-top: 0.2em;
  display: flex;
  align-items: center;
  padding: 0.5em;
  border: 0.1em solid var(--lightOpacity10);
  border-radius: 0.3em;
  gap: 2em;
  background-color: ${({ theme }) => theme.color.mediumDark};
  ${media.medium`
    
  `};
  ${media.small`
    padding : 1.5em;
    font-size: 13px;
    height : 3em;
  `};
`
const HotTopicArticleCategory = styled.span`
  font-weight: 500;
  padding: 0.4em;
  border: 0.1em solid var(--main);
  border-radius: 0.5em;
  white-space: nowrap;
`

const HotTopicArticleIsImage = styled.span``
const HotTopicArticleContent = styled.span`
  max-width: 30em;
  white-space: nowrap; // 한 줄로 표시
  overflow: hidden; // 넘친 내용을 숨김
  text-overflow: ellipsis; // 넘친 내용을 '...'로 표시
`
const HotTopicArticleInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  white-space: nowrap;

  gap: 1em; // 요소들 간의 간격
`

const HotTopicArticleLikes = styled.span``
const HotTopicArticleCommentsNum = styled.span``
const HotTopicArticleViews = styled.span``

export default function HotTopicArticle() {
  const article1: {
    User: { id: string; nickname: string; image: string }
    content: string
    category: string
    likes: number
    commentsNum: number
    views: number
    createdAt: string
  } = {
    User: { id: 'elond', nickname: '마시마로', image: '/아아아' },
    content:
      '저는 00에 입사하고 싶은 00입니다. 그래서 정말로 제가 하고 싶은 건 말이에요 진자 너무 많아가지고 어떻게 해야할지 모를 정도로 저는',
    likes: 23,
    commentsNum: 30,
    category: '자유',
    views: 129000,
    createdAt: '2002-10-20',
  }
  return (
    <HotTopicArticleWrapper>
      <HotTopicArticleCategory>{article1.category}</HotTopicArticleCategory>
      <HotTopicArticleContent>{article1.content}</HotTopicArticleContent>
      <HotTopicArticleInfoWrapper>
        <HotTopicArticleLikes>{article1.likes}</HotTopicArticleLikes>
        <HotTopicArticleCommentsNum>
          {article1.commentsNum}
        </HotTopicArticleCommentsNum>
        <HotTopicArticleViews>
          조회수&nbsp;&nbsp;{article1.views}
        </HotTopicArticleViews>
      </HotTopicArticleInfoWrapper>
    </HotTopicArticleWrapper>
  )
}
