'use client'
import styles from './sign-in-form.module.scss'
import { useFormState, useFormStatus } from 'react-dom'
import onSubmit from '../libs/sign-in-action'
import Link from 'next/link'

function showMessage(message: string | null | undefined) {
  if (message === 'no_id') {
    return '아이디를 입력하세요.'
  }
  if (message === 'no_password') {
    return '비밀번호를 입력하세요.'
  }
  return ''
}

export default function SignInForm() {
  const [state, formAction] = useFormState(onSubmit, { message: null })
  const { pending } = useFormStatus()
  return (
    <div className={styles['login-wrapper']}>
      <form className={styles['login-form']} action={formAction}>
        로그인 테스트기
        <div className={styles.inputDiv}>
          <label className={styles.inputLabel} htmlFor="id">
            아이디
          </label>
          <input
            id="id"
            name="id"
            className={styles.loginInput}
            type="text"
            placeholder=""
            required
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.inputLabel} htmlFor="password">
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            className={styles.loginInput}
            type="password"
            placeholder=""
            required
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className={styles['login-submit']}
        >
          로그인
        </button>
        <Link href={'/account/sign-up'} scroll={false}>
          <button className={styles['login-submit']}>회원가입</button>
        </Link>
      </form>
      <div className={styles.error}>{showMessage(state?.message)}</div>
    </div>
  )
}
