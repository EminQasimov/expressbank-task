import { createAsyncThunk } from '@reduxjs/toolkit'

import * as api from '~/api'

export const getPayments = createAsyncThunk(
  'payments/getPayments',
  async () => {
    return await api.payments.fetchPayments()
  },
)
