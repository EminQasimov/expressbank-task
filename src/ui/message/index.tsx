import styles from './message.module.scss'

export function Message({ children }) {
  return (
    <div className={styles.message}>
      <p>{children}</p>
    </div>
  )
}
