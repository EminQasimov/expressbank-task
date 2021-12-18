import { PhoneIcon } from '../icons'
import styles from './phone.module.scss'

export const Phone = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <PhoneIcon />
      </div>
      <div className={styles.phone}>132</div>
    </div>
  )
}
