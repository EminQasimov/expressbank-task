import styles from './table.module.scss'

export const CurrencyTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Currency</td>
          <td>USD</td>
          <td>RUR</td>
          <td>GBP</td>
          <td>YTL</td>
          <td>EUR</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Buy price</td>
          <td>1.6978</td>
          <td>1.6978</td>
          <td>1.6978</td>
          <td>1.6978</td>
          <td>1.6978</td>
        </tr>

        <tr>
          <td>Sell price</td>
          <td>1.6978</td>
          <td>1.6978</td>
          <td>1.6978</td>
          <td>1.6978</td>
          <td>1.6978</td>
        </tr>
      </tbody>
    </table>
  )
}
