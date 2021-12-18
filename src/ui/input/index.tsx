import styles from './input.module.scss'

type InputProps = {
  placeholder: string
  label: string
}

export function Input({ placeholder, label, ...rest }: InputProps) {
  return (
    <label>
      <p className={styles.labelText}>{label}</p>
      <input placeholder={placeholder} className={styles.input} {...rest} />
    </label>
  )
}
