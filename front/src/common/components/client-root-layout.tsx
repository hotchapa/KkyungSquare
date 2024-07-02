'use client'

import { styled, ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { GlobalStyle } from '@/common/styles/global-style'
import { darkTheme, mainTheme } from '@/common/styles/theme'
import TopNavbar from '@/common/components/top-navbar'
import ServiceLogo from '@/common/components/service-logo'

interface RootHeaderWrapperProps {
  $scrolled: boolean
}

const RootLayoutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #2d465b;
`

const RootHeaderWrapper = styled.div<RootHeaderWrapperProps>`
  display: flex;
  flex-flow: row;
  align-items: center;
  align-self: baseline;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.back};
  padding: ${({ $scrolled }) => ($scrolled ? '0.2em' : '0.5em')};
  gap: 2em;
  position: fixed;
  z-index: 100;
  transition: padding 0.2s ease;
`

const AdvertiseWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.main};
  width: 100vw;
  height: 40em;
  margin-bottom: 2em;
`

const RootBodyWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #2d465b;
  max-width: 80em;
`

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [scrolled, setScrolled] = useState(false) // 스크롤 여부 상태

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setScrolled(true) // 스크롤이 일정 위치 이상일 때 scrolled 상태를 true로 변경
      } else {
        setScrolled(false) // 스크롤이 일정 위치 이하일 때 scrolled 상태를 false로 변경
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
      <RootHeaderWrapper $scrolled={scrolled}>
        {!scrolled && <ServiceLogo />}
        <TopNavbar />
      </RootHeaderWrapper>
      <AdvertiseWrapper />
      <RootBodyWrapper>{children}</RootBodyWrapper>
    </ThemeProvider>
  )
}
