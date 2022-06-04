import { createSlice } from '@reduxjs/toolkit'

// export interface RootState {
//   name: string;
//   page: number;
//   searchQuery: string;
// }

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: {
    name: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log(action.payload)
      state.name = action.payload
      state.page = 1
    },
    selectPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { selectGenreOrCategory, selectPage } = categorySlice.actions

export default categorySlice.reducer
