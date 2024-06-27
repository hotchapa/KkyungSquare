"use client"

import { styled } from 'styled-components';
import media from '@/common/styles/media';
import { useState } from 'react';

const LeftNavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 300px;

    ${media.medium`
      display : none;
  `};
    ${media.small`
      display : none;
  `};
`
const LeftNavbarHeader = styled.div`
    font-size: ${({ theme }) => theme.fontsize.header1};
    font-weight: bold ;
    color: ${({ theme }) => theme.color.light};  
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
`

const LeftNavbarBoxWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 7px;
`

const LeftNavbarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow : column;
  width: 150px;
  height: 90px;
  background-color: ${({ theme }) => theme.color.main};  
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const LeftNavbarBoxHeader = styled.div`
    font-size: ${({ theme }) => theme.fontsize.header4};
    font-weight: bold ;
    color: ${({ theme }) => theme.color.light}; 
`
const LeftNavbarLine = styled.div`
    width: 75px;
    height: 1px;
    background-color: ${({ theme }) => theme.color.light};
    margin-top: 10px;
    margin-bottom: 25px;
`
const LeftNavbarBoxDescript = styled.div`
    margin-top: 5px;
    width: 90px;
    white-space: normal;
    font-size: ${({ theme }) => theme.fontsize.default};
    font-weight: medium ;
    color: ${({ theme }) => theme.color.light}; 
`




export default function LeftNavbar() {
  const [menu,setMenu] = useState<string>("카페");

  return(
    <LeftNavbarWrapper>
      <LeftNavbarHeader><p>{menu}</p></LeftNavbarHeader>
      <LeftNavbarLine/>
      <LeftNavbarBoxWrapper>
      <LeftNavbarBox>
        <LeftNavbarBoxHeader>
          <p>뀽뀽이와의 대화</p>
        </LeftNavbarBoxHeader>
        <LeftNavbarBoxDescript>
          <p>매일 뀽뀽이에게 위로받으세요</p>
        </LeftNavbarBoxDescript>
      </LeftNavbarBox>
      <LeftNavbarBox>
        <LeftNavbarBoxHeader>
            <p>재료 구하기</p>
        </LeftNavbarBoxHeader>
        <LeftNavbarBoxDescript>
          <p>카페에 쓰일 재료를 구해볼까요</p>
        </LeftNavbarBoxDescript>
      </LeftNavbarBox>
      </LeftNavbarBoxWrapper>
    </LeftNavbarWrapper>
  )
};
