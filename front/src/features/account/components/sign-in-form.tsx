'use client'
import { useState } from 'react'
import styles from './sign-in-form.module.scss'
import onSubmit from '../libs/sign-in-action'
import Link from 'next/link'

function showMessage(message: string | null | undefined) {
  if (message === 'no_userId') {
    return '아이디를 입력하세요.'
  }
  if (message === 'no_password') {
    return '비밀번호를 입력하세요.'
  }
  return ''
}

export default function SignInForm() {
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsPending(true)
    const formData = new FormData(event.currentTarget as HTMLFormElement)

    const result = await onSubmit(formData)
    setError(result.message)
    setIsPending(false)
  }

  return (
    <div className={styles['login-wrapper']}>
      <form className={styles['login-form']} onSubmit={handleSubmit}>
        로그인 테스트기
        <div className={styles.inputDiv}>
          <label className={styles.inputLabel} htmlFor="userId">
            아이디
          </label>
          <input
            id="userId"
            name="userId"
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
          disabled={isPending}
          className={styles['login-submit']}
        >
          로그인
        </button>
        <Link href={'/account/sign-up'} scroll={false}>
          <button className={styles['login-submit']}>회원가입</button>
        </Link>
      </form>
      <div className={styles.error}>{showMessage(error)}</div>
    </div>
  )
}
