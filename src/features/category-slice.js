import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'currentSelection',
  initialState: {
    name: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log(action.payload)
    },
  },
})

export const { selectGenreOrCategory } = categorySlice.actions

export default categorySlice.reducer
