import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

export const TabNavigation = () => {
  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to={`cashless`}
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }>
            Nağdsız
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to={`cash`}
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }>
            Nağd
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to={`special-offer`}
            className={({ isActive }) =>
              clsx(styles.link, styles.special, isActive && styles.active)
            }>
            Special offer
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
