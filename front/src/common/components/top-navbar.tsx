// TopNavbar component
'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from './top-navbar.module.scss'
import logo from '../../../public/assets/logo.png'

export default function TopNavbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Check the direction of the scroll
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        // Scrolling down
        setHidden(true)
      } else if (scrollTop < lastScrollTop && scrollTop > 200) {
        // Scrolling up
        setHidden(false)
      }

      // Update the last scroll position
      setLastScrollTop(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  return (
    <header
      className={styles['nav-wrapper']}
      style={{
        // opacity: scrolled ? 1 : 1,
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
            <Link href={'/welcome'}>
              <li className={styles['nav-li']}>1F&nbsp;&nbsp;웰컴 그라운드</li>
            </Link>
          </ul>
          <ul className={styles['nav-ul']}>
            <Link href={'/camping'}>
              <li className={styles['nav-li']}>2F&nbsp;&nbsp;캠핑존</li>
            </Link>
          </ul>
          <ul className={styles['nav-ul']}>
            <Link href={'/lounge'}>
              <li className={styles['nav-li']}>3F&nbsp;&nbsp;스퀘어 라운지</li>
            </Link>
          </ul>
          <ul className={styles['nav-ul']}>
            <Link href={'/welcome'}>
              <li className={styles['nav-li']}>
                4F&nbsp;&nbsp;플레이 스테이션
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  )
}
