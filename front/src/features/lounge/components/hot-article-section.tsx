import React from 'react'
import styles from './hot-article-section.module.scss'
import { AiOutlineLike, AiOutlineComment, AiFillPicture } from 'react-icons/ai' // 아이콘 추가
import Image from 'next/image'
import ImageIcon from '../../../../public/assets/picture-icon.svg'

interface Article {
  category: string
  hasImage: boolean
  title: string
  likes: number
  comments: number
  views: number
}

const articles: Article[] = [
  {
    category: '자유',
    hasImage: true,
    title: '오늘의 날씨는 어떤가요?',
    likes: 120,
    comments: 45,
    views: 1500,
  },
  {
    category: '공지',
    hasImage: false,
    title: '새로운 규칙 안내',
    likes: 95,
    comments: 20,
    views: 900,
  },
  {
    category: 'Q&A',
    hasImage: true,
    title: 'JavaScript에서 배열 다루기',
    likes: 200,
    comments: 100,
    views: 3000,
  },
  {
    category: '자유',
    hasImage: true,
    title: '주말에 가볼 만한 곳 추천',
    likes: 150,
    comments: 60,
    views: 2000,
  },
  {
    category: '리뷰',
    hasImage: false,
    title: '최신 스마트폰 리뷰',
    likes: 80,
    comments: 25,
    views: 1100,
  },
  {
    category: '공지',
    hasImage: false,
    title: '서버 점검 안내',
    likes: 70,
    comments: 10,
    views: 800,
  },
  {
    category: '뉴스',
    hasImage: true,
    title: '세계 경제 전망',
    likes: 90,
    comments: 40,
    views: 1800,
  },
  {
    category: 'Q&A',
    hasImage: true,
    title: 'React와 Vue.js 비교',
    likes: 110,
    comments: 55,
    views: 2200,
  },
]

export default function HotArticleSection() {
  return (
    <section
      className={styles['hot-article-section']}
      aria-labelledby="hot-topic-title"
    >
      <header>
        <h2 id="hot-topic-title" className={styles['hot-topic-title']}>
          HOT TOPIC
        </h2>
        <p className={styles['subtitle']}>지금 가장 떠오르는 게시글</p>
      </header>
      <ul className={styles['article-list']}>
        {articles.map((article, index) => (
          <li key={index} className={styles['article-item']}>
            <article
              className={styles['article']}
              aria-labelledby={`article-title-${index}`}
            >
              <div className={styles['article-header']}>
                <span className={styles['category']}>{article.category}</span>
                <span className={styles['image-indicator']}>
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
                </span>
              </div>
              <h3 id={`article-title-${index}`} className={styles['title']}>
                {article.title}
              </h3>
              <div className={styles['article-stats']}>
                <div className={styles['icon']}>
                  <AiOutlineLike
                    className={styles['like-icon']}
                    style={{ strokeWidth: 6, fontSize: '18px' }}
                  />
                  <span className={styles['likes']}>{article.likes}</span>
                </div>
                <div className={styles['icon']}>
                  <AiOutlineComment
                    className={styles['comment-icon']}
                    style={{ strokeWidth: 6, fontSize: '18px' }}
                  />
                  <span className={styles['comments']}>{article.comments}</span>
                </div>
                <span className={styles['views']}>조회수 {article.views}</span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
