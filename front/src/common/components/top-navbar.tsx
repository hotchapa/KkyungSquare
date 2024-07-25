'use client'

import styled from 'styled-components'
import media from '@/common/styles/media'
import Link from 'next/link'

const TopNavBarWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40em;
  height: 4em;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  background-color: ${({ theme }) => theme.color.back};
  gap: 3em;

  ${media.medium`
    min-width: initial;
    
  `};
  ${media.small`
    min-width: 100vw;
    height: 6em;
    border-radius : 0;
    justify-content: center;
    align-items: center;
  `};
`
const TopNavBarMenu = styled.li`
  font-weight: 590;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.main};
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`

export default function TopNavbar() {
  return (
    <TopNavBarWrapper>
      <StyledLink href={'/welcome'}>
        <TopNavBarMenu>1F&nbsp;&nbsp; 웰컴&nbsp;그라운드</TopNavBarMenu>
      </StyledLink>

      <StyledLink href={'/camping'}>
        <TopNavBarMenu>2F&nbsp;&nbsp; 캠핑존</TopNavBarMenu>
      </StyledLink>

      <StyledLink href={'/lounge'}>
        <TopNavBarMenu>3F&nbsp;&nbsp; 스퀘어&nbsp;라운지</TopNavBarMenu>
      </StyledLink>

      <StyledLink href={'/play'}>
        <TopNavBarMenu>4F&nbsp;&nbsp; 플레이&nbsp;스테이션</TopNavBarMenu>
      </StyledLink>
      {/* &nbsp;&nbsp; */}
      {/* <TopNavBarMenu>세 번째 항목</TopNavBarMenu>
      <TopNavBarMenu>세 번째 항목</TopNavBarMenu> */}
    </TopNavBarWrapper>
  )
}
