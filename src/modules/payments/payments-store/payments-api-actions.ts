import { createAsyncThunk } from '@reduxjs/toolkit'

import * as api from '~/api'

export const getPaymentCurrencies = createAsyncThunk(
  'payments/getPaymentCurrencies',
  async () => {
    return await api.payments.fetchPaymentCurrencies()
  },
)
