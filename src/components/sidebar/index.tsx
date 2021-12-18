import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import { UserIcon } from '~/assets/icons'
import { Scrollbar } from '~/ui'

import {
  AniPayIcon,
  DashboardIcon,
  ExpressPosIcon,
  HistoryIcon,
  MapIcon,
  PaymentsIcon,
  PayrollIcon,
  ProductsIcon,
  TemplatesIcon,
} from './icons'
import styles from './sidebar.module.scss'

export function Sidebar() {
  const menus = [
    {
      title: 'Dashboard',
      path: 'dashboard',
      icon: <DashboardIcon />,
    },
    {
      title: 'Payments',
      path: 'payments',
      icon: <PaymentsIcon />,
    },
    {
      title: 'Payroll',
      path: 'payroll',
      icon: <PayrollIcon />,
    },
    {
      title: 'Templates',
      path: 'templates',
      icon: <TemplatesIcon />,
    },
    {
      title: 'History',
      path: 'history',
      icon: <HistoryIcon />,
    },
    {
      title: 'Products',
      path: 'products',
      icon: <ProductsIcon />,
    },
    {
      title: 'Express POS',
      path: 'express-pos',
      icon: <ExpressPosIcon />,
    },
    {
      title: 'Ani Pay',
      path: 'ani-pay',
      icon: <AniPayIcon />,
    },
    {
      title: 'Map',
      path: 'map',
      icon: <MapIcon />,
    },
  ]

  return (
    <Scrollbar>
      <div className={styles.sidebar}>
        <ul className={styles.menu}>
          {menus.map(({ title, icon, path }) => {
            return (
              <li key={title}>
                <NavLink
                  to={`/${path}`}
                  className={({ isActive }) =>
                    clsx(styles.item, isActive && styles.active)
                  }>
                  <span className={styles.icon}>{icon}</span>
                  <p className={styles.itemText}>{title}</p>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </Scrollbar>
  )
}
