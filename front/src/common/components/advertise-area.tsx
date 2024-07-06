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
  margin-top: 8em;
  margin-bottom: 2em;
  ${media.medium`
    min-width: initial;
    margin-top: 6em;

  `};
  ${media.small`
    min-width: 100vw;
    height: 30em;
    margin-top: 6em;
    font-size : 12px;
    border-radius : 0;
    justify-content: center;
    align-items: center;
  `};
`
const AdvertiseTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.light};
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
