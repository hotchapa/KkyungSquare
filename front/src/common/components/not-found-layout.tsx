'use client'
import { styled, ThemeProvider } from 'styled-components'
import { useEffect, useState, useLayoutEffect } from 'react'
import { GlobalStyle } from '@/common/styles/global-style'
import { darkTheme, mainTheme } from '@/common/styles/theme'
import TopNavbar from '@/common/components/top-navbar'
import ServiceLogo from '@/common/components/service-logo'
import media from '../styles/media'
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
  background-color: ${({ theme }) => theme.color.back};
`

const RootHeaderWrapper = styled.div<RootHeaderWrapperProps>`
  display: flex;
  flex-flow: row;
  align-items: center;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.back};
  padding: ${({ $scrolled }) => ($scrolled ? '0.2em' : '0.5em')};
  gap: 2em;
  position: fixed;
  z-index: 100;
  transition: padding 0.2s ease;
`

const RootBodyWrapper = styled.div`
  margin-top: 8em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 20px;
  color: white;
  ${media.medium`
    min-width: initial;
    margin-top: 6em;

  `};
  ${media.small`
    height: 30em;
    margin-top: 6em;
    font-size : 12px;
  `};
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
        <RootBodyWrapper>페이지를 찾을 수 없습니다ㅋㅋㅋ</RootBodyWrapper>
      </HomeLayoutWrapper>
    </ThemeProvider>
  )
}
