import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from 'app/rootReducer'
import { Board } from 'types/board'
import { User } from 'types/user'

export type AuthRequest = {
  username: string
  password: string
}

export type AuthResponse = {
  success: boolean
  message: string
  user: User
  token: string
}

export const algoApi = createApi({
  reducerPath: 'algoApi',
  baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost/api/v1/',
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        headers.set('Access-Control-Allow-Origin', '*')
        headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        return headers
      }
  }),
  endpoints: (builder) => ({
    authenticate: builder.mutation<AuthResponse, AuthRequest>({
      query: (credentials) => ({
        url: 'auth/authenticate',
        method: 'POST',
        body: credentials
      })
    }),
    getBoards: builder.query<Board[], void>({
      query: () => 'board'
    })
  })
})

export const {
  useAuthenticateMutation,
  useGetBoardsQuery
} = algoApi

export const {
  authenticate,
  getBoards
} = algoApi.endpoints