'use client'

import styled from 'styled-components'

const CommunitySectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80em;
  background-color: ${({ theme }) => theme.color.back};
  color: ${({ theme }) => theme.color.light};
`

export default function CommunitySection() {
  return <CommunitySectionWrapper>와우</CommunitySectionWrapper>
}
