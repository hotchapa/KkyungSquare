'use client'
import styled from 'styled-components'
import media from '../styles/media'

const AdvertiseWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.main};
  width: 100vw;
  height: 30em;
`
const AdvertiseTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
`
export default function AdvertiseArea() {
  return (
    <AdvertiseWrapper>
      <AdvertiseTextWrapper>
        <h1>안녕?</h1>
        <h1>안녕?</h1>
        <h1>안녕?</h1>
        <h1>안녕?</h1>
      </AdvertiseTextWrapper>
    </AdvertiseWrapper>
  )
}
