'use client'
import media from '@/common/styles/media'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family:'NanumSquareNeo-Variable';
    src: url(./fonts/NanumSquareNeo-Variable.ttf) format(ttf);
    font-weight: normal;
    font-style: normal;
  } 
  html,body{
    font-family: 'NanumSquareNeo-Variable';
    max-width: 100vw;
    background-color: ${({ theme }) => theme.color.back};
    letter-spacing: -0.04em;  
    font-size: 16px;

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center ;

    ${media.medium`
      font-size: 12px;
    `};

    ${media.small`
      font-size: 8px;
    `};
  }
  
  :root{
    --main: '#3F3131', // 주 색상
    --sub : '#FFC786', // 부 색상
    --back: '#A68068', // 배경 색상
    --text : '#010101', // 텍스트 색상
    --accent : '#FF6B00', // 강조 색상
    --success: '#28a745', // 성공 상태 색상
    --error: '#dc3545', // 오류 상태 색상
    --warning: '#ffc107', // 경고 상태 색상
    --light : '#f8f9fa', // 밝은 색상
    --dark : '#343a40' // 어두운 색상
  }
`
