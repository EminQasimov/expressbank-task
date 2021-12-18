import { useButton } from '@react-aria/button'
import { ReactNode, useRef } from 'react'

import styles from './button.module.scss'

export function Button(props: { children: ReactNode }) {
  let ref = useRef<HTMLButtonElement>(null)
  let { buttonProps } = useButton(props, ref)
  let { children } = props

  return (
    <button className={styles.button} {...buttonProps} ref={ref}>
      {children}
    </button>
  )
}
