import styled from 'styled-components'

const BrochureWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${({ theme }) => theme.color.error};
  width: 80em;
  height: 200em;
  z-index: 1;
`
export default function Brochure() {
  return <BrochureWrapper></BrochureWrapper>
}
