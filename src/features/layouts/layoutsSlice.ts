import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/rootReducer'

export const drawerWidth = 240

export type LayoutsState = {
  drawerOpen: boolean
}

const layoutsSlice = createSlice({
  name: 'layouts',
  initialState: { drawerOpen: false } as LayoutsState,
  reducers: {
    toggleDrawer(state) {
      state.drawerOpen = !state.drawerOpen
    }
  }
})

export const {
  toggleDrawer
} = layoutsSlice.actions

export const selectLayouts = (state: RootState) => state.layouts

export default layoutsSlice.reducer