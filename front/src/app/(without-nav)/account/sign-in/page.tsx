import styles from './page.module.scss'
import LoginForm from '@/features/account/sign-in-form'
export default function SignInPage() {
  return (
    <main className={styles['account-wrapper']}>
      <LoginForm></LoginForm>
    </main>
  )
}
