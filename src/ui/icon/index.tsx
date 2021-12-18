import clsx from 'clsx'

import styles from './icon.module.scss'

export function Icon({
  icon,
  count,
  active,
}: {
  icon: React.ReactNode
  count?: number
  active?: boolean
}) {
  return (
    <span className={clsx(styles.icon, active && styles.active)}>
      {icon}
      {count && <span className={styles.count}>{count}</span>}
    </span>
  )
}
