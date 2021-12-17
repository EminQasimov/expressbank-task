import { NavLink } from 'react-router-dom'

import { UserIcon } from '~/assets/icons'

import styles from './sidebar.module.scss'

export function Sidebar() {
  const menus = [
    {
      title: 'Dashboard',
      path: 'dashboard',
      icon: <UserIcon />,
    },
    {
      title: 'Payments',
      path: 'payments',
      icon: <UserIcon />,
    },
    {
      title: 'Payroll',
      path: 'payroll',
      icon: <UserIcon />,
    },
    {
      title: 'Templates',
      path: 'templates',
      icon: <UserIcon />,
    },
    {
      title: 'History',
      path: 'history',
      icon: <UserIcon />,
    },
    {
      title: 'Products',
      path: 'products',
      icon: <UserIcon />,
    },
    {
      title: 'Express POS',
      path: 'express-pos',
      icon: <UserIcon />,
    },
    {
      title: 'Ani Pay',
      path: 'ani-pay',
      icon: <UserIcon />,
    },
    {
      title: 'Map',
      path: 'map',
      icon: <UserIcon />,
    },
  ]

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.menu}>
        {menus.map(({ title, icon, path }) => {
          return (
            <li key={title}>
              <NavLink
                to={`/${path}`}
                className={({ isActive }) =>
                  isActive ? `${styles.item} ${styles.active}` : styles.item
                }>
                {icon}
                <p className={styles.itemText}>{title}</p>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
