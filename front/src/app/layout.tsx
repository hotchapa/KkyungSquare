import type { Metadata } from 'next'
import './style.scss'
import { ThemeProvider } from 'next-themes'
import TopNavbar from '@/common/components/top-navbar'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: '뀽스퀘어',
  description: '뀽스퀘어에 어서오세요.',
}

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={pretendard.className}>
        <ThemeProvider>
          <TopNavbar />
          <div className='child'>
          {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
