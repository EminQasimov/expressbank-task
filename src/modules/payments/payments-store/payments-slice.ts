import { createSlice } from '@reduxjs/toolkit'

import { Payment } from '~/types'

import { getPayments } from './payments-api-actions'

export interface PaymentsState {
  payments: Payment[]
}

const initialState: PaymentsState = {
  payments: [],
}

export const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    selectTabId: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPayments.fulfilled, (state, action) => {
      state.payments = action.payload
    })
  },
})

export const { selectTabId } = paymentsSlice.actions
export const paymentsReducer = paymentsSlice.reducer
