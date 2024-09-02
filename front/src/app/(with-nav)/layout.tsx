import styles from './layout.module.scss'
import NavbarWrapper from '@/common/components/top-navbar-wrapper'
import { ChildrenProps } from '@/common/types/common-type'

export default function AfterLoginlayout({ children, modal }: ChildrenProps) {
  return (
    <>
      <NavbarWrapper />
      <div className={styles.child}>{children}</div>
      {modal}
    </>
  )
}
