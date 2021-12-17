import styles from './input.module.scss'

export function Input({ placeholder }) {
  return <input placeholder={placeholder} className={styles.input} />
}
