import styles from './page.module.scss'
import ThemeSwitch from '@/common/libs/theme-button'
export default function Home() {
  return (
    <div>
      <ThemeSwitch />
      <section className={styles.dd}>와우맨</section>
      <section className={styles.dd}>와우맨</section>
      <section className={styles.dd}>와우맨</section>
    </div>
  )
}
