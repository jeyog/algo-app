import { combineReducers } from '@reduxjs/toolkit'
import AuthReducer from 'features/auth/authSlice'
import LayoutsReducer from 'features/layouts/layoutsSlice'
import BoardsReducer from 'features/boards/boardsSlice'
import { algoApi } from './services/algo'

const rootReducer = combineReducers({
  [algoApi.reducerPath]: algoApi.reducer,
  auth: AuthReducer,
  layouts: LayoutsReducer,
  boards: BoardsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer