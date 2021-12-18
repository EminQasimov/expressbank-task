import { Input, Item, Select } from '~/ui'

import styles from './conversion.module.scss'

export const BuyInfo = () => {
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
            <Select label="Currency" placeholder="Currency">
              <Item>USD</Item>
              <Item>RUB</Item>
              <Item>GBP</Item>
              <Item>TRY</Item>
              <Item>EUR</Item>
            </Select>
          </div>
        </div>

        <div className={styles.lastInput}>
          <Select label="Account" placeholder="Account">
            <Item>USD</Item>
            <Item>RUB</Item>
            <Item>GBP</Item>
            <Item>TRY</Item>
            <Item>EUR</Item>
          </Select>
        </div>
      </div>
    </div>
  )
}
