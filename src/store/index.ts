import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { paymentsReducer } from '~/modules/payments'

import errorReducer from './error-reducer'
import loadingReducer from './loading-reducer'

export const store = configureStore({
  reducer: {
    error: errorReducer,
    loading: loadingReducer,
    payments: paymentsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
