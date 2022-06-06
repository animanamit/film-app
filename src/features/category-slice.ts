import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CategoryState {
  name: string | number
  page: number
  searchQuery: string
  selection: string
}

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: {
    name: '',
    page: 1,
    searchQuery: '',
    selection: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action: PayloadAction<any>) => {
      state.name = action.payload
      state.page = 1
    },
    selectPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSelection: (state, action: PayloadAction<string>) => {
      state.selection = action.payload
    },
  },
})

export const { selectGenreOrCategory, selectPage, setSelection } = categorySlice.actions

export default categorySlice.reducer
