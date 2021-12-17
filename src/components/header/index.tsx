import { Logo } from '~/ui'

import styles from './header.module.scss'
import { StatsIcon } from './icons'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              <span className={styles.navIcon}>
                <StatsIcon />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
