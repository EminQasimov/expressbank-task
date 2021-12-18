import { createSlice } from '@reduxjs/toolkit'

import { Payment } from '~/types'

import { getPaymentCurrencies } from './payments-api-actions'

export interface PaymentsState {
  currencies: Payment[]
}

const initialState: PaymentsState = {
  currencies: [],
}

export const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    // selectId: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPaymentCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload
    })
  },
})

// export const {} = paymentsSlice.actions
export const paymentsReducer = paymentsSlice.reducer
