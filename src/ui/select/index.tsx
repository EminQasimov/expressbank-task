// @ts-nocheck
import { useButton } from '@react-aria/button'
import { AriaSelectOptions, HiddenSelect, useSelect } from '@react-aria/select'
import { Item } from '@react-stately/collections'
import { useSelectState } from '@react-stately/select'
import { useRef } from 'react'

import ArrowIcon from './arrow-icon'
import { ListBox } from './list-box'
import { Popover } from './popover'
import styles from './select.module.scss'
export { Item }

type SelectProps = {
  label?: string
  placeholder?: string
  name?: string
  children?: any
}

export function Select(props: SelectProps & AriaSelectOptions<object>) {
  const { placeholder } = props
  // Create state based on the incoming props
  let state = useSelectState(props)

  // Get props for child elements from useSelect
  let ref = useRef()
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref,
  )

  // Get props for the button based on the trigger props from useSelect
  let { buttonProps } = useButton(triggerProps, ref)

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} {...labelProps}>
        {props.label}
      </label>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />

      <button className={styles.select} {...buttonProps} ref={ref}>
        <span {...valueProps}>
          {state.selectedItem ? (
            state.selectedItem.rendered
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </span>
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          <ArrowIcon />
        </span>
      </button>

      {state.isOpen && (
        <Popover isOpen={state.isOpen} onClose={state.close}>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  )
}
