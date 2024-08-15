import styles from './page.module.scss'
import SignInForm from '@/features/account/components/sign-in-form'
export default function SignInPage() {
  return (
    <main className={styles['account-wrapper']}>
      <SignInForm></SignInForm>
    </main>
  )
}
