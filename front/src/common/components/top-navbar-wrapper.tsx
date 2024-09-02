// components/NavbarWrapper.js
import { cookies } from 'next/headers'
import TopNavbar from './top-navbar'

export default function NavbarWrapper() {
  // 서버 컴포넌트에서 쿠키 확인
  const cookieStore = cookies()
  const token = cookieStore.get('refreshToken')
  const isLoggedIn = !!token // 쿠키가 있으면 true, 없으면 false

  return <TopNavbar isLoggedIn={isLoggedIn} />
}
