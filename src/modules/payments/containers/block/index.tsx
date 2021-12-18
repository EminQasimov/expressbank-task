import clsx from 'clsx'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

export const Block = ({ children }: { children: ReactNode }) => {
  return <section className={styles.block}>{children}</section>
}
