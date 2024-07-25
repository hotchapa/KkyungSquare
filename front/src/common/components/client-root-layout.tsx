'use client'
import { styled, ThemeProvider } from 'styled-components'
import { useEffect, useState, useLayoutEffect } from 'react'
import { GlobalStyle } from '@/common/styles/global-style'
import { lightTheme, mainTheme } from '@/common/styles/theme'
import TopNavbar from '@/common/components/top-navbar'
import ServiceLogo from '@/common/components/service-logo'
import Footer from './footer'
interface RootHeaderWrapperProps {
  $scrolled: boolean
}

const RootLayoutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
const RootHeaderWrapper = styled.div<RootHeaderWrapperProps>`
  display: flex;
  flex-flow: row;
  align-items: center;
  /* align-self: baseline; */
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
  padding-top: 9em;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: flex-start;
  letter-spacing: 0em;
  font-size: ${({ theme }) => theme.fontsize.default};
`

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
      <RootLayoutWrapper>
        <RootHeaderWrapper $scrolled={scrolled}>
          {!scrolled && <ServiceLogo />}
          <TopNavbar />
        </RootHeaderWrapper>
        <RootBodyWrapper>{children}</RootBodyWrapper>
        <Footer />
      </RootLayoutWrapper>
    </ThemeProvider>
  )
}
