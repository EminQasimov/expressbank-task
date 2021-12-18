import clsx from 'clsx'

import { InfoIcon } from '~/assets/icons'
import { Item, Select } from '~/ui'

import styles from './conversion.module.scss'

export const CommissionSection = () => {
  return (
    <div className={styles.commission}>
      <div>
        <div className={styles.flex}>
          <div
            className={clsx(styles.formInputContainer, styles.holdingAccount)}>
            <Select
              label="Commission holding account"
              placeholder="Account"
              text="My account">
              <Item>AZ50AZEN40060495078744101001</Item>
              <Item>RU50AZEN40060495088944165601</Item>
              <Item>TR50AZEN40564495088944101001</Item>
            </Select>
          </div>

          <div
            className={clsx(
              styles.formInputContainer,
              styles.commissionAmountWrap,
            )}>
            <span className={styles.labelText}>
              Commisson amount <InfoIcon />
            </span>
            <div className={styles.commissionAmount}>180 ₼</div>
          </div>
        </div>

        <div className={styles.lastInput}>
          <Select label="Payment purpose" placeholder="ex. lorem ipsum">
            <Item>Lorem ipsum</Item>
            <Item>Lorem ipsum</Item>
            <Item>Lorem ipsum</Item>
          </Select>
        </div>
      </div>
    </div>
  )
}
