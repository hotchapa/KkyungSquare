import styles from './advertise-section.module.scss'

export default function AdvertiseSection() {
  return (
    <div className={styles['ad-wrapper']}>
      <section className={styles['ad-section']}>
        <section className={styles['ad-textarea']}>
          <span className={styles['ad-title']}>
            강조할 제목을 작성하세요. H2 태그가 해당될 것 같습니다. 26px
          </span>
          <span className={styles['ad-content']}>
            강조할 body를 작성하세요. 16px에 해당합니다. 강조할 body를
            작성하세요. 16px에 해당합니다. 강조할 body를 작성하세요. 16px에
            해당합니다.
          </span>
        </section>
      </section>
    </div>
  )
}
