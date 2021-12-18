import { useCurrencies } from '~/modules/payments'
import { Button, Message } from '~/ui'

import styles from './cashless.module.scss'
import { ConversionForm } from './conversion-form'
import { CurrencyTable } from './currency-table'

export const Cashless = () => {
  const currencies = useCurrencies()

  return (
    <>
      <CurrencyTable currencies={currencies} />

      <Message>
        Exchange operations are active Mon — Fri between 10:30 and 17:00
      </Message>

      <ConversionForm />

      <footer className={styles.footer}>
        <Button>Convert</Button>
      </footer>
    </>
  )
}
