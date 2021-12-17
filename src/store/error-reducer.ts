import { AnyAction, createAction, createReducer } from '@reduxjs/toolkit'

const initialState = null as any

export const errorEvent = createAction<AnyAction>('error/event')

/**
 * Global error reducer - handles all errors, can be used by Notifications Toasts
 */
const errorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(errorEvent, (state, action) => {
      state.error = action.payload
    })
    .addMatcher(
      (action) => {
        return action.type.endsWith('/rejected')
      },
      (state, action) => {
        return action.error
      },
    )
})

export default errorReducer
