import styles from './layout.module.scss'
import TopNavbar from '@/common/components/top-navbar'
export default function AfterLoginlayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <TopNavbar />
      <div className={styles.child}>{children}</div>
    </>
  )
}
