'use client'

import styled from 'styled-components'

const CommunityLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.text};
`

export default function CommunityLayout() {
  return <CommunityLayoutWrapper></CommunityLayoutWrapper>
}
