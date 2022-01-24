import { configureStore } from '@reduxjs/toolkit'
import { algoApi } from './services/algo'

import rootReducer from './rootReducer'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(algoApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch

export default store