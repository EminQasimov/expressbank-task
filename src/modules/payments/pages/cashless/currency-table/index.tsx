import { DotIcon, DownArrowIcon, UpArrowIcon } from '~/assets/icons'
import { Payment } from '~/types'
import { Flag, TFlag } from '~/ui'

import styles from './table.module.scss'

type CurrencyStatus = 'up' | 'down' | 'stable'

function getStatusIcon(status: CurrencyStatus) {
  const statusIcon = {
    stable: <DotIcon />,
    up: <UpArrowIcon />,
    down: <DownArrowIcon />,
  }[status]

  return statusIcon
}

export const CurrencyTable = ({ currencies }: { currencies: Payment[] }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.headTitle}>Currency</th>
          {currencies.map(({ flag, currency }) => (
            <th key={flag}>
              <div className={styles.tdInner}>
                <Flag flag={flag as TFlag} />
                <span className={styles.currency}>{currency}</span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.bodyTitle}>Buy price</td>
          {currencies.map(({ buyStatus, buyRate, currency }) => {
            return (
              <td key={currency}>
                <div className={styles.tdInner}>
                  <span className={styles.statusIcon}>
                    {getStatusIcon(buyStatus as CurrencyStatus)}
                  </span>
                  <span className={styles.rateNumber}>{buyRate}</span>
                </div>
              </td>
            )
          })}
        </tr>

        <tr>
          <td className={styles.bodyTitle}>Sell price</td>
          {currencies.map(({ sellStatus, sellRate, currency }) => {
            return (
              <td key={currency}>
                <div className={styles.tdInner}>
                  <span className={styles.statusIcon}>
                    {getStatusIcon(sellStatus as CurrencyStatus)}
                  </span>
                  <span className={styles.rateNumber}>{sellRate}</span>
                </div>
              </td>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}
