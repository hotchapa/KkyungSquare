import styled from 'styled-components'
import media from '@/common/styles/media';

const TopNavBarWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40em;
  height: 4em;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  /* background-color: ${({ theme }) => theme.color.dark}; */
  gap: 3em;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  ${media.medium`
    min-width: initial;
    
  `};
  ${media.small`
    min-width: 100vw;
    height: 6em;
    font-size : 12px;
    border-radius : 0;
    justify-content: center;
    align-items: center;
  `};
`
const TopNavBarMenu = styled.li`
  font-size: 1.1em;
  font-weight: 590;
  color: white; 
  cursor: pointer;
  padding: 1em;
  &:hover{
    color:  ${({ theme }) => theme.color.main};
  }
`

export default function TopNavbar() {
  return(
    <TopNavBarWrapper>
      <TopNavBarMenu>1F&nbsp;&nbsp; 카페</TopNavBarMenu>
      <TopNavBarMenu>2F&nbsp;&nbsp; 캠핑존</TopNavBarMenu>
      <TopNavBarMenu>3F&nbsp;&nbsp; 뮤직&nbsp;&nbsp; 스테이션</TopNavBarMenu>
      {/* <TopNavBarMenu>세 번째 항목</TopNavBarMenu>
      <TopNavBarMenu>세 번째 항목</TopNavBarMenu> */}
    </TopNavBarWrapper>
  )
};
