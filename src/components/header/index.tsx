import {} from '~/assets/icons'

import styles from './header.module.scss'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Expressbank</div>
    </div>
  )
}
