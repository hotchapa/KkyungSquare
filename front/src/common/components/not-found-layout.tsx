'use client'
import { styled, ThemeProvider } from 'styled-components'
import { useEffect, useState, useLayoutEffect } from 'react'
import { GlobalStyle } from '@/common/styles/global-style'
import { darkTheme, mainTheme } from '@/common/styles/theme'
import TopNavbar from '@/common/components/top-navbar'
import ServiceLogo from '@/common/components/service-logo'
import PopularArticles from './popular-articles'
import Brochure from './brochure'

interface RootHeaderWrapperProps {
  $scrolled: boolean
}

const HomeLayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  /* background-color: ${({ theme }) => theme.color.accent}; */
`

const RootHeaderWrapper = styled.div<RootHeaderWrapperProps>`
  display: flex;
  flex-flow: row;
  align-items: center;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.back};
  /* border-bottom: 0.025em solid;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  padding: ${({ $scrolled }) => ($scrolled ? '0.2em' : '0.5em')};
  gap: 2em;
  position: fixed;
  z-index: 100;
  transition: padding 0.2s ease;
`

const RootBodyWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.back};
`
const ArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 29px;
  color: white;
`

export default function NotFoundLayout() {
  const [scrolled, setScrolled] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <HomeLayoutWrapper>
        <RootHeaderWrapper $scrolled={scrolled}>
          {!scrolled && <ServiceLogo />}
          <TopNavbar />
        </RootHeaderWrapper>
        <RootBodyWrapper>
          <ArticleWrapper>페이지를 찾을 수 없습니다.</ArticleWrapper>
        </RootBodyWrapper>
      </HomeLayoutWrapper>
    </ThemeProvider>
  )
}
