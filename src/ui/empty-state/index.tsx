import styles from './empty.module.scss'

export function EmptyState({ text }: { text: string }) {
  return (
    <div className={styles.empty}>
      <img src="/placeholder.svg" alt="placeholder" height="200px" />
      <br />
      <h1>{text}</h1>
    </div>
  )
}
