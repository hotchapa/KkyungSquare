'use client'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 20em;
  background-color: ${({ theme }) => theme.color.dark};
  margin-top: 10em;
  color: ${({ theme }) => theme.color.light};
`

export default function Footer() {
  return <FooterWrapper>여긴 FOOTER</FooterWrapper>
}
