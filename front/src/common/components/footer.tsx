'use client'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 15em;
  width: 100vw;
  height: 20em;
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.text};
`

export default function Footer() {
  return <FooterWrapper>여긴 FOOTER</FooterWrapper>
}
