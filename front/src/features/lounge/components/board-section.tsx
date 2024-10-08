import React from 'react'
import styles from './board-section.module.scss'
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import Image from 'next/image'
import ImageIcon from '../../../../public/assets/picture-icon.svg'
import Link from 'next/link'

interface Article {
  id: number
  boardName?: string
  category: string
  hasImage: boolean
  title: string
  likes: number
  comments: number
  views: number
}

const articles: Article[] = [
  {
    id: 1,
    boardName: '자유',
    category: '자유',
    hasImage: true,
    title: '오늘의 날씨는 어떤가요?',
    likes: 120,
    comments: 45,
    views: 1500,
  },
  {
    id: 2,
    boardName: '공지',
    category: '공지',
    hasImage: false,
    title: '새로운 규칙 안내',
    likes: 95,
    comments: 20,
    views: 900,
  },
  {
    id: 3,
    boardName: 'Q&A',
    category: 'Q&A',
    hasImage: true,
    title: 'JavaScript에서 배열 다루기',
    likes: 200,
    comments: 100,
    views: 3000,
  },
  {
    id: 4,
    boardName: '자유',
    category: '자유',
    hasImage: true,
    title: '주말에 가볼 만한 곳 추천',
    likes: 150,
    comments: 60,
    views: 2000,
  },
  {
    id: 5,
    boardName: '리뷰',
    category: '리뷰',
    hasImage: false,
    title: '최신 스마트폰 리뷰',
    likes: 80,
    comments: 25,
    views: 1100,
  },
  {
    id: 6,
    boardName: '공지',
    category: '공지',
    hasImage: false,
    title: '서버 점검 안내',
    likes: 70,
    comments: 10,
    views: 800,
  },
  {
    id: 17,
    boardName: '뉴스',
    category: '뉴스',
    hasImage: true,
    title: '세계 경제 전망',
    likes: 90,
    comments: 40,
    views: 1800,
  },
  {
    id: 768,
    boardName: '게임',
    category: 'Q&A',
    hasImage: true,
    title: 'React와 Vue.js 비교',
    likes: 110,
    comments: 55,
    views: 22300,
  },
  {
    id: 9,
    boardName: 'Q&A',
    category: 'Q&A',
    hasImage: true,
    title: 'React와 Vue.js 비교',
    likes: 110,
    comments: 55,
    views: 2200,
  },
  {
    id: 10,
    boardName: 'Q&A',
    category: 'Q&A',
    hasImage: true,
    title: 'React와 Vue.js 비교',
    likes: 110,
    comments: 55,
    views: 2100,
  },
]

export default function BoardSection() {
  return (
    <section className={styles['board-section']}>
      <div className={styles['board-header']}>
        <h2>
          {articles[0].boardName ? `${articles[0].boardName} 게시판` : '게시판'}
        </h2>
        <span className={styles['more-link']}>
          <Link href={`/lounge/${articles[0].boardName || ''}`} scroll={false}>
            더보기 &gt;
          </Link>
        </span>
      </div>
      <ul className={styles['article-list']}>
        {articles.map((article) => (
          <li key={article.id} className={styles['article-item']}>
            <Link
              href={`/lounge/${article.boardName || ''}/${article.id}`}
              scroll={false}
            >
              <article
                className={styles['article']}
                aria-labelledby={`article-title-${article}`}
              >
                <div className={styles['article-text']}>
                  <Image
                    src={ImageIcon}
                    alt="이미지 아이콘"
                    className={styles['image-icon']}
                    style={{
                      fill: article.hasImage ? '#00B3FF' : '#CCCCCC',
                      filter: article.hasImage
                        ? 'invert(60%) sepia(181%) saturate(490%) hue-rotate(179deg) brightness(99%) contrast(102%)'
                        : 'invert(80%) sepia(181%) saturate(490%) hue-rotate(179deg) brightness(99%) contrast(102%)',
                      marginRight: '8px',
                    }}
                  />
                  <span className={styles['article-title']}>
                    {article.title}
                  </span>
                </div>

                <div className={styles['article-info']}>
                  <div className={styles['icon']}>
                    <AiOutlineLike
                      className={styles['like-icon']}
                      style={{ strokeWidth: 6, fontSize: '18px' }}
                    />{' '}
                    {/* 추천수 아이콘 */}
                    <span>{article.likes}</span>
                  </div>
                  <div className={styles['icon']}>
                    <AiOutlineComment
                      className={styles['comment-icon']}
                      style={{ strokeWidth: 6, fontSize: '18px' }}
                    />{' '}
                    {/* 댓글수 아이콘 */}
                    <span>{article.comments}</span>
                  </div>
                  <div className={styles['views']}>조회수 {article.views}</div>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
