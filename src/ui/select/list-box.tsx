import { useListBox, useOption } from '@react-aria/listbox'
import { RefObject, useRef } from 'react'

import styles from './select.module.scss'

export function ListBox(props: any) {
  let ref = useRef()
  let { listBoxRef = ref, state } = props
  let { listBoxProps } = useListBox(props, state, listBoxRef)

  return (
    <ul {...listBoxProps} ref={listBoxRef} className={styles.listBox}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  )
}

export function Option({ item, state }: any) {
  let ref = useRef<HTMLLIElement | null>(null)

  let { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref as RefObject<HTMLElement>,
  )

  let backgroundColor
  let color = 'black'

  if (isSelected) {
    backgroundColor = '#faa61a'
    color = 'white'
  } else if (isFocused) {
    backgroundColor = '#e6e7ec'
  } else if (isDisabled) {
    backgroundColor = 'transparent'
    color = 'gray'
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      className={styles.optionLi}
      style={{
        background: backgroundColor,
        color: color,
      }}>
      {item.rendered}
    </li>
  )
}
