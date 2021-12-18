import { useEffect } from 'react'

import { getPaymentCurrencies, selectCurrencies } from '~/modules/payments'
import { useStoreDispatch, useStoreSelector } from '~/store/hooks'

export function useCurrencies() {
  const currencies = useStoreSelector(selectCurrencies)
  const dispatch = useStoreDispatch()

  useEffect(() => {
    dispatch(getPaymentCurrencies())
  }, [dispatch])

  return currencies
}
