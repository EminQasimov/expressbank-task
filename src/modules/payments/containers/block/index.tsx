import { ReactNode } from 'react'

import styles from './styles.module.scss'

export const Block = ({ children }: { children: ReactNode }) => {
  return <section className={styles.block}>{children}</section>
}
