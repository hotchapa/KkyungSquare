'use client'
import styled from 'styled-components'

const LoungeLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.back};
  color: ${({ theme }) => theme.color.light};
`

export default function ArticleDetail() {
  return <LoungeLayoutWrapper></LoungeLayoutWrapper>
}
