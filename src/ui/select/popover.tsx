import { FocusScope } from '@react-aria/focus'
import { DismissButton, useOverlay } from '@react-aria/overlays'
import React from 'react'

import styles from './select.module.scss'

export function Popover(props: any) {
  let ref = React.useRef()
  let { popoverRef = ref, isOpen, onClose, children } = props

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  let { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true,
    },
    popoverRef,
  )

  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={popoverRef} className={styles.popover}>
        {children}
        {/* hidden <DismissButton> component, allow screen reader users to dismiss the popup */}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  )
}
