import { Input, Item, Select } from '~/ui'

import styles from './conversion.module.scss'

export const SellInfo = () => {
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
          <Select
            label="Account"
            placeholder="Account"
            text="My account"
            items={[{ key: '1', text: 'AZ50AZEN40060495078744101001' }]}
            defaultSelectedKey="1">
            <Item key="1">AZ50AZEN40060495078744101001</Item>
            <Item>RU50AZEN40060495088944165601</Item>
            <Item>TR50AZEN40564495088944101001</Item>
          </Select>
        </div>
      </div>
    </div>
  )
}
