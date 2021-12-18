import { Link } from 'react-router-dom'

import { Icon, Logo, Search } from '~/ui'

import { AccountInfo } from './account-info/account-info'
import styles from './header.module.scss'
import {
  BellIcon,
  CartIcon,
  EnvelopeIcon,
  LockIcon,
  LogoutIcon,
  SettingsIcon,
  StatsIcon,
  UsersIcon,
} from './icons'
import { Phone } from './phone/phone'

export function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>

      <Phone />

      <div className={styles.search}>
        <Search placeholder="Search" />
      </div>

      <ul className={styles.list}>
        <li>
          <Icon icon={<StatsIcon />} />
        </li>
        <li>
          <Icon icon={<CartIcon />} />
        </li>
        <li>
          <Icon icon={<LockIcon />} />
        </li>

        <li className={styles.divider} />

        <li>
          <Icon icon={<UsersIcon />} />
        </li>

        <li>
          <Icon icon={<SettingsIcon />} />
        </li>
        <li>
          <Icon icon={<EnvelopeIcon />} />
        </li>
        <li>
          <Icon icon={<BellIcon />} count={9} />
        </li>
      </ul>

      <div>
        <AccountInfo />
      </div>

      <div>
        <Icon icon={<LogoutIcon />} active />
      </div>
    </div>
  )
}
