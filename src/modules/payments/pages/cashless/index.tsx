import { Button, Input, Message } from '~/ui'

import { Block } from '../../containers'
import styles from './cashless.module.scss'
import { CurrencyTable } from './currency-table'

export const Cashless = () => {
  return (
    <Block>
      <CurrencyTable />

      <Message>
        Exchange operations are active Mon — Fri between 10:30 and 17:00
      </Message>

      <h2>Make conversion</h2>

      <Input placeholder="Amount" />

      <footer className={styles.footer}>
        <Button>Convert</Button>
      </footer>
    </Block>
  )
}
