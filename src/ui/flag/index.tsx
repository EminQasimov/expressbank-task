import styles from './flag.module.scss'
import flags from './flags'

export type TFlag = keyof typeof flags

type FlagProps = {
  flag: TFlag
}

export const Flag = ({ flag }: FlagProps) => {
  const src = flags[flag]

  return (
    <span
      className={styles.flag}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  )
}
