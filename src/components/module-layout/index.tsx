import type { ReactNode } from 'react'

import styles from './module-layout.module.scss'

type LayoutProps = {
  title?: string
  children?: ReactNode
}

export function ModuleLayout(props: LayoutProps) {
  const { title, children } = props

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.heading}>{title}</h1>
      </div>

      <div className={styles.body}>{children}</div>
    </div>
  )
}
