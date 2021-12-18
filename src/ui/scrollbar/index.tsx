import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { ReactNode } from 'react'

import styles from './scrollbar.module.scss'

const { Root, Viewport, Thumb, Corner } = ScrollAreaPrimitive

export const Scrollbar = ({ children }: { children: ReactNode }) => (
  <Root className={styles.StyledScrollArea}>
    <Viewport className={styles.StyledViewport}>{children}</Viewport>

    <ScrollAreaPrimitive.Scrollbar
      className={styles.StyledScrollbar}
      orientation="vertical">
      <Thumb className={styles.StyledThumb} />
    </ScrollAreaPrimitive.Scrollbar>

    <ScrollAreaPrimitive.Scrollbar
      className={styles.StyledScrollbar}
      orientation="horizontal">
      <Thumb className={styles.StyledThumb} />
    </ScrollAreaPrimitive.Scrollbar>
    <Corner className={styles.StyledCorner} />
  </Root>
)
