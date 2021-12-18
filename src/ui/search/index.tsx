import { SearchIcon } from '~/assets/icons'

import styles from './search.module.scss'

export function Search({ placeholder }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <SearchIcon />
      </span>
      <input type="search" placeholder={placeholder} className={styles.input} />
    </div>
  )
}
