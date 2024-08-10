'use client'
import styles from './sign-in-form.module.scss'

export default function LoginForm() {
  return (
    <div className={styles['login-wrapper']}>
      <form className={styles['login-form']}>
        로그인 테스트기
        <input className={styles['login-input']}></input>
        <input className={styles['login-input']}></input>
        <button type="submit" className={styles['login-submit']}>
          로그인
        </button>
        <button className={styles['login-submit']}>회원가입</button>
      </form>
    </div>
  )
}
