'use client'
import styled from 'styled-components'
import media from '@/common/styles/media'
import Image from 'next/image'
import Link from 'next/link'
import PictureIcon from '../../../../public/assets/picture-icon.svg'
import CommentsIcon from '../../../../public/assets/comments-icon.svg'
import LikeIcon from '../../../../public/assets/social-network-icon.svg'

const CommonTopicArticleWrapper = styled.div`
  margin-top: 0.2em;
  display: flex;
  align-items: center;
  padding: 0.5em;
  border: 0.1em solid var(--lightOpacity10);
  border-radius: 0.3em;
  gap: 1em;
  background-color: ${({ theme }) => theme.color.mediumDark};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.dark};
  }

  ${media.medium`
    
  `};
  ${media.small`
    padding : 1.5em;
    font-size: 13px;
    height : 1em;
  `};
`

const CommonTopicArticleContent = styled.span`
  max-width: 30em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CommonTopicArticleInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  white-space: nowrap;
  gap: 0.3em;
`
const StyledImage = styled(Image)`
  filter: invert(48%) sepia(96%) saturate(534%) hue-rotate(189deg)
    brightness(93%) contrast(89%);
  ${media.small`
    display : none;
  `};
`

const StyledCommentImage = styled(Image)`
  filter: invert(43%) sepia(100%) saturate(1494%) hue-rotate(342deg)
    brightness(95%) contrast(100%);
  ${media.small`
    display : none;
  `};
`

const CommonTopicArticleLikes = styled.span`
  ${media.small`
    display : none;
  `};
`
const CommonTopicArticleCommentsNum = styled.span`
  ${media.small`
    display : none;
  `};
`
const CommonTopicArticleViews = styled.span`
  margin-left: 0.2em;
`

export default function CommonTopicArticle() {
  const article1: {
    User: { id: string; nickname: string; image: string }
    id: number
    content: string
    category: string
    likes: number
    commentsNum: number
    views: number
    createdAt: string
  } = {
    User: { id: 'elond', nickname: '마시마로', image: '/아아아' },
    id: 3,
    content:
      '게시물 제목이 몇 글자까지 써질까요 알아맞춰 봅시다 코카콜라 맛있다 맛있으면 또먹지',
    likes: 23,
    commentsNum: 30,
    category: '자유',
    views: 3810000,
    createdAt: '2002-10-20',
  }
  const formatViews = (views: number) => {
    if (views >= 100000000) return (views / 100000000).toFixed(1) + '억'
    if (views >= 10000) return (views / 10000).toFixed(0) + '만'
    return views.toString()
  }

  return (
    <Link href={`/lounge/${article1.category}/${article1.id}`}>
      <CommonTopicArticleWrapper>
        <StyledImage src={PictureIcon} alt="pictureIcon" width={15} />
        <CommonTopicArticleContent>
          {article1.content}
        </CommonTopicArticleContent>
        <CommonTopicArticleInfoWrapper>
          <StyledImage src={LikeIcon} alt="likeIcon" width={15} />
          <CommonTopicArticleLikes>{article1.likes}</CommonTopicArticleLikes>
          <StyledCommentImage src={CommentsIcon} alt="commentIcon" width={15} />
          <CommonTopicArticleCommentsNum>
            {article1.commentsNum}
          </CommonTopicArticleCommentsNum>
          <CommonTopicArticleViews>
            {formatViews(article1.views)}
          </CommonTopicArticleViews>
        </CommonTopicArticleInfoWrapper>
      </CommonTopicArticleWrapper>
    </Link>
  )
}
