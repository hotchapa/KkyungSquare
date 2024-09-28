import styles from './page.module.scss'
import AdvertiseSection from '@/common/components/advertise-section'
import TestBox from '@/features/lounge/components/test'
import HotArticleSection from '@/features/lounge/components/hot-article-section'
import BoardSection from '@/features/lounge/components/board-section'
export default function LoungePage() {
  return (
    <div>
      <AdvertiseSection></AdvertiseSection>
      <div className={styles.wrapper}>
        <HotArticleSection></HotArticleSection>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <BoardSection></BoardSection>
          <BoardSection></BoardSection>
          <BoardSection></BoardSection>
          <BoardSection></BoardSection>
        </div>
      </div>
    </div>
  )
}
