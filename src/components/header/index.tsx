import { Link } from 'react-router-dom'

import { Icon, Logo, Search } from '~/ui'

import { AccountInfo } from './account-info/account-info'
import styles from './header.module.scss'
import { LogoutIcon } from './icons'
import { IconsGroup } from './icons-group/icons-group'
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

      <IconsGroup />

      <AccountInfo />

      <Icon icon={<LogoutIcon />} active />
    </div>
  )
}
