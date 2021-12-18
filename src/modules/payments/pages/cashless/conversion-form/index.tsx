import { BuyInfo } from './buy-info'
import { CommissionSection } from './commission-section'
import styles from './conversion.module.scss'
import { SellInfo } from './sell-info'

export const ConversionForm = () => {
  return (
    <div className={styles.conversionForm}>
      <h3 className={styles.title}>Make conversion</h3>

      <div className={styles.flex}>
        <SellInfo />
        <div className={styles.divider} />
        <BuyInfo />
      </div>

      <CommissionSection />
    </div>
  )
}
