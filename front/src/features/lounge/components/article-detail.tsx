'use client'
import styled from 'styled-components'
import BoardDropdown from './board-dropdown'
import LoungeSearchBar from './lounge-search-bar'
import Image from 'next/image'
import ping from '../../../../public/assets/ping.png'
import LikeIcon from '../../../../public/assets/social-network-icon.svg'
import CommentsIcon from '../../../../public/assets/comments-icon.svg'
import media from '@/common/styles/media'

const ArticleDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 80vw;
  background-color: ${({ theme }) => theme.color.back};
  color: ${({ theme }) => theme.color.text};
  padding: 12em;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontsize.body1};
`

const LoungeHeaderWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`

const ArticleContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.text};
  padding: 2em;
  border-radius: 0.5em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 70em;
  width: 70em;

  ${media.medium`
    width: 40em;
  `};
  ${media.small`
    width: 30em;
  `};
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
`

const UserImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const UserNickname = styled.span`
  font-weight: bold;
`

const MetaData = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
  font-size: 0.9em;
  color: ${({ theme }) => theme.color.text};
`

const MetaDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
`

const ArticleTitle = styled.h2`
  margin-bottom: 1em;
  font-size: 1.5em;
  font-weight: bold;
  white-space: pre-line;
  color: ${({ theme }) => theme.color.text};
`

const ArticleText = styled.div`
  margin-bottom: 1em;
  line-height: 1.6;
  white-space: pre-wrap;
`

const ArticleActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.light};
  border: none;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.accent};
  }
`
const ArticleHeadLine = styled.hr`
  /* background-color: ${({ theme }) => theme.color.mediumDark}; */
  border: 0.01em solid var(--dark);
  margin-top: 2em;
  margin-bottom: 2em;
`

const CommentsSection = styled.div`
  margin-top: 2em;
  width: 100%;
`

const CommentWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`

const CommentContent = styled.div`
  background-color: ${({ theme }) => theme.color.mediumDark};
  color: ${({ theme }) => theme.color.text};
  padding: 1em;
  border-radius: 0.5em;
  flex: 1;
`

const CommentUserImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const CommentText = styled.p`
  margin: 0;
  line-height: 1.4;
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
const article1 = {
  User: { id: 'elond', nickname: '마시마로', image: ping },
  content:
    '게시물 제목이 몇 글자까지 써질까요 알아맞춰 봅시다 코카콜라 맛있다 맛있으면 또먹지',
  text: '모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 국가는 모성의 보호를 위하여 노력하여야 한다. 환경권의 내용과 행사에 관하여는 법률로 정한다. 공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.\n\n공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다. 대통령의 선거에 관한 사항은 법률로 정한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다. 대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.\n\n법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 재판의 심리와 판결은 공개한다. 다만, 심리는 국가의 안전보장 또는 안녕질서를 방해하거나 선량한 풍속을 해할 염려가 있을 때에는 법원의 결정으로 공개하지 아니할 수 있다. 비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다. \n\n',
  likes: 23,
  commentsNum: 30,
  category: '자유',
  views: 129000,
  createdAt: '2002-10-20',
}

const comments = [
  {
    id: 1,
    user: { id: 'john_doe', nickname: 'John', image: ping },
    text: '정말 유익한 글입니다. 감사합니다!',
    createdAt: '2022-07-10',
  },
  {
    id: 2,
    user: { id: 'jane_doe', nickname: 'Jane', image: ping },
    text: '좋은 정보 공유해주셔서 감사합니다.',
    createdAt: '2022-07-11',
  },
  {
    id: 3,
    user: { id: 'jane_doe', nickname: 'Jane', image: ping },
    text: '좋은 정보 공유해주셔서 감사합니다.',
    createdAt: '2022-07-11',
  },
  {
    id: 4,
    user: { id: 'jane_doe', nickname: 'Jane', image: ping },
    text: '좋은 정보 공유해주셔서 감사합니다.',
    createdAt: '2022-07-11',
  },
  {
    id: 5,
    user: { id: 'jane_doe', nickname: 'Jane', image: ping },
    text: '좋은 정보 공유해주셔서 감사합니다.',
    createdAt: '2022-07-11',
  },
]

export default function ArticleDetail() {
  return (
    <ArticleDetailWrapper>
      <LoungeHeaderWrapper>
        <BoardDropdown />
        <LoungeSearchBar />
      </LoungeHeaderWrapper>
      <ArticleContentWrapper>
        <UserWrapper>
          <UserImage
            src={article1.User.image}
            alt={`${article1.User.nickname} profile image`}
            width={50}
            height={50}
          />
          <UserInfo>
            <UserNickname>{article1.User.nickname}</UserNickname>
            <span>{article1.User.id}</span>
          </UserInfo>
        </UserWrapper>
        <ArticleTitle>{article1.content}</ArticleTitle>
        <ArticleHeadLine />
        <ArticleText>
          <p>{article1.text}</p>
        </ArticleText>
        <ArticleHeadLine />
        <MetaData>
          <MetaDataItem>
            <span>조회수 {article1.views}</span>
          </MetaDataItem>
          <MetaDataItem>
            <StyledImage src={LikeIcon} alt="likeIcon" width={15} height={15} />
            <span>좋아요 {article1.likes}</span>
          </MetaDataItem>
          <MetaDataItem>
            <StyledCommentImage
              src={CommentsIcon}
              alt="commentsIcon"
              width={15}
              height={15}
            />
            <span>댓글 {article1.commentsNum}</span>
          </MetaDataItem>
          <MetaDataItem>
            <span>{article1.createdAt}</span>
          </MetaDataItem>
        </MetaData>
        <ArticleHeadLine />
        <ArticleActions>
          <ActionButton>Like</ActionButton>
          <ActionButton>Comment</ActionButton>
          <ActionButton>Share</ActionButton>
        </ArticleActions>
        <CommentsSection>
          {comments.map((comment) => (
            <CommentWrapper key={comment.id}>
              <CommentUserImage
                src={comment.user.image}
                alt={`${comment.user.nickname} profile image`}
                width={40}
                height={40}
              />
              <CommentContent>
                <UserNickname>{comment.user.nickname}</UserNickname>
                <CommentText>{comment.text}</CommentText>
                <MetaData>
                  <span>{comment.createdAt}</span>
                </MetaData>
              </CommentContent>
            </CommentWrapper>
          ))}
        </CommentsSection>
      </ArticleContentWrapper>
    </ArticleDetailWrapper>
  )
}
