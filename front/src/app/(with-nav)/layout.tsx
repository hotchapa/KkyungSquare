import styles from './layout.module.scss'
import TopNavbar from '@/common/components/top-navbar'
import { ChildrenProps } from '@/common/types/common-type'

export default function AfterLoginlayout({ children, modal }: ChildrenProps) {
  return (
    <>
      <TopNavbar />
      <div className={styles.child}>{children}</div>
      {modal}
    </>
  )
}
