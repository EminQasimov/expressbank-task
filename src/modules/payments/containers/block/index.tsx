import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

export const Block = ({ children }) => {
  return <section className={styles.block}>{children}</section>
}
