import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CategoryState {
  selectedCategory: string | number
  page: number
  searchQuery: string
  selectedCategoryLabel: string
}

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: {
    selectedCategory: '',
    page: 1,
    searchQuery: '',
    selectedCategoryLabel: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action: PayloadAction<any>) => {
      state.selectedCategory = action.payload
      state.page = 1
      state.searchQuery = ''
    },
    selectPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSelectedCategoryLabel: (state, action: PayloadAction<string>) => {
      state.selectedCategoryLabel = action.payload
    },
    searchMovie: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.selectedCategory = action.payload = ''
      state.selectedCategoryLabel = ''
    },
    resetReduxState: (state) => {
      state.selectedCategory = ''
      state.page = 1
      state.searchQuery = ''
      state.selectedCategoryLabel = ''
    },
  },
})

export const {
  selectGenreOrCategory,
  selectPage,
  setSelectedCategoryLabel,
  searchMovie,
  resetReduxState,
} = categorySlice.actions

export default categorySlice.reducer
