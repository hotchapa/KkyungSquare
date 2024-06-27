"use client"

import { styled } from 'styled-components';
import media from '@/common/styles/media';

const TopNavbarWrapper = styled.div`
  letter-spacing: -0.04em;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 65px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${({ theme }) => theme.color.main};
  /* border: 2px solid black; */
  margin-top: 15px;
  z-index: 99;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    ${media.medium`
    width: 600px;
    min-width: initial;
  `};
    ${media.small`
    width: 400px;
    min-width: initial;
  `};
`

const  TopNavbarMenu = styled.div`
  font-size : ${({ theme }) => theme.fontsize.header3};
  color : ${({ theme }) => theme.color.light};
  font-weight: 600;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  padding: 10px;
  cursor: pointer;
  user-select : none;
  margin: auto;
  :hover{
    color : ${({ theme }) => theme.color.accent};
    font-weight: bold;

  }
    ${media.small`
  `};
`

export default function TopNavbar(){
  return(
    <TopNavbarWrapper>
      <TopNavbarMenu>
        <p>카페</p>
      </TopNavbarMenu>
      <TopNavbarMenu>
        <p>모닥불</p>
      </TopNavbarMenu>
      <TopNavbarMenu>
        <p>숲</p>
      </TopNavbarMenu>
    </TopNavbarWrapper>
  )

};
