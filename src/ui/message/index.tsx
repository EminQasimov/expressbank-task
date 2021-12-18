import { ReactNode } from 'react'

import styles from './message.module.scss'

export function Message({ children }: { children: ReactNode }) {
  return (
    <div className={styles.message}>
      <p>{children}</p>
    </div>
  )
}
