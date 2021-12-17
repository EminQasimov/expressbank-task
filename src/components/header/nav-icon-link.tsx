import styles from './header.module.scss'

export const NavIcon = ({ children }) => {
  return <span className={styles.navIcon}>{children}</span>
}
