import { createSlice } from '@reduxjs/toolkit'
import { Board } from 'types/board'
import { algoApi } from 'app/services/algo'
import { RootState } from 'app/rootReducer'

type BoardsState = {
  boards: Board[]
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState: { boards: [] } as BoardsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      algoApi.endpoints.getBoards.matchFulfilled,
      (state, { payload }) => {
        state.boards = payload
      }
    )
  }
})

export const selectBoards = (state: RootState) => state.boards

export default boardsSlice.reducer