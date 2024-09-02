'use client'
import { useState } from 'react'
import styles from './sign-up-form.module.scss'
import onSubmit from '../libs/sign-up-action'

function showMessage(message: string | null | undefined) {
  if (message === 'no_userId') {
    return '아이디를 입력하세요.'
  }
  if (message === 'no_email') {
    return '이메일을 입력하세요.'
  }
  if (message === 'no_password') {
    return '비밀번호를 입력하세요.'
  }
  if (message === 'user_exists') {
    return '이미 사용 중인 아이디입니다.'
  }
  return ''
}

export default function SignUpForm() {
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
    <>
      <div className={styles.loginWrapper}>
        <div className={styles.loginForm}>
          <div className={styles.modalHeader}>
            <div>계정을 생성하세요.</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.modalBody}>
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
                <label className={styles.inputLabel} htmlFor="email">
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  className={styles.loginInput}
                  type="email"
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
            </div>
            <div className={styles.modalFooter}>
              <button
                type="submit"
                className={styles.loginSubmit}
                disabled={isPending}
              >
                가입하기
              </button>
              <div className={styles.error}>{showMessage(error)}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
