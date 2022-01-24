import { createSlice } from '@reduxjs/toolkit'
import { algoApi } from 'app/services/algo'
import { User } from 'types/user'
import { RootState } from 'app/rootReducer'

type AuthState = {
  success: boolean
  message: string
  user: User
  token: string
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      algoApi.endpoints.authenticate.matchFulfilled,
      (state, { payload }) => {
        state.success = payload.success
        state.message = payload.message
        state.user = payload.user
        state.token = payload.token
      }
    )
  }
})

export const selectAuth = (state: RootState) => state.auth
export const selectMe = (state: RootState) => state.auth.user
export const selectMyAuthority = (state: RootState) => state.auth.user?.authority

export default authSlice.reducer