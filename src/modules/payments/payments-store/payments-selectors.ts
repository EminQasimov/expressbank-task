import { RootState } from '~/store'

export const selectCurrencies = (store: RootState) => store.payments.currencies
