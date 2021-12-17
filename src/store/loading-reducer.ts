import { createReducer } from '@reduxjs/toolkit'

const initialState = false as any

/**
 * Global loading reducer - no need to handle all actions loading
 * states separately on each reducerSlices. which is handy for somecases.
 */
const loadingReducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher(
      (action) => {
        return action.type.endsWith('/pending')
      },
      () => {
        return true
      },
    )
    .addMatcher(
      (action) => {
        return (
          action.type.endsWith('/rejected') ||
          action.type.endsWith('/fulfilled')
        )
      },
      () => {
        return false
      },
    )
})

export default loadingReducer
