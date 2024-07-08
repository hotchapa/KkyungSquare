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
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  gap: 3em;

  ${media.medium`
    min-width: initial;
    
  `};
  ${media.small`
    min-width: 100vw;
    height: 6em;
    font-size : 12px;
    border-radius : 0;
    justify-content: center;
    align-items: center;
  `};
`
const TopNavBarMenu = styled.li`
  font-size: 1.1em;
  font-weight: 590;
  color: white;
  cursor: pointer;
  padding: 1em;
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
        <TopNavBarMenu>1F&nbsp;&nbsp; 웰컴 그라운드</TopNavBarMenu>
      </StyledLink>

      <StyledLink href={'/camping'}>
        <TopNavBarMenu>2F&nbsp;&nbsp; 캠핑존</TopNavBarMenu>
      </StyledLink>

      <StyledLink href={'/foreveryoung'}>
        <TopNavBarMenu>3F&nbsp;&nbsp; 포에버영</TopNavBarMenu>
      </StyledLink>

      {/* &nbsp;&nbsp; */}
      {/* <TopNavBarMenu>세 번째 항목</TopNavBarMenu>
      <TopNavBarMenu>세 번째 항목</TopNavBarMenu> */}
    </TopNavBarWrapper>
  )
}
