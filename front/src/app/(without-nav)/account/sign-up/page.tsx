import styles from './page.module.scss'
import SignUPForm from '@/features/account/components/sign-up-form'

export default function Page() {
  return (
    <div className={styles['sign-up-wrapper']}>
      <SignUPForm />
    </div>
  )
}
