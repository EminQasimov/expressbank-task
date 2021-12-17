import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { useStoreSelector } from '~/store/hooks'

/**
 * Global error handler - shows error message in the toast
 * when errors are thrown in the application
 */
export const Notifications = () => {
  const error = useStoreSelector((store) => store.error)

  useEffect(() => {
    if (error) {
      toast.error(error?.message)
    }
  }, [error])

  return <Toaster position="top-right" />
}
