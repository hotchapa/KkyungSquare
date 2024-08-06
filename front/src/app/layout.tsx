import type { Metadata } from 'next'
import './style.scss'
import { ThemeProvider } from 'next-themes'
export const metadata: Metadata = {
  title: '뀽스퀘어',
  description: '뀽스퀘어에 어서오세요.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
