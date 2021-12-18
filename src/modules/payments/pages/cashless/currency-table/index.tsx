import { DotIcon, DownArrowIcon, UpArrowIcon } from '~/assets/icons'
import { Flag, TFlag } from '~/ui'

import styles from './table.module.scss'

const currencies = [
  {
    flag: 'us',
    currency: 'USD',
    buyRate: 1.698,
    buyStatus: 'stable',
    sellRate: 1.702,
    sellStatus: 'stable',
  },
  {
    flag: 'ru',
    currency: 'RUB',
    buyRate: 2.013,
    buyStatus: 'up',
    sellRate: 2.05,
    sellStatus: 'down',
  },
  {
    flag: 'gb',
    currency: 'GBP',
    buyRate: 0.0263,
    buyStatus: 'stable',
    sellRate: 0.0272,
    sellStatus: 'stable',
  },
  {
    flag: 'tr',
    currency: 'TRY',
    buyRate: 2.27,
    buyStatus: 'up',
    sellRate: 2.325,
    sellStatus: 'down',
  },
  {
    flag: 'eu',
    currency: 'EUR',
    buyRate: 2.27,
    buyStatus: 'up',
    sellRate: 2.325,
    sellStatus: 'down',
  },
]

type CurrencyStatus = 'up' | 'down' | 'stable'

function getStatusIcon(status: CurrencyStatus) {
  const statusIcon = {
    stable: <DotIcon />,
    up: <UpArrowIcon />,
    down: <DownArrowIcon />,
  }[status]

  return statusIcon
}

export const CurrencyTable = () => {
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
