import {} from '~/assets/icons'
import { Logo } from '~/ui'

import styles from './header.module.scss'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  )
}
