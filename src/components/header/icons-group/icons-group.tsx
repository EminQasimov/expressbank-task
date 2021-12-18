import { Icon } from '~/ui'

import {
  BellIcon,
  CartIcon,
  EnvelopeIcon,
  LockIcon,
  SettingsIcon,
  StatsIcon,
  UsersIcon,
} from '../icons'
import styles from './icons-group.module.scss'

export const IconsGroup = () => {
  return (
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
  )
}
