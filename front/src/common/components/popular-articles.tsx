import styled from 'styled-components'

const PopularWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${({ theme }) => theme.color.dark};
  width: 50vw;
  height: 300em;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Text = styled.div`
  color: white;
  font-weight: bolder;
`
export default function PopularArticles() {
  return (
    <PopularWrapper>
      <Text>안녕</Text>
    </PopularWrapper>
  )
}
