"use client"

import { styled } from 'styled-components';
import media from '@/common/styles/media';

const MainPageWrapper = styled.div`
  letter-spacing: -0.04em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.color.back};
  font-size : ${({ theme }) => theme.fontsize.default};

  /* ${media.small`
    width: 86.6666vw;
    min-width: initial;
    padding-block: 33.3333vw 27.7777vw;
    font-size : 5px;
  `}; */
`
const LeftScreenWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 580px;
  margin : auto;
`
const RightScreenWrapper = styled.div`
  display: flex;
  width: 15vw;
  height: 580px;
  justify-content: center;
  align-items: center;
  margin : auto;
  /* background-color: ${({ theme }) => theme.color.sub}; */
`

const MainScreenWrapper = styled.div`
  display: flex;
  width: 1000px;
  height: 850px;
  background-color: ${({ theme }) => theme.color.light};
  border: 1px solid black;
  box-shadow: 0px 4px 30px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 15vh;
  margin-bottom: 15vh;



  ${media.medium`
    width: 86.6666vw;
    min-width: initial;
    font-size : 5px;
  `};
  ${media.small`
    width: 86.6666vw;
    min-width: initial;
    font-size : 5px;
  `};
`



export default function AfterLoginlayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
    {children}
    
    </>
  )
};
