import clsx from 'clsx'

import { Item, Select } from '~/ui'

import styles from './conversion.module.scss'

export const CommissionSection = () => {
  return (
    <div className={styles.commission}>
      <div>
        <div className={styles.flex}>
          <div
            className={clsx(styles.formInputContainer, styles.holdingAccount)}>
            <Select label="Commission holding account" placeholder="Account">
              <Item>Red</Item>
              <Item>Orange</Item>
              <Item>Yellow</Item>
            </Select>
          </div>
          <div className={styles.spaceX} />
          <div className={styles.formInputContainer}>
            <span className={styles.labelText}>Commisson amount</span>
          </div>
        </div>

        <div className={styles.lastInput}>
          <Select label="Payment purpose" placeholder="ex. lorem ipsum">
            <Item>Red</Item>
            <Item>Orange</Item>
            <Item>Yellow</Item>
            <Item>Green</Item>
            <Item>Blue</Item>
            <Item>Purple</Item>
            <Item>Black</Item>
            <Item>White</Item>
            <Item>Lime</Item>
            <Item>Fushsia</Item>
          </Select>
        </div>
      </div>
    </div>
  )
}
