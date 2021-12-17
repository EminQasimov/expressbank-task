import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as RouterProvider } from 'react-router-dom'

import { Notifications } from '~/components'
import { SoundProvider } from '~/contexts'
import { store } from '~/store'

/**
 * @description All app providers will goes here
 * Store, Router, Notification, Context Providers .. .etc
 */
export default function Providers(props: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <RouterProvider>
        <SoundProvider>{props.children}</SoundProvider>
      </RouterProvider>

      <Notifications />
    </Provider>
  )
}
