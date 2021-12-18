import { Input } from '~/ui'

import styles from './conversion.module.scss'

const SellInfo = () => {
  return (
    <div className={styles.formCol}>
      <h4 className={styles.formTitle}>Sell info</h4>
      <div>
        <div className={styles.flex}>
          <div className={styles.formInputContainer}>
            <Input placeholder="Amount" label="Amount" />
          </div>
          <div className={styles.spaceX} />
          <div className={styles.formInputContainer}>
            <Input placeholder="Currency" label="Currency" />
          </div>
        </div>

        <div className={styles.lastInput}>
          <Input placeholder="Account" label="Account" />
        </div>
      </div>
    </div>
  )
}

const BuyInfo = () => {
  return (
    <div className={styles.formCol}>
      <h4 className={styles.formTitle}>Buy info</h4>

      <div>
        <div className={styles.flex}>
          <div className={styles.formInputContainer}>
            <Input placeholder="Amount" label="Amount" />
          </div>
          <div className={styles.spaceX} />
          <div className={styles.formInputContainer}>
            <Input placeholder="Currency" label="Currency" />
          </div>
        </div>

        <div className={styles.lastInput}>
          <Input placeholder="Account" label="Account" />
        </div>
      </div>
    </div>
  )
}

const CommissionSection = () => {
  return (
    <div className={styles.commission}>
      <div>
        <div className={styles.flex}>
          <div className={styles.formInputContainer}>
            <Input placeholder="Amount" label="Commission holding account" />
          </div>
          <div className={styles.spaceX} />
          <div className={styles.formInputContainer}>
            <span className={styles.labelText}>Commisson amount</span>
          </div>
        </div>

        <div className={styles.lastInput}>
          <Input placeholder="Account" label="Payment purpose" />
        </div>
      </div>
    </div>
  )
}

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
