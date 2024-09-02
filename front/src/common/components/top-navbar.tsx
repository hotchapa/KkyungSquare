'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from './top-navbar.module.scss'
import logo from '../../../public/assets/logo.png'
import signOut from '@/features/account/libs/sign-out.action'
export default function TopNavbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [hidden, setHidden] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        setHidden(true)
      } else if (scrollTop < lastScrollTop && scrollTop > 200) {
        setHidden(false)
      }

      setLastScrollTop(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  const handleLogout = async () => {
    await signOut() // 로그아웃 요청을 서버로 보냄
    window.location.href = '/welcome'
  }

  return (
    <div
      className={styles['nav-wrapper']}
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <div className={styles['head-section']}>
        <div className={styles['logo-section']}>
          <div className={styles['logo-image']}>
            <Image src={logo} width={20} height={20} alt="Logo" />
          </div>
          <div className={styles['logo']}>KKYUNG SQUARE</div>
        </div>

        <div className={styles['nav-section']}>
          <ul className={styles['nav-ul']}>
            <Link href={'/welcome'} scroll={false}>
              <li className={styles['nav-li']}>1F&nbsp;&nbsp;웰컴 그라운드</li>
            </Link>
          </ul>
          <ul className={styles['nav-ul']}>
            <Link href={'/camping'} scroll={false}>
              <li className={styles['nav-li']}>2F&nbsp;&nbsp;캠핑존</li>
            </Link>
          </ul>
          <ul className={styles['nav-ul']}>
            <Link href={'/lounge'} scroll={false}>
              <li className={styles['nav-li']}>3F&nbsp;&nbsp;스퀘어 라운지</li>
            </Link>
          </ul>
          <ul className={styles['nav-ul']}>
            <Link href={'/welcome'} scroll={false}>
              <li className={styles['nav-li']}>
                4F&nbsp;&nbsp;플레이 스테이션
              </li>
            </Link>
          </ul>
          <div className={styles['user-section']}>
            <ul className={styles['user-ul']}>
              {isLoggedIn ? (
                <a>
                  <li className={styles['user-li']} onClick={handleLogout}>
                    로그아웃
                  </li>
                </a>
              ) : (
                <Link href={'/account/sign-in'} scroll={false}>
                  <li className={styles['user-li']}>로그인</li>
                </Link>
              )}
            </ul>
            <ul className={styles['user-ul']}>
              <Link href={'/account/sign-in'} scroll={false}>
                <li className={styles['user-li']}>서비스 안내</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
